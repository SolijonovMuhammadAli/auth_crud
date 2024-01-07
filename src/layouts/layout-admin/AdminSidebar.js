import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";
import { adminLinks } from "./adminLinks";
import { useDispatch } from "react-redux";
import { logout } from "features/authentication/hooks/useSlice";

function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <Fragment>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            {adminLinks.map(({ key, title, to, icon }) => (
              <li key={key}>
                <NavLink to={to} className="flex items-center p-2  rounded-lg  group text-gray-900 hover:bg-gray-100">
                  {icon}
                  <span className="ml-3">{title}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                onClick={handleLogout}
                className="flex items-center p-2  rounded-lg  group text-gray-900 hover:bg-gray-100">
                <BiLogOut />
                <span className="ml-3">Chiqish</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;
