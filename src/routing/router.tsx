import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import App from "../App";
import UserSignUpPage from "../pages/signUp/UserSignUp";
import ForgotPassword from "../pages/resetPassword/ForgotPassword";
import LoginPage from "../pages/Login/LoginPage";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import CategoryPage from "../pages/category/CategoryPage";
import VendorSignUpPage from "../pages/signUp/VendorSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "services", element: <Services /> },
      { path: "menu", element: <Menu /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
  { path: "/user_role", element: <CategoryPage /> },
  { path: "/signup_user", element: <UserSignUpPage /> },
  { path: "/signup_vendor", element: <VendorSignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password/:id", element: <ResetPassword /> },
]);

export default router;
