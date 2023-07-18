import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { ABOUT_ROUTE, HOME_ROUTE } from "./consts";
import { Navigate } from "react-router-dom";

export const routes = [
	{ path: HOME_ROUTE, component: <Home/>, exact: true },
	{ path: ABOUT_ROUTE, component: <About/>, exact: true },
	{ path: '*', component: <Navigate to={HOME_ROUTE} replace/>, exact: false }
]
