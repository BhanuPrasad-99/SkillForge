import SkillAnalytics from "../components/SkillAnalytics";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Dashboard() {

  const navigate = useNavigate();
   
   const { courses } = useContext(AppContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (

    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar handleLogout={handleLogout} />

      <div className="flex-1 p-10">

        <h2 className="text-3xl font-bold mb-8">
          Welcome to SkillForge Dashboard 🚀
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <Card
            title="Courses"
            description="Track your learning progress"
          />

          <Card
            title="Skills"
            description="Manage your skill development"
          />

          <Card
            title="Internships"
            description="Track internship applications"
          />
          <SkillAnalytics />
         import { Link } from "react-router-dom";
<h3>Total Courses: {courses.length}</h3>
<ul>

<Link to="/dashboard">
<li>Dashboard</li>
</Link>

<Link to="/courses">
<li>Courses</li>
</Link>

<Link to="/skills">
<li>Skill Tracker</li>
</Link>

<Link to="/profile">
<li>Profile</li>
</Link>

</ul>
        </div>

      </div>

    </div>
    
  );
}

export default Dashboard;