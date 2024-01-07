import React from "react";
import { Dashboard } from "pages/dashboard";

const routerAdmin = [{ component: <Dashboard />, path: "" }].map((i, key) => ({ ...i, key }));

export { routerAdmin };
