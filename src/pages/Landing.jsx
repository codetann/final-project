import React from "react";
import LandingLayout from "../components/Layout/LandingLayout";
import Hero from "../components/Sections/Hero";
import SiteFeatures from "../components/Sections/SiteFeatures";
import LandingNav from "../components/Sections/LandingNav";

export function Landing() {
  return (
    <LandingLayout>
      <LandingNav />
      <Hero />
      {/* <SiteFeatures /> */}
    </LandingLayout>
  );
}
