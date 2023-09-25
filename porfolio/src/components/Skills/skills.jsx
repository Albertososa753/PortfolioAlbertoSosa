import React from "react";
import "./skills.css";
import js from "../../assets/svg/js.svg";
import c from "../../assets/svg/cshar.svg";
import html from "../../assets/svg/front/html.svg";
import css from "../../assets/svg/front/css.svg";
import angular from "../../assets/svg/front/angular.svg";
import redux from "../../assets/svg/front/redux.svg";
import sequelize from "../../assets/svg/back/sequelize.svg";
import post from "../../assets/svg/back/post.svg";
import node from "../../assets/svg/back/node.svg";
import net from "../../assets/svg/back/net.svg";
import mongodb from "../../assets/svg/back/mongodb.svg";
import express from "../../assets/svg/back/express.svg";
import docker from "../../assets/svg/back/docker.svg";
import react from "../../assets/svg/front/react.svg";
import bo from "../../assets/svg//front/bo.svg";
import scss from "../../assets/svg//front/scss.svg";
import git from "../../assets/svg/agiles/git.svg";
import github from "../../assets/svg/agiles/github.svg";
import scrum from "../../assets/svg/agiles/scrum.svg";
import trello from "../../assets/svg/agiles/trello.svg";
import UIDesing from "../../assets/Logos/ui-design.png";
import Back from "../../assets/Logos/back.png";
import entitiy from '../../assets/svg/back/entity_image.svg'


const Skills = () => {
  return (
    
    <section id="skills">
      <br />
  <span className="skillTitle">LO QUE HAGO</span>
      <span className="skillDesc">
        Soy un desarrollador web con experiencia en la creación de sitios
        web atractivos y funcionales. Tengo una fuerte pasión por el aprendizaje
        constante, siempre buscando mejorar mis habilidades y explorar nuevas
        tecnologías. Además, disfruto enormemente trabajando en proyectos en
        equipo, donde creo que la colaboración y la sinergia impulsan la
        creatividad y el éxito.
      </span>
      <div className="skillsBars">
        <div className="skillsBar">
          <img src={UIDesing} alt="WebDesign" className="skillsBarImg" />
          <div className="skillsBarText">
            <h2>Diseñador Web</h2>
            <p>Gran prioridad a la experiencia del usuario</p>
          </div>
        </div>
        <div className="skillsBar">
          <img src={Back} alt="UIDesing" className="skillsBarImg" />
          <div className="skillsBarText">
            <h2>Perfeccionista de código</h2>
            <p>Procuro el perfecto funcionamiento de la aplicación</p>
          </div>
        </div>
      </div>
      <span className="skillTitle">SKILLS</span>

      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2 className="skillText">Lenguajes de Programación </h2>
            <img src={js} alt="JavaScript" className="skillBarImg" />
            <img src={c} alt="C#" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2 className="skillText">Desarrollo Front-End</h2>
            <img src={html} alt="HTLM" className="skillBarImg" />
            <img src={css} alt="Css" className="skillBarImg" />
            <img src={angular} alt="Angular" className="skillBarImg" />
            <img src={bo} alt="Bootstrap" className="skillBarImg" />
            <img src={react} alt="React" className="skillBarImg" />
            <img src={redux} alt="Redux" className="skillBarImg" />
            <img src={scss} alt="Sass" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2 className="skillText">Desarrollo Back-End</h2>
            <img src={node} alt="Node.Js" className="skillBarImg" />
            <img src={express} alt="Express" className="skillBarImg" />
            <img src={sequelize} alt="Sequelize" className="skillBarImg" />
            <img src={post} alt="PostgreSQL" className="skillBarImg" />
            <img src={mongodb} alt="MongoDB" className="skillBarImg" />
            <img src={net} alt=".NET " className="skillBarImg" />
            <img src={entitiy} alt=".NET " className="skillBarImg" />

            <img src={docker} alt="Docker" className="skillBarImg" />
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2 className="skillText">Metodologias Agiles</h2>
            <img src={git} alt="Git" className="skillBarImg" />
            <img src={github} alt="GitHub" className="skillBarImg" />
            <img src={trello} alt="Trello" className="skillBarImg" />
            <img src={scrum} alt="Scrum" className="skillBarImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
