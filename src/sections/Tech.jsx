import React from "react";
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiFirebase, SiExpo, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useLang } from "../context/lang";

function Tech() {
  const { langData } = useLang();

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
      <h1
        key={`title-${langData}`} // re-animate title on language change
        className="text-white text-4xl md:text-5xl lg:text-5xl text-center my-10 font-bold"
      >
        {langData === "fr" ? "Technologies" : "Technologies"}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <motion.div key={`html-${langData}`} {...motionSettings(0.5)} className="rounded-md border-2 p-3 border-gray-600">
          <FaHtml5 size={40} className="text-orange-600" />
        </motion.div>

        <motion.div key={`css-${langData}`} {...motionSettings(0.6)} className="rounded-md border-2 p-3 border-gray-600">
          <FaCss3Alt size={40} className="text-blue-600" />
        </motion.div>

        <motion.div key={`js-${langData}`} {...motionSettings(1.2)} className="rounded-md border-2 p-2 border-gray-600">
          <FaJs size={50} className="text-yellow-500" />
        </motion.div>

        <motion.div key={`react-${langData}`} {...motionSettings(0.7)} className="rounded-md border-2 p-3 border-gray-600">
          <FaReact size={40} className="text-cyan-600" />
        </motion.div>

        <motion.div key={`php-${langData}`} {...motionSettings(0.8)} className="rounded-md border-2 p-3 border-gray-600">
          <FaPhp size={40} className="text-purple-500" />
        </motion.div>

        <motion.div key={`expo-${langData}`} {...motionSettings(0.9)} className="rounded-md border-2 p-3 border-gray-600">
          <SiExpo size={40} className="text-red-600" />
        </motion.div>

        <motion.div key={`tailwind-${langData}`} {...motionSettings(1.0)} className="rounded-md border-2 p-3 border-gray-600">
          <RiTailwindCssFill size={40} className="text-cyan-600" />
        </motion.div>

        <motion.div key={`mysql-${langData}`} {...motionSettings(1.1)} className="rounded-md border-2 p-2 border-gray-600">
          <SiMysql size={50} className="text-cyan-800" />
        </motion.div>

        <motion.div key={`firebase-${langData}`} {...motionSettings(1.2)} className="rounded-md border-2 p-2 border-gray-600">
          <SiFirebase size={50} className="text-orange-500" />
        </motion.div>
      </div>
    </>
  );
}

export default Tech;