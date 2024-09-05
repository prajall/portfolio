"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CursorVariantContext } from "../Contexts/CursorVariantContext";

const Cursor = () => {
  const { cursorVariant } = useContext(CursorVariantContext);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [aboutSize, setAboutSize] = useState({ width: 700, height: 700 });

  const variants = {
    default: {
      width: 13,
      height: 13,
      // mixBlendMode: "difference",
      // backgroundColor: "#fdfdfd",
    },
    text: {
      width: 170,
      height: 170,
      backgroundColor: "#fdfdfd",
      mixBlendMode: "difference",
    },
    link: {
      width: 150,
      height: 150,
      backgroundColor: "#1d1d1de7",
    },
    hire: {
      width: 70,
      height: 70,
      backgroundColor: "#1d1d1d",
    },
    about: {
      width: aboutSize.width,
      height: aboutSize.height,
      backgroundColor: "#1d1d1d",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    pulse: {
      width: 14,
      height: 14,
    },
  };

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setAboutSize({ width: 300, height: 300 });
    } else if (window.innerWidth < 1024) {
      setAboutSize({ width: 700, height: 700 });
    } else {
      setAboutSize({ width: 1000, height: 1000 });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className={cn(`z-50 hidden md:flex`)}
      animate={cursorVariant}
      variants={variants}
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
        position: "fixed",
        borderRadius: "50%",
        backgroundColor: "#1d1d1d",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
      transition={{ duration: 0.3 }}
    >
      {cursorVariant === "link" && (
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto my-auto text-white"
        >
          <ArrowUpRight size={35} />
        </motion.p>
      )}
      {cursorVariant === "hire" && (
        <motion.p
          className="rounded-full text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Handshake size={25} />
        </motion.p>
      )}
      {cursorVariant === "pulse" && (
        <motion.div
          className="rounded-full"
          initial={{ opacity: 1, width: 14, height: 14 }}
          animate={{
            width: 15,
            height: 15,
            opacity: 0,
            scale: 3,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            },
          }}
          style={{
            backgroundColor: "#1d1d1d",
          }}
        />
      )}
      {cursorVariant === "about" && (
        <motion.p
          className="text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="p-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="Analogist text-center text-2xl font-bold"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-justify"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              doloremque ex exercitationem? Sed, doloribus! Mollitia at minima
              eaque quidem quam vero repellat quasi totam facere nostrum
              molestias suscipit corporis deleniti, aperiam cupiditate quis
              nulla ipsa eius numquam? Quam enim, repellendus ea eligendi
              architecto, similique quaerat repellat fuga velit non voluptas.
            </motion.p>
          </div>
        </motion.p>
      )}
    </motion.div>
  );
};

export default Cursor;
