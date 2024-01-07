import React from "react";
import { MainLayout, AdminLayout } from "layouts";

import { routerAdmin } from "./routerAdmin";
import { routerMain } from "./routerMain";

const routerLayout = [
  { component: <MainLayout />, path: "/", routes: routerMain, isPrivate: false },
  { component: <AdminLayout />, path: "/admin", routes: routerAdmin, isPrivate: true },
].map((i, key) => ({ ...i, key }));

export { routerLayout };
