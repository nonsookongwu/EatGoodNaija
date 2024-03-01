import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar";
import Hero from "./Hero";
import WhatWeServe from "./WhatWeServe";
import OurMenu from "./OurMenu";

const LandingPage = () => {
  return <div>
    <Hero />
    <WhatWeServe />
    <OurMenu />
  </div>;
};

export default LandingPage;
