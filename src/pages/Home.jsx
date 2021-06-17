import React from "react";
import Consultation from "../components/Consultation";
import Events from "../components/Events";
import Objective from "../components/Objective";
import Services from "../components/Services";
import Slide from "../components/Slide";
import Trust from "../components/Trust";

function Home() {
  return (
    <div>
      <Slide />
      <Services />
      <Objective />
      <Trust />
      <Consultation />
      <Events />
    </div>
  );
}

export default Home;
