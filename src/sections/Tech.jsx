import React from "react";
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFirebase, SiExpo } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

function Tech() {
  // Unique motion settings for each icon
  const motionSettings = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10] },
    transition: {
      duration,
      delay: 0,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  });

  return (
    <>
      <h1 className="text-white text-4xl md:text-5xl lg:text-5xl text-center my-10 font-bold">Technologies</h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <motion.div
          {...motionSettings(0.5)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <FaHtml5 size={40} className="text-orange-600" />
        </motion.div>

        <motion.div
          {...motionSettings(0.6)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <FaCss3Alt size={40} className="text-blue-600" />
        </motion.div>

        <motion.div
          {...motionSettings(1.2)}
          className="rounded-md border-2 p-2 border-gray-600 sh"
        >
          <FaJs size={50} className="text-yellow-500" />
        </motion.div>
        <motion.div
          {...motionSettings(0.7)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <FaReact size={40} className="text-cyan-600" />
        </motion.div>

        <motion.div
          {...motionSettings(0.8)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <FaPhp size={40} className="text-purple-500" />
        </motion.div>

        <motion.div
          {...motionSettings(0.9)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <SiExpo size={40} className="text-red-600" />
        </motion.div>

        <motion.div
          {...motionSettings(1.0)}
          className="rounded-md border-2 p-3 border-gray-600 sh"
        >
          <RiTailwindCssFill size={40} className="text-cyan-600" />
        </motion.div>

        <motion.div
          {...motionSettings(1.1)}
          className="rounded-md border-2 p-2 border-gray-600 sh"
        >
          <SiMysql size={50} className="text-cyan-800" />
        </motion.div>

        <motion.div
          {...motionSettings(1.2)}
          className="rounded-md border-2 p-2 border-gray-600 sh"
        >
          <SiFirebase size={50} className="text-orange-500" />
        </motion.div>
      </div>
    </>
  );
}

export default Tech;
