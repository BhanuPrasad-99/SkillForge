import { Link } from "react-router-dom";

function Sidebar({ handleLogout }) {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col">

      <h1 className="text-2xl font-bold mb-10">
        SkillForge
      </h1>

      <nav className="flex flex-col space-y-5">

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/profile" className="hover:text-blue-400">
          Profile
        </Link>

        <Link to="/courses" className="hover:text-blue-400">
          Courses
        </Link>

        <Link to="/skills" className="hover:text-blue-400">
          Skill Tracker
        </Link>

        <button
          onClick={handleLogout}
          className="text-left text-red-400 hover:text-red-500"
        >
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;