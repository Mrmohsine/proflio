import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useLang } from "../context/lang.jsx";
import Loader from "../components/Loader";

function Nav() {
  const { langData, setLangData } = useLang();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  const handleLangChange = (code) => {
    setLoading(true);        // show loader
    setTimeout(() => {
      setLangData(code);     // update language
      setLoading(false);     // hide loader after 700ms
    }, 700);
    setOpen(false);
  };

  return (
    <>
      {/* Loader */}
      {loading && <Loader />}

      <nav className="flex justify-around h-16 items-center">
        <div className="navbar-logo">
          <h1 className="font-bold uppercase text-[25px] text-indigo-400">
            Messoudi
          </h1>
        </div>

        <ul className="flex gap-6 items-center">
          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/messoudi-mouhcine-5082762b3/"
              target="_blank"
            >
              <FaLinkedin
                className="text-slate-100 hover:text-indigo-400 transition"
                size={25}
              />
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a href="https://github.com/Mrmohsine" target="_blank">
              <FaGithub
                className="text-slate-100 hover:text-indigo-400 transition"
                size={25}
              />
            </a>
          </li>

          {/* Language */}
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-white bg-indigo-700 px-3 py-2 rounded-xl 
                         shadow-lg hover:bg-indigo-600 transition"
            >
              <TbWorld size={20} />
              <span className="font-medium">{langData.toUpperCase()}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl p-2 w-36 animate-fade-in">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
                               hover:bg-indigo-100 text-indigo-900 transition  
                               ${
                                 langData === lang.code
                                   ? "bg-indigo-200 font-semibold"
                                   : ""
                               }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;