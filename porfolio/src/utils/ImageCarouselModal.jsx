import React, { useState } from "react";
import "./ImageCarouselModal.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ModalCarousel = ({ images, proyecto, closeModal }) => {
  const [carouselVisible, setCarouselVisible] = useState(false);

  const openCarousel = () => {
    setCarouselVisible(true);
  };

  const closeCarousel = () => {
    setCarouselVisible(false);
  };

  const imageSize = { height: "35rem", width: "100%" };

  return (
    <motion.div className="modal-carousel">
      <div className="modal-header">
        <h1 className="text-title" style={{ textAlign: "center" }}>
          {proyecto.titulo}
        </h1>
      </div>
      <div className="modal-body">
        <div className="image-container">
          <img
            src={images[0]}
            style={imageSize}
            alt="Image Preview"
            onClick={openCarousel}
            className="image-preview"
          />
        </div>
        <div className="project-details">
          <p className="text-title" style={{ marginTop: "19px" }}>
            <strong>Duración:</strong>
          </p>
          <p className="text-short">{proyecto.duracion}</p>

          <p className="text-title">
            <strong>Rol:</strong>
          </p>
          <p className="text-short">{proyecto.rol}</p>

          <p className="text-title">
            <strong>Descripción:</strong>
          </p>
          <p className="text">{proyecto.descripcion}</p>

          <p className="text-title">
            <strong>Tecnologías:</strong>
          </p>
          <p className="text">{proyecto.tecnologias}</p>
        </div>
        <br />
        <a
          href={proyecto.enlaces.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <button
          className="close-button-modal"
          onClick={() => {
            closeModal();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {carouselVisible && (
        <div className="carousel-container">
          <Carousel showThumbs={false}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Carousel>
          <button
            className="close-button"
            onClick={() => {
              closeCarousel();
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ModalCarousel;
