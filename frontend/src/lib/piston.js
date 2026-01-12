const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_CONFIG = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  cpp: { language: "cpp", version: "10.2.0" },
};

export async function executeCode(language, code) {
  try {
    const config = LANGUAGE_CONFIG[language];
    if (!config) {
      return { success: false, error: "Unsupported language" };
    }

    const payload = {
      language: config.language,
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: code,
        },
      ],
    };

    // only attach version if required
    if (config.version) {
      payload.version = config.version;
    }

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        success: false,
        error: `HTTP ${response.status}: ${text}`,
      };
    }

    const data = await response.json();

    if (data.compile?.stderr) {
      return { success: false, error: data.compile.stderr };
    }

    if (data.run?.stderr) {
      return {
        success: false,
        output: data.run.stdout || "",
        error: data.run.stderr,
      };
    }

    return {
      success: true,
      output: data.run.stdout || "No output",
    };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

function getFileExtension(language) {
  return {
    javascript: "js",
    python: "py",
    java: "java",
    cpp: "cpp",
    go: "go",
    csharp: "cs",
  }[language];
}
