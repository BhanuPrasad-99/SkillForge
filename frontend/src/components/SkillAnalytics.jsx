import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function SkillAnalytics() {

  const skillData = {
    labels: ["React", "Node.js", "MongoDB", "JavaScript"],
    datasets: [
      {
        label: "Skill Level",
        data: [80, 60, 50, 75],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444"
        ]
      }
    ]
  };

  const courseData = {
    labels: ["FullStack", "DSA", "DevOps"],
    datasets: [
      {
        label: "Course Progress %",
        data: [70, 50, 30],
        backgroundColor: "#6366F1"
      }
    ]
  };

  return (

    <div className="grid grid-cols-2 gap-6 mt-10">

      <div className="bg-gray-800 p-6 rounded">
        <h3 className="mb-4 text-xl">Skill Distribution</h3>
        <Pie data={skillData} />
      </div>

      <div className="bg-gray-800 p-6 rounded">
        <h3 className="mb-4 text-xl">Course Progress</h3>
        <Bar data={courseData} />
      </div>

    </div>

  );
}

export default SkillAnalytics;