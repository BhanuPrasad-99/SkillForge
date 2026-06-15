import { useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");

  const addCourse = async () => {
    if (!title.trim()) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/courses",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourses([...courses, res.data]);
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses</h1>

      <input
        type="text"
        placeholder="Enter Course Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addCourse}>Add Course</button>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.title || JSON.stringify(course)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;