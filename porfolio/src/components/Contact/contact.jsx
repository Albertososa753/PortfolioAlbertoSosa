import React, { useRef } from "react";
import "./contact.css";
import LogoCV from "../../assets/svg/cv.svg";
import YT from "../../assets/svg/yt.svg";
import LogoLinkedin from "../../assets/svg/l.svg";
import LogoGitHub from "../../assets/svg/g.svg";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzbnhsg",
        "template_idh6nr7",
        form.current,
        "uX4bX4-bis6SbsNr-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Enviado!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" style={{ marginTop: "300px" }}>
      <h1 className="contactTitle">CONTACTO</h1>
      <h2
        className="contactTitle"
        style={{ fontSize: "15px", textAlign: "center" }}
      >
        ¡Si queres colaborar conmigo no dudes en contactarte!
      </h2>
      <form ref={form} onSubmit={sendEmail} className="contactFrom">
        <input
          type="text"
          name="your_name"
          className="name"
          placeholder="Nombre"
        />
        <input
          type="email"
          name="your_email"
          className="email"
          placeholder="Email"
        />
        <textarea
          className="msg"
          name="your_messege"
          rows="5"
          placeholder="Mensaje"
        ></textarea>

        <button
          type="submit"
          value="Send"
          style={{ color: "black" }}
          className="submitBtn"
        >
          Enviar
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/alberto-sosa-/" target="_blank">
            <img src={LogoLinkedin} alt="Linkedin" className="link" />
          </a>
          <a href="https://github.com/Albertososa753" target="_blank">
            <img src={LogoGitHub} alt="GitHub" className="link" />
          </a>

          <a id="cv" href="./AlbertoSosaCV.pdf" download>
            <img src={LogoCV} alt="CV" className="link" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCaTcqNF0NmrzuLK5BJahEmQ"
            target="_blank"
          >
            <img src={YT} alt="YouTube" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
