import { useState } from "react";
import axios from "axios";

function GithubAnalyzer() {

  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const res = await axios.get(`http://localhost:5000/api/github/${username}`);
    setRepos(res.data);
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-4">GitHub Analyzer</h1>

      <input
        className="p-2 text-black"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <button
        onClick={fetchRepos}
        className="ml-3 bg-blue-500 px-4 py-2"
      >
        Analyze
      </button>

      <div className="mt-6">
        {repos.map(repo => (
          <div key={repo.id} className="mb-2">
            {repo.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubAnalyzer;