"use client";
import logo from "@/images/logo.png";
import potrait from "@/images/potrait2.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CursorVariantContext } from "../../Contexts/CursorVariantContext";
import SectionWrapper from "../SectionWrapper";
import { variants } from "@/framer-motion-variants";
import {
  Allura,
  Arizonia,
  Calligraffitti,
  Fondamento,
  Great_Vibes,
  Kristi,
  Monsieur_La_Doulaise,
  Niconne,
  Nothing_You_Could_Do,
  Qwitcher_Grypen,
  Rock_Salt,
} from "next/font/google";
import { cn } from "@/lib/utils";

const bigFont = Allura({ subsets: ["latin"], weight: "400" });

function Hero() {
  const { setCursorVariant } = useContext(CursorVariantContext);
  const spanVariants = {
    initial: { opacity: 0, x: -10 }, // Initial state of the span (hidden and slightly left)
    hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Animate to visible and aligned with "Hire me"
  };

  const entrance1 = {
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <nav className="flex w-full items-center justify-between py-7">
        <Image src={logo} alt="Logo" width={44} height={44} />
        <div className="flex gap-8 text-lg md:gap-12 md:text-xl lg:gap-16">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </nav>
      <SectionWrapper>
        <div className="relative flex w-full flex-col items-center pb-10 lg:flex-row lg:justify-center">
          {/* Left Section */}
          <div className="hidden flex-1 flex-col lg:flex lg:items-end lg:px-6 lg:text-left">
            <div className="lg:text-left">
              <motion.p
                variants={variants.heroOther}
                initial="initial"
                animate="animate"
                className="mb-3 text-justify text-lg"
              >
                <span className="mb-4 text-xl font-semibold">
                  Hey👋 Welcome to my portfolio.
                </span>
                <br />
                <br />
                I'm a creative Full Stack Developer specialized in creating
                dynamic web applications. I help you to bring your innovative
                ideas to life. Lets work together.
              </motion.p>
              <motion.div
                variants={variants.heroOtherDelay}
                initial="initial"
                animate="animate"
                className="mt-8 flex gap-4"
              >
                <motion.button
                  className="group flex w-44 cursor-none items-center justify-center gap-1 rounded-full border border-black bg-white px-6 py-2"
                  style={{ boxShadow: "5px 5px 0px 0px black" }}
                  whileHover={{
                    boxShadow: "6px 7px 2px 0px black",
                    scale: 1.001,
                  }}
                  whileTap={{
                    boxShadow: "4px 4px 0px 0px black",
                    scale: 0.991,
                  }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setCursorVariant("pulse")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Hire me
                  {/* <HeartHandshake size={17} /> */}
                </motion.button>
                <motion.button
                  className="group flex w-44 cursor-none items-center justify-center gap-1 rounded-full border border-black bg-white px-6 py-2"
                  style={{ boxShadow: "5px 5px 0px 0px black" }}
                  whileHover={{
                    boxShadow: "6px 7px 2px 0px black",
                    scale: 1.001,
                  }}
                  whileTap={{
                    boxShadow: "4px 4px 0px 0px black",
                    scale: 0.991,
                  }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setCursorVariant("pulse")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Download CV
                  {/* <Download size={17} /> */}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Center Image */}
          <motion.div
            variants={variants.heroImage}
            initial="initial"
            animate="animate"
            className="relative mt-8 flex min-w-fit flex-1 justify-center pb-10 pr-10 xl:mt-10"
          >
            <motion.div className="relative">
              <img
                src={potrait.src}
                alt="Portrait"
                className="relative z-10 h-[320px] w-[220px] object-cover md:h-[420px] md:w-[280px]"
                width={280}
                height={420}
              />
              <motion.div
                variants={variants.heroImageShadow}
                initial="initial"
                animate="animate"
                className="absolute left-7 top-7 z-0 h-[320px] w-[220px] border-2 border-black md:h-[420px] md:w-[280px]"
              />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={variants.heroOtherDelay}
            initial="initial"
            animate="animate"
            className="mt-8 hidden flex-1 text-center lg:mt-0 lg:block lg:px-6 lg:text-left"
          >
            <ul className="space-y-4 text-lg">
              <li className="flex items-center justify-center space-x-2 lg:justify-start">
                <FaInstagram size={20} />
                <a href="#" className="text-gray-800">
                  Instagram
                </a>
              </li>
              <motion.li className="flex items-center justify-center space-x-2 lg:justify-start">
                <FaLinkedin size={20} />
                <a href="#" className="text-gray-800">
                  LinkedIn
                </a>
              </motion.li>
              <motion.li className="flex items-center justify-center space-x-2 lg:justify-start">
                <FaGithub size={20} />
                <a href="#" className="text-gray-800">
                  Github
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="w-full lg:mt-10">
          <div className="-pb-8 mx-auto w-fit">
            <motion.h1
              variants={variants.mainName}
              initial="initial"
              animate="animate"
              className={cn(
                bigFont.className + "",
                "mx-auto mb-0 w-fit font-light leading-none text-black",
              )}
              style={{ fontSize: "clamp(2rem, 12vw, 12rem)" }}
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Prajal Maharjan
            </motion.h1>
            <motion.div
              variants={variants.underText}
              initial="initial"
              animate="animate"
              className="flex items-center justify-center gap-2 text-center text-sm lg:-mt-2 lg:text-2xl"
            >
              <h2>Full Stack Developer</h2>
              <p>|</p>
              <span className="flex items-center">
                <IoLocationSharp size={20} />
                <h3>Kathmandu, Nepal</h3>
              </span>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
      {/* <h1
        className="my-32 text-center text-xl"
        onMouseEnter={() => setCursorVariant("pulse")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        Hover Me
      </h1>
      <div
        className="h-96 w-96 rounded-md bg-slate-900"
        onMouseEnter={() => setCursorVariant("link")}
        onMouseLeave={() => setCursorVariant("default")}
      ></div>
      <div
        className="h-96 w-96 rounded-md bg-slate-700"
        onMouseEnter={() => setCursorVariant("about")}
        onMouseLeave={() => setCursorVariant("default")}
      ></div> */}
      <div /> {/* FOR SCROLL ANIMATION  */}
    </div>
  );
}

export default Hero;

{
  /* <h1
  className="text-xl my-32 text-center"
  onMouseEnter={() => setCursorVariant("pulse")}
  onMouseLeave={() => setCursorVariant("default")}
>
  Hover Me
</h1>

<div
  className="w-96 h-96 bg-slate-900 rounded-md"
  onMouseEnter={() => setCursorVariant("link")}
  onMouseLeave={() => setCursorVariant("default")}
></div>
<div
  className="w-96 h-96 bg-slate-700 rounded-md"
  onMouseEnter={() => setCursorVariant("about")}
  onMouseLeave={() => setCursorVariant("default")}
></div> */
}
