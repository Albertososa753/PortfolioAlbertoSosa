import React, { useEffect, useState } from "react";
import "./proyects.css";
import { motion } from "framer-motion";
import img7 from '../../assets/iANCHA4.png'
import img8 from '../../assets/iANCHA3.png'
import ModalCarousel from '../../utils/ImageCarouselModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Proyects = () => {
  const images = [img7, img7,img7 ,img7,img8];
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: -1077 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleImageClick = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false); // Cerrar el modal desde aquí
  };

  const openModal = (imageIndex) => {
    setIsModalOpen(true);
    setModalImageIndex(imageIndex);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 720) {
      setDragConstraints({ right: 0, left: -1700 });
    } else {
      setDragConstraints({ right: 100, left: -2500 });
    }
  }, []);

  return (
     
    <div className='slider-container'>
      <div>
      <h1 className="title">PROYECTOS</h1>

      </div>
      <motion.div className="slider" drag='x' dragConstraints={dragConstraints}>
        {images.map((image, index) => (
          <motion.div className="item" key={index}>
            <img src={image} alt="" onClick={() => handleImageClick(index)} />
            <div className="overlay">
              <button className="view-button" onClick={() => openModal(index)}>Ver Más</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {isModalOpen && (
        <div className="overlay-bg">
          <ModalCarousel images={images} />
          <button className="close-button" onClick={closeImageModal}>
        <FontAwesomeIcon icon={faTimes} /> 
      </button>
        </div>
      )}
    </div>
  );
};

export default Proyects;
