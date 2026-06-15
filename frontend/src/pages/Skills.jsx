import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Skills() {

  const { courses } = useContext(AppContext);

  const skills = courses.map(course => ({
    name: course.title,
    level: course.progress
  }));

  return (

    <div className="p-10 text-white">

      <h2 className="text-3xl mb-6">
        Skill Tracker
      </h2>

      {skills.length === 0 && (
        <p>No skills yet. Add courses to generate skills.</p>
      )}

      {skills.map((skill, index) => (

        <div key={index} className="mb-5">

          <p className="mb-1">{skill.name}</p>

          <div className="w-full bg-gray-700 h-3 rounded">

            <div
              className="bg-green-500 h-3 rounded"
              style={{ width: `${skill.level}%` }}
            />

          </div>

          <p className="text-sm mt-1">{skill.level}%</p>

        </div>

      ))}

    </div>

  );
}

export default Skills;