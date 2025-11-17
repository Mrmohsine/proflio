import React from "react";
import img from "../assets/Developer.png";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="mx-auto w-[90%] md:w-[80%] mt-20 grid gap-4 grid-cols-1 md:grid-cols-3 items-center">
      <div className="w-full flex justify-center items-center col-span-1">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          src={img}
          className="w-full max-w-[400px] rounded-md mb-12"
        />
      </div>
      <div className="w-full space-y-3 col-span-2 flex flex-col justify-center h-auto">
        <motion.p
          initial={{ x: 100, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-base md:text-lg lg:text-xl w-full md:w-[85%] ml-0 md:ml-7"
        >
          Je suis un développeur full stack passionné, maîtrisant le front-end
          (HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React.js) et le
          back-end (PHP, Laravel, MySQL). Curieux de nature, j’ai transformé ma
          passion pour le fonctionnement des systèmes en vocation. Je cherche
          constamment à apprendre, relever des défis techniques et concevoir des
          solutions performantes et adaptées aux utilisateurs. J’apprécie le
          travail collaboratif et contribue à des projets open-source pour
          renforcer mes compétences.
        </motion.p>
      </div>
    </div>
  );
}

export default Experience;
