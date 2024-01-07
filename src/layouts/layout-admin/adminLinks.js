import React from "react";
import { BiSolidDashboard } from "react-icons/bi";

const adminLinks = [{ title: "Dashboard", to: "/admin", icon: <BiSolidDashboard /> }].map((i, key) => ({ ...i, key }));

export { adminLinks };
