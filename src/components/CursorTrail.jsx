import React, { useEffect, useRef } from "react";
import starImg from "../assets/stars.avif"; 
import "../index.css";

const CursorTrail = () => {
  const trailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!trailRef.current) return;

      const star = document.createElement("img");
      star.src = starImg;
      star.className = "star";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);

      // Remove the star after animation (fade out)
      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={trailRef}></div>;
};

export default CursorTrail;;