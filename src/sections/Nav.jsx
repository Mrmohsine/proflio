import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useLang } from "../context/lang.jsx";
import Loader from "../components/Loader";

// Import the SVG flags
import FRFlag from "../assets/flags/fr.png";
import USFlag from "../assets/flags/usa.png";

function Nav() {
  const { langData, setLangData } = useLang();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "fr", label: "Français", flag: FRFlag },
    { code: "en", label: "English", flag: USFlag },
  ];

  const handleLangChange = (code) => {
    setLoading(true);
    setTimeout(() => {
      setLangData(code);
      setLoading(false);
    }, 700);
    setOpen(false);
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <nav className="flex justify-around h-16 items-center">
        <div className="navbar-logo">
          <h1 className="font-bold uppercase text-[25px] text-indigo-400">
            Messoudi
          </h1>
        </div>

        <ul className="flex gap-6 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/messoudi-mouhcine-5082762b3/"
              target="_blank"
            >
              <FaLinkedin className="text-slate-100 hover:text-indigo-400 transition" size={25} />
            </a>
          </li>

          <li>
            <a href="https://github.com/Mrmohsine" target="_blank">
              <FaGithub className="text-slate-100 hover:text-indigo-400 transition" size={25} />
            </a>
          </li>

          <li className="relative" ref={dropdownRef}>
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
                               ${langData === lang.code ? "bg-indigo-200 font-semibold" : ""}`}
                  >
                    <img src={lang.flag} alt={lang.label} className="w-6 h-4 object-cover" />
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