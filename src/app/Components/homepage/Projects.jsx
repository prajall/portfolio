"use client";
import React, { useContext, useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";

const Projects = () => {
  // const { setCursorVariant } = useContext(CursorVariantContext);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const smZoomOut = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const smZoomIn = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const mdParallax = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const lgParallax = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const fadeInTitle = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const fadeInDesc = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const image1 =
    "https://firebasestorage.googleapis.com/v0/b/filefolio-d4e7b.appspot.com/o/suxf2r%2Fimages%2Fddddd.png?alt=media&token=75b18f57-91d7-4924-948b-e7673b74b550";
  const image2 =
    "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const image3 =
    "https://cdn.dribbble.com/userupload/4284353/file/original-ed72b8adb00fa5bdec36e2f061aed5a8.jpg?resize=400x300&vertical=center";
  const image4 =
    "https://www.jacobparis.com/images/design-a-login-flow-ui_2021-06-18-16-51-03.png";

  return (
    <SectionWrapper>
      <h2 className="Analogist w-full py-16 text-center text-7xl">Projects</h2>
      {/* Container */}
      <div
        ref={container}
        className="my-6 flex flex-col justify-center gap-10 px-6 lg:flex-row"
        // onMouseEnter={() => setCursorVariant("link")}
        // onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="relative h-fit max-h-[700px] w-full lg:w-1/2">
          <motion.img
            style={{ scale: smZoomOut }}
            className="z-10 h-auto w-full rounded-lg shadow-2xl"
            src={image1}
            alt="Background Image"
          />
          <motion.img
            style={{ y: mdParallax }}
            className="absolute -bottom-10 -left-6 z-20 h-3/4 rounded-lg shadow-2xl"
            src={image2}
            alt="Front Image 1"
          />
          <motion.img
            style={{ y: lgParallax }}
            className="absolute -bottom-6 -right-2 z-30 w-1/2 rounded-lg shadow-2xl"
            src={image3}
            alt="Front Image 2"
          />
        </div>
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.8 }} // Adjust this to 0.8 (20% from the bottom)
            className="mb-4 text-4xl font-bold lg:text-6xl"
          >
            Kit Store - Full Stack E-commerce Website
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }} // Use the same amount here
            className="text-lg lg:text-xl"
          >
            This project showcases a comprehensive e-commerce platform built
            with the MERN stack. The website includes features like user
            authentication, product management, and an integrated payment
            system.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
