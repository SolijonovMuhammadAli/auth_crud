import React from "react";
import Home from "pages/Home";
import { Login } from "pages/login";

const routerMain = [
  { component: <Home />, path: "/" },
  { component: <Login />, path: "/login" },
].map((i, key) => ({
  ...i,
  key,
}));

export { routerMain };
