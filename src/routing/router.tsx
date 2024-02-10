import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {path: "services", element:<Services/>},
            {path: "menu", element:<Menu/>},
            {path: "contact", element:<Contact/>}
        
    ]},
])

export default router;