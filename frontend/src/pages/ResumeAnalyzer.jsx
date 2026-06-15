import { useState } from "react";
import axios from "axios";

function ResumeAnalyzer() {

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const uploadResume = async () => {

    const formData = new FormData();
    formData.append("resume", file);

    const res = await axios.post(
      "http://localhost:5000/api/resume/upload",
      formData
    );

    setText(res.data.text);
  };

  return (
    <div className="p-10 text-white">

      <h1 className="text-3xl mb-4">Resume Analyzer</h1>

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <button
        onClick={uploadResume}
        className="bg-green-500 px-4 py-2 ml-3"
      >
        Upload
      </button>

      <pre className="mt-6 bg-gray-800 p-4">
        {text}
      </pre>

    </div>
  );
}

export default ResumeAnalyzer;