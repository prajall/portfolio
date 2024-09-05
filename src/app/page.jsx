"use client";
import React, { useEffect } from "react";
import Hero from "./Components/homepage/Hero";
import About from "./Components/homepage/About";
import ProjectsSection from "./Components/homepage/ProjectsSection";
import Lenis from "lenis";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <ProjectsSection />
    </div>
  );
};

export default page;
