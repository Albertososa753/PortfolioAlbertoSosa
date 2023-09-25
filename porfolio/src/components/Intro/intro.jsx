import React from "react";
import "./intro.css";

import bg from "../../assets/Logos/_com.apple.Pasteboard.OrebzH.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hola,</span>
        <span className="jump-text">
          Soy <span className="introName">Alberto Sosa.</span>
          <br />
          Desarrollador FullStack
        </span>
        <p className="introPara">
          Este es mi sitio web! donde comparto una colección de los proyectos
          que <br /> he creado a lo largo de mi trayectoria como desarrollador
          web.
        </p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
