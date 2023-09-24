import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarouselModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ModalCarousel = ({ images }) => {
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
        <h1 className="text">Título</h1>
      </div>
      <div className="modal-body">
        <img
          src={images[0]}
          style={imageSize}
          alt="Image Preview"
          onClick={openCarousel}
          className="image-preview"
        />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
          consequatur iusto. Ipsam, inventore, recusandae neque rerum hic unde
          dolor aperiam minus earum quae facilis, explicabo vel. Quos deleniti
          quibusdam beatae.
        </p>
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
          <button className="close-button" onClick={closeCarousel}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ModalCarousel;
