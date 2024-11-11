import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import OrganizationDashboard from "./pages/OrganaizationDashboard";

const AppRoutes = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: loggedInUser ? (
          loggedInUser.role === "admin" ? (
            <Navigate to="/admin" replace />
          ) : loggedInUser.role === "organization" ? (
            <Navigate to="/organization" replace />
          ) : (
            <Navigate to="/home" replace />
          )
        ) : (
          <Home />
        ),
      },
      {
        path: "/login",
        element: loggedInUser ? (
          loggedInUser.role === "admin" ? (
            <Navigate to="/admin" replace />
          ) : loggedInUser.role === "organization" ? (
            <Navigate to="/organization" replace />
          ) : (
            <Navigate to="/home" replace />
          )
        ) : (
          <Login />
        ),
      },
      {
        path: "/register",
        element: loggedInUser ? <Navigate to="/" replace /> : <Register />,
      },
      {
        path: "/admin",
        element:
          loggedInUser && loggedInUser.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/login" replace />
          ),
      },
      {
        path: "/organization",
        element:
          loggedInUser && loggedInUser.role === "organization" ? (
            <OrganizationDashboard />
          ) : (
            <Navigate to="/login" replace />
          ),
      },
      {
        path: "/home",
        element: loggedInUser ? <Home /> : <Navigate to="/login" replace />,
      },
    ],
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_normalizeFormMethod: true,
        v7_fetcherPersist: true,
      },
    }
  );

  return <RouterProvider router={router} />;
};

const App = () => {
  return <AppRoutes />;
};

export default App;
