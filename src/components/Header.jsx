import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images-removebg-preview.png";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth(); 
  const { theme, toggleTheme } = useTheme();
  const handleLogout = () => {
    logout();
  };

  return (
    <header
      className={`flex justify-between items-center p-5 bg-black h-24 ${
        theme === "dark" ? "bg-black " : "bg-white"
      }`}
    >
      <div className="flex gap-28 items-center">
        <div className="flex gap-5 items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-lg"
          />
          <div
            className={`text-2xl font-bold text-white ${
              theme === "dark" ? "!text-white" : "!text-black"
            }`}
          >
            BisbenOzger
          </div>
        </div>
        <nav>
          <ul className="flex">
            <li className="mx-4">
              <Link
                to="/home"
                className={`text-white no-underline ${
                  !user ? "pointer-events-none opacity-50" : ""
                } ${theme === "dark" ? "!text-white" : "!text-black"}`}
              >
                Home
              </Link>
            </li>
            <li
              className={`mx-4 cursor-pointer relative text-white ${
                !user ? "pointer-events-none opacity-50" : ""
              } ${theme === "dark" ? "!text-white" : "!text-black"}`}
              onClick={() => user && setShowDropdown(!showDropdown)}
            >
              Pages
              {showDropdown && user && (
                <div className="absolute top-14 left-0 bg-gray-800 flex p-5 gap-10 rounded-lg shadow-lg z-50">
                  <div className="flex flex-col">
                    <Link
                      to="/home"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      About
                    </Link>
                    <Link
                      to="/book"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Buy a book
                    </Link>
                    <a
                      href="/ai"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      BotAi
                    </a>
                    <a
                      href="/profile"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Profile
                    </a>
                    <a
                      href="/planner"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Planner
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="/logicGames"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Logic
                    </a>
                    <a
                      href="/lifestyle"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      LifeStyleCards
                    </a>
                    <a
                      href="#"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Licenses
                    </a>
                    <a
                      href="#"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Style-Guide
                    </a>
                    <a
                      href="#"
                      className="text-white no-underline py-2 px-3 rounded hover:bg-gray-700"
                    >
                      Changelog
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li className="mx-4">
              <Link
                to="/about"
                className={`text-white no-underline ${
                  !user ? "pointer-events-none opacity-50" : ""
                } ${theme === "dark" ? "!text-white" : "!text-black"}`}
              >
                About
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/cart"
                className={`text-white no-underline ${
                  !user ? "pointer-events-none opacity-50" : ""
                } ${theme === "dark" ? "!text-white" : "!text-black"}`}
              >
                Cart (0)
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        {!user ? (
          <li className="m-4">
            <Link
              to="/"
              className="bg-red-900 text-black py-4 px-7 rounded-lg text-sm font-medium tracking-wider"
            >
              Sign In
            </Link>
          </li>
        ) : (
          <li className="mx-4">
            <button
              onClick={handleLogout}
              className="bg-red-900 text-black py-4 px-7 rounded-lg text-sm font-medium tracking-wider"
            >
              Logout
            </button>
          </li>
        )}
        <button
          className={`bg-white text-black py-4 px-7 rounded-lg text-sm font-medium tracking-wider ${
            !user ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Book an appointment
        </button>
        <button
          onClick={toggleTheme} 
          className="theme-toggle-btn"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
