import React from "react";
import "../index.css";
import LandingIntro from "../Components/LandingIntro";
import Navbar from "../Components/Navbar";

function Landing() {
  return (
    <div>
      <Navbar/>
      <LandingIntro/>
    </div>
  );
}
export default Landing;
