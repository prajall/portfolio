"use client";
import React, { useContext, useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";

const Project = ({ title, description, image1, image2, image3 }) => {
  const { setCursorVariant } = useContext(CursorVariantContext);

  const parallaxTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxTarget,
    offset: ["start end", "end start"],
  });

  const smParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const mdParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const lgParallax = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const smZoomOut = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const smZoomIn = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const fadeInTitle = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const fadeInDesc = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div
      ref={parallaxTarget} //parallax target
      className="my-6 mt-32 flex flex-col justify-center gap-10 px-6 lg:flex-row"
      onMouseEnter={() => setCursorVariant("link")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <div className="relative h-fit max-h-[700px] w-full p-10 lg:w-1/2">
        <motion.img
          style={{ y: smParallax }}
          className="z-10 h-auto w-full rounded-xl shadow-2xl"
          src={image1}
          alt="Background Image"
        />
        <motion.img
          style={{ y: mdParallax }}
          className="absolute -bottom-10 -left-6 z-20 h-3/4 rounded-xl shadow-2xl"
          src={image2}
          alt="Front Image 1"
        />
        <motion.img
          style={{ y: lgParallax }}
          className="absolute -bottom-6 -right-2 z-30 w-1/2 rounded-xl shadow-2xl"
          src={image3}
          alt="Front Image 2"
        />
      </div>
      <div className="flex w-full flex-col justify-center lg:w-1/2">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mb-4 text-4xl font-bold lg:text-6xl"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-lg lg:text-xl"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default Project;
