import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full bg-black text-white px-4 py-3 border-b shadow-sm flex items-center justify-between gap-4 flex-wrap">
      {/* Left: Toggle Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hidden md:block text-white-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center gap-4 flex-wrap justify-end">
        <ul className="flex items-center space-x-3">
          <li>
            <Link
              to="/dashboard"
              className="px-4 py-2.5 rounded-md text-base font-semibold text-white-700 hover:text-white hover:bg-blue-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-md text-base font-semibold text-white-700 hover:text-white hover:bg-blue-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-md text-base font-semibold text-white-700 hover:text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
