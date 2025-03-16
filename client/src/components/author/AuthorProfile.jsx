import React from 'react';
import '../../font.css'
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ColorContext'; // Import ThemeContext

function AuthorProfile() {
  const { isNightMode } = React.useContext(ThemeContext); // Access theme context

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar - positioned below header */}
      <div className="sticky top-16 left-0 right-0 z-40 bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <NavLink
              to="articles"
              className={({ isActive }) =>
                `px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Articles
            </NavLink>
            <NavLink
              to="article"
              className={({ isActive }) =>
                `px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Add New Article
            </NavLink>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthorProfile;