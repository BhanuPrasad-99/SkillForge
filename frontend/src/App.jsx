import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Skills from "./pages/Skills";
import GithubAnalyzer from "./pages/GithubAnalyzer";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";

function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/" />}
        />

        <Route
          path="/courses"
          element={token ? <Courses /> : <Navigate to="/" />}
        />

        <Route
          path="/skills"
          element={token ? <Skills /> : <Navigate to="/" />}
        />

        {/* New Features */}
        <Route
          path="/github"
          element={token ? <GithubAnalyzer /> : <Navigate to="/" />}
        />

        <Route
          path="/resume"
          element={token ? <ResumeAnalyzer /> : <Navigate to="/" />}
        />

        <Route
          path="/roadmap"
          element={token ? <Roadmap /> : <Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;