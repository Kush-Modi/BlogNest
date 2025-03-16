import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../../font.css'
import { ThemeContext } from '../../contexts/ColorContext'; // Import ThemeContext

function AdminDash() {
    const { isNightMode } = React.useContext(ThemeContext); // Access theme context
  return (
    <div className="author-profile p-6 bg-gray-900 text-white">
      <ul className="flex justify-around text-lg font-semibold fontly">
        <li>
          <NavLink
            to="articles"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            All Users
          </NavLink>
        </li>
      </ul>

      <div className="mt-5 p-4 text-center">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDash