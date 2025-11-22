import img from "../assets/definition-developpeur-web-comtogether.webp";
import { motion } from "framer-motion";
import cv from "../assets/messoudi mouhcine.pdf";
import { useLang } from "../context/lang";

const langfr = {
  fullStackDeveloper: "Développeur Full Stack",
  description:
    "Je suis un développeur full stack passionné, avec une solide expérience dans la création de sites web, de plateformes SaaS et de solutions métiers sur mesure. Je maîtrise les technologies front-end telles que HTML, CSS, JavaScript, React.js et TailwindCSS, ainsi que les technologies back-end comme PHP, MySQL,Laravel, Firebase, et divers outils modernes de développement. J’ai également de bonnes compétences en outils bureautiques (Word, Excel, etc.).",
  viewCV: "Voir mon CV",
};

const langen = {
  fullStackDeveloper: "Full Stack Developer",
  description:
    "I am a passionate full stack developer with solid experience in creating websites, SaaS platforms, and custom business solutions. I master front-end technologies such as HTML, CSS, JavaScript, React.js, and TailwindCSS, as well as back-end technologies like PHP, MySQL, Laravel, Firebase, and various modern development tools. I also have good skills in office tools (Word, Excel, etc.).",
  viewCV: "View my CV",
};

function About() {
  const { langData } = useLang();

  // Choose language object
  const lang = langData === "fr" ? langfr : langen;

  return (
    <div className="mx-auto w-[90%] md:w-[80%] mt-20 grid gap-4 grid-cols-1 md:grid-cols-3 items-center">
      <div className="w-full space-y-3 col-span-2 flex flex-col justify-center h-auto">
        <motion.h1
          key={`h1-${langData}`} 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-light"
        >
          Messoudi Mouhcine
        </motion.h1>

        <motion.h2
          key={`h2-${langData}`} 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        >
          {lang.fullStackDeveloper}
        </motion.h2>

        <motion.p
          key={`p-${langData}`} 
          initial={{ x: -100, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-base md:text-lg lg:text-xl"
        >
          {lang.description}{" "}
          <a
            className="cursor-pointer text-white font-extrabold underline"
            href={cv}
            target="_blank"
          >
            {lang.viewCV}
          </a>
        </motion.p>
      </div>

      <div className="w-full flex justify-center items-center col-span-1">
        <motion.img
          key={`img-${langData}`} 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          src={img}
          className="w-full max-w-[400px] rounded-md mb-12"
        />
      </div>
    </div>
  );
}

export default About;