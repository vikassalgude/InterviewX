import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { 
  ChevronRightIcon, 
  Code2Icon, 
  SearchIcon, 
  XIcon, 
  TerminalIcon 
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  // 1. STATES: Filtering and Searching
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const problemsArray = Object.values(PROBLEMS);

  // 2. COMBINED FILTER LOGIC (Difficulty + Search)
  const filteredProblems = problemsArray.filter((problem) => {
    const matchesDifficulty = 
      selectedDifficulty === "All" || problem.difficulty === selectedDifficulty;
    
    const matchesSearch = 
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  // 3. GLOBAL STATS (Always based on full data)
  const easyCount = problemsArray.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = problemsArray.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problemsArray.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER SECTION */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-3 flex items-center justify-center md:justify-start gap-3">
            {/* <TerminalIcon className="size-10 text-primary" /> */}
            Practice Problems
          </h1>
          <p className="text-base-content/60 text-lg">
            Sharpen your codings skills with these set of questions
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* SEARCH INPUT */}
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
            <input
              type="text"
              placeholder="Search problems, categories, or keywords..."
              className="input input-bordered w-full pl-12 bg-base-100 shadow-sm focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle btn-xs"
              >
                <XIcon className="size-4" />
              </button>
            )}
          </div>

          {/* DIFFICULTY SELECTOR (Join group) */}
          <div className="join shadow-sm bg-base-100 border border-base-300 self-center md:self-auto">
            {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`join-item btn btn-md px-6 ${
                  selectedDifficulty === difficulty ? "btn-primary" : "btn-ghost"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* PROBLEMS LIST */}
        <div className="grid gap-4">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="group card bg-base-100 border border-base-300 hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="card-body p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Code2Icon className="size-6" />
                      </div>
                      
                      {/* Text Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                          <span className={`badge badge-sm font-bold ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          {problem.category}
                        </p>
                        <p className="text-base-content/70 line-clamp-1 md:line-clamp-2 text-sm md:text-base">
                          {problem.description.text}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Action */}
                    <div className="hidden sm:flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Solve</span>
                      <ChevronRightIcon className="size-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            /* EMPTY STATE */
            <div className="card bg-base-100 border-2 border-dashed border-base-300 py-16 text-center">
              <SearchIcon className="size-12 mx-auto text-base-content/20 mb-4" />
              <h3 className="text-xl font-bold">No matches found</h3>
              <p className="text-base-content/50 mb-6">Try adjusting your filters or search term.</p>
              <button 
                onClick={() => {setSearchTerm(""); setSelectedDifficulty("All");}}
                className="btn btn-outline btn-primary btn-sm w-fit mx-auto"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* STATS SUMMARY */}
        <div className="mt-12 card bg-base-100 shadow-lg border border-base-300">
          <div className="stats stats-vertical lg:stats-horizontal w-full">
            <div className="stat">
              <div className="stat-title">Total Library</div>
              <div className="stat-value text-primary">{problemsArray.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Easy</div>
              <div className="stat-value text-success">{easyCount}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Medium</div>
              <div className="stat-value text-warning">{mediumCount}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Hard</div>
              <div className="stat-value text-error">{hardCount}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProblemsPage;