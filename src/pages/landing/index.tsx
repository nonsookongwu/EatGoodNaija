import Hero from "./Hero";
import OurMenuSection from "./ourMenuSection";
import OurServices from "./whatweserve/OurServices";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <OurMenuSection/>
    </div>
  );
};

export default LandingPage;
