"use client";
import React, { useContext } from "react";
import SectionWrapper from "../SectionWrapper";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";

const About = () => {
  const { setCursorVariant } = useContext(CursorVariantContext);

  return (
    <SectionWrapper className="flex items-center justify-center">
      <div
        onMouseEnter={() => setCursorVariant("about")}
        onMouseLeave={() => setCursorVariant("default")}
        className="Analogist relative flex h-[500px] w-fit items-center justify-center overflow-hidden text-3xl lg:text-[10rem] xl:text-[13rem]"
      >
        <p className="STROKE-TEXT FADE-T0-BOTTOM absolute top-1/2 -translate-y-32 opacity-50">
          ABOUT
        </p>
        <p className="z-20 text-black">ABOUT</p>
        <p className="STROKE-TEXT absolute bottom-1/2 translate-y-32 opacity-50">
          ABOUT
        </p>
        <div className="ABOUT-FADE absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </SectionWrapper>
  );
};

export default About;
