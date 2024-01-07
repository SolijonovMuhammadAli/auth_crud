import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerLayout } from "./routers";
import ErrorPage from "pages/ErrorPage";
import { useSelector } from "react-redux";
import { selectAuth } from "features/authentication/hooks/useSlice";

function Router() {
  const isAuth = useSelector(selectAuth);

  return (
    <Routes>
      {routerLayout.map(
        ({ routes, path, component, isPrivate, key }) =>
          (!isPrivate || isAuth) && (
            <Route key={key} path={path} element={component}>
              {routes.map((route) => (
                <Route key={route.key} path={route.path} element={route.component} />
              ))}
            </Route>
          )
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
