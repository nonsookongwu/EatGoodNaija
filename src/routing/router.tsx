import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import App from "../App";
import SignUpPage from "../pages/signUp/SignUp";
import EmailConfirmation from "../pages/resetPassword/EmailConfirmation";

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
  {path: "/email_confirm", element:<EmailConfirmation/>}
]);

export default router;
