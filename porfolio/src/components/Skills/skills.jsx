import React from "react";
import "./skills.css";
import UIDesing from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Lo que hago</span>
      <span className="skillDesc">
        Soy un diseñador web experto y apasionado con experiencia en la creación
        de sitios web visualmente atractivos y fáciles de usar. Tengo una gran
        comprensión del diseño y un buen ojo para los detalles. Soy experto en
        HTML, Cs y JavaScript, así como en software de diseño como Adobe
        Photoshop e Illustrator.
        <br />
        Soy un apasionado del desarrollo web tanto backend como frondEnd y me
        fassina estar en constante aprendisaje al igual que trabajar en equipo
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesing} alt="UIDesing" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>this is a demo text you can whire your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>this is a demo text you can whire your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>this is a demo text you can whire your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
