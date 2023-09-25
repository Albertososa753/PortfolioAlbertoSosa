import React, { useEffect, useState } from "react";
import LogoCargando from "../../assets/Logos/logo.png";
import "./loader.css";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("");
  const [repeatCount, setRepeatCount] = useState(0);

  useEffect(() => {
    const text = "...";
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setLoadingText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setRepeatCount(repeatCount + 1);
        if (repeatCount < 1) {
          setTimeout(() => {
            setLoadingText("");
            currentIndex = 0;
          }, 100);
        }
      }
    }, 300);
  }, [repeatCount]);
  return (
    <div className="loader-container">
      <img src={LogoCargando} alt="Logo de carga" className="rotating-logo" />
      <h1 className="loading-text">Cargando{loadingText}</h1>
    </div>
  );
};

export default Loader;
