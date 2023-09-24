import React, { useEffect, useState } from "react";
import LogoCargando from "../../assets/logo.png"; // Asegúrate de importar tu logo
import "./loader.css"; // Importa tu archivo de estilos CSS para el Loader

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
          // Repite la animación dos veces
          setTimeout(() => {
            setLoadingText("");
            currentIndex = 0;
          }, 100); // Pausa entre repeticiones (ajusta según sea necesario)
        }
      }
    }, 300); // Ajusta la velocidad aquí
  }, [repeatCount]);
  return (
    <div className="loader-container">
      <img src={LogoCargando} alt="Logo de carga" className="rotating-logo" />
      <h1 className="loading-text">Cargando{loadingText}</h1>
    </div>
  );
};

export default Loader;
