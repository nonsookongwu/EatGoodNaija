import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import App from "../App";
import SignUpPage from "../pages/signUp/SignUp";
import EmailConfirmation from "../pages/resetPassword/EmailConfirmation";
import LoginPage from "../pages/Login/LoginPage";
import PasswordConfirmation from "../pages/resetPassword/PasswordConfirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "services", element: <Services /> },
      { path: "menu", element: <Menu /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {path: "/signup", element:<SignUpPage/>},
  {path: "/login", element:<LoginPage/>},
  {path: "/email_confirm", element:<EmailConfirmation/>},
  {path: "/password_confirm", element:<PasswordConfirmation/>}
]);

export default router;
