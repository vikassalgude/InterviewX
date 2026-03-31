# InterviewX

InterviewX is a technical interview platform designed for real-time 1-on-1 coding assessments. It combines a synchronized IDE, video conferencing, and an automated code judging engine to simulate a professional interview environment.

## Technical Stack & Versions

* **Frontend**: React.js (v18.3.1) for UI components and state management.
* **Styling**: Tailwind CSS (v4.0) with DaisyUI for a high-performance, utility-first design system.
* **Backend**: Node.js and Express.js for RESTful API architecture.
* **Real-time Video**: Stream Video SDK (v1.24.0) for low-latency communication.
* **Real-time Chat**: Stream Chat SDK (v9.23.0) and React components (v13.9.0) for synchronized messaging.
* **Database**: MongoDB for flexible session and user data storage.
* **Authentication**: Clerk for secure user management.
* **Code Execution**: Piston API for isolated, multi-language execution.
* **State Management**: TanStack Query (v5.0) for efficient data fetching and caching.
* **Code Editor**: Monaco Editor for a VSCode-like development experience in the browser.

## Key Features

* **VSCode-Integrated Editor**: Uses the Monaco Editor API to provide syntax highlighting and a professional coding experience.
* **Multi-Language Code Execution**: Connects to a stateless execution engine (Piston API) to compile and run code in C++, JavaScript, Python, and Java.
* **Real-time Video & Chat**: Integrated Stream Video SDK with support for screen sharing, camera/mic toggling, and instant messaging.
* **Automated Test Runner**: A custom logic layer that injects test cases into user code and validates results using string normalization.
* **Strict Session Guard**: Backend logic that limits room capacity to exactly 2 participants (Host + 1 Candidate) to ensure interview integrity.
* **Live Dashboard**: Progress tracking with success rates and detailed history of previous coding sessions.

## Technical Implementation

### Code Judging Pipeline
The core of the platform is the "Judge" logic. Instead of just displaying output, the system:
1.  Wraps user-submitted code with a test-case driver.
2.  Sends the payload to an isolated execution environment via the Piston API.
3.  Sanitizes the raw `stdout` using Regular Expressions to remove formatting noise and trailing whitespaces.
4.  Returns a "Success" or "Fail" verdict based on a comparison with hidden expected outputs.

### Session Management & Security
To ensure session security, I implemented a locking mechanism in the Node.js/Express backend. When a user attempts to join a session, the server validates the current participant count. If the count is $\ge 2$ and the user is not the designated host, access is denied. 

To solve the issue of "ghost" participants (where a user leaves but the count remains high), I utilized Stream webhooks to listen for `call.session_participant_left` events, triggering an automatic decrement of the participant count in the MongoDB database.

## Installation

1.  Clone the repository: `git clone https://github.com/vikassalgude/InterviewX.git`
2.  Install dependencies: `npm run build` (This installs both frontend and backend dependencies).
3.  Set up environment variables for Clerk, Stream, and MongoDB.
4.  Start the production server: `npm start`.
