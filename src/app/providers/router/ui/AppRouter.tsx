import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../config/routeConfig";

const token = true;
const userRole = true;
const isAuth = true;

console.log("privateRoutes", privateRoutes);

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {token && userRole && isAuth
        ? privateRoutes.map((route) => (
            <Route {...route} key={route.path} element={<route.element />} />
          ))
        : publicRoutes.map((route) => (
            <Route {...route} key={route.path} element={<route.element />} />
          ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
