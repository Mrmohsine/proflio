import React from "react";
import { useLang } from "../context/lang";

function Hero() {
  const { langData } = useLang();

  const experiencesFR = [
    {
      id: 1,
      period: ["2024-10", "2025-10"],
      title: "Développeur Full Stack",
      description:
        "J’ai travaillé sur plusieurs projets web en utilisant PHP, JavaScript et MySQL, allant de la création de tableaux de bord dynamiques à des plateformes de gestion complètes. J’ai développé des fonctionnalités CRUD, intégré des API, optimisé des bases de données et assuré la mise en place d’interfaces fluides et intuitives. Ces projets m’ont permis de renforcer mes compétences en développement full stack et en gestion de workflows techniques variés.",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      id: 2,
      period: ["2024-05", "2024-07"],
      title: "Développeur Full Stack",
      description:
        "J’ai dirigé le développement et la maintenance d’un site web de livres en utilisant React.js, Firebase, MySQL et Tailwind CSS. J’ai implémenté des API RESTful et intégré des bases de données MySQL. J’ai collaboré avec les parties prenantes pour définir les exigences du projet et les délais.",
      technologies: ["React.js", "Laravel", "MySql"],
    },
  ];

  const experiencesEN = [
    {
      id: 1,
      period: ["2024-10", "2025-10"],
      title: "Full Stack Developer",
      description:
        "I worked on multiple web projects using PHP, JavaScript, and MySQL, ranging from creating dynamic dashboards to full management platforms. I developed CRUD functionalities, integrated APIs, optimized databases, and implemented smooth and intuitive interfaces. These projects strengthened my full stack development skills and technical workflow management.",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      id: 2,
      period: ["2024", "2 months"],
      title: "Full Stack Developer",
      description:
        "I led the development and maintenance of a book website using React.js, Firebase, MySQL, and Tailwind CSS. I implemented RESTful APIs and integrated MySQL databases. I collaborated with stakeholders to define project requirements and deadlines.",
      technologies: ["React.js", "Nextjs", "TailwindCSS", "Firebase"],
    },
  ];

  const experiences = langData === "fr" ? experiencesFR : experiencesEN;

  return (
    <div className="py-24">
      <h1
        key={`experience-title-${langData}`}
        className="text-center text-4xl md:text-5xl font-bold mb-16 text-white"
      >
        {langData === "fr" ? "Expérience" : "Experience"}
      </h1>

      <div className="flex flex-col items-center gap-10">
        {experiences.map((exp, idx) => (
          <div
            key={`exp-${exp.id}-${langData}`}
            className="w-[85%] md:w-[70%] grid grid-cols-6 gap-6 items-start group"
          >
            {/* Left Date / Timeline */}
            <div className="col-span-1 flex flex-col items-center text-white relative justify-center h-full">
              <div className="flex items-center justify-between w-32 md:w-48 text-sm md:text-base mb-2">
                <span className="text-left">{exp.period[0]}</span>
                <span className="text-right">{exp.period[1]}</span>
              </div>

              {/* Timeline line */}
              <div className="relative w-32 md:w-48 h-1 bg-white/20 rounded-full">
                <span className="absolute left-0 w-3 h-3 bg-green-500 rounded-full -top-1.5"></span>
                <span className="absolute right-0 w-3 h-3 bg-red-500 rounded-full -top-1.5"></span>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-span-5 bg-indigo-800 p-6 rounded-xl shadow-lg transform transition duration-300 ">
              <p className="text-2xl font-semibold text-white mb-2">
                {exp.title}
              </p>
              <p className="text-white/80 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-900 font-bold text-white/90 rounded-full px-3 py-1 text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
