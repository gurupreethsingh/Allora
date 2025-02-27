import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../common_components/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="flex justify-between items-center border-b px-6 py-3 bg-gray-100">
      {/* Left Navigation */}
      <ul className="flex space-x-4">
        <li>
          <Link className="text-dark font-semibold" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-dark font-semibold" to="/contact-us">Contact</Link>
        </li>
        <li>
          <Link className="text-dark font-semibold" to="/about-us">About</Link>
        </li>
      </ul>

      {/* Right Navigation */}
      <ul className="flex space-x-4">
        {!isLoggedIn ? (
          <>
            <li>
              <Link className="text-dark font-semibold" to="/login">Login</Link>
            </li>
            <li>
              <Link className="text-dark font-semibold" to="/register">Register</Link>
            </li>
          </>
        ) : (
          <div className="relative">
            {/* Button to open dropdown */}
            <button
              className="flex items-center space-x-2 text-dark font-semibold"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <FaUserCircle size={24} />
              <span>{user?.name || user?.email}</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
