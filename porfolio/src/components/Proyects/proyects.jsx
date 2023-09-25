import React, { useEffect, useState } from "react";
import "./proyects.css";
import { motion } from "framer-motion";
import ModalCarousel from "../../utils/ImageCarouselModal";
import tmdb1 from "../../assets/TMDB/t1.png";
import tmdb2 from "../../assets/TMDB/t2.png";
import tmdb3 from "../../assets/TMDB/t3.png";
import tmdb4 from "../../assets/TMDB/t4.png";
import tmdb5 from "../../assets/TMDB/t5.png";
import ceibo1 from "../../assets/CeiboDigital/c1.png";
import ceibo2 from "../../assets/CeiboDigital/c2.png";
import ceibo3 from "../../assets/CeiboDigital/c3.png";
import ceibo4 from "../../assets/CeiboDigital/c4.png";
import ceibo5 from "../../assets/CeiboDigital/c5.png";
import ceibo6 from "../../assets/CeiboDigital/c6.png";
import ceibo7 from "../../assets/CeiboDigital/c7.png";
import ceibo8 from "../../assets/CeiboDigital/c8.png";
import ceibo9 from "../../assets/CeiboDigital/c9.png";
import ceibo10 from "../../assets/CeiboDigital/c10.png";
import ceibo11 from "../../assets/CeiboDigital/c11.png";
import abp1 from "../../assets/proyectoABP/a1.png";
import abp2 from "../../assets/proyectoABP/a2.png";
import abp3 from "../../assets/proyectoABP/a3.png";
import abp4 from "../../assets/proyectoABP/a4.png";
import abp5 from "../../assets/proyectoABP/a5.png";
import abp6 from "../../assets/proyectoABP/a6.png";
import abp7 from "../../assets/proyectoABP/a7.png";
import abp8 from "../../assets/proyectoABP/a8.png";
import abp9 from "../../assets/proyectoABP/a9.png";
import abp10 from "../../assets/proyectoABP/a10.png";
import ecommerce1 from "../../assets/ECommerce/e1.png";
import ecommerce2 from "../../assets/ECommerce/e2.png";
import ecommerce3 from "../../assets/ECommerce/e3.png";
import ecommerce4 from "../../assets/ECommerce/e4.png";
import ecommerce5 from "../../assets/ECommerce/e5.png";
import portfolio from "../../assets/Portfolio/p.png";

const Proyects = () => {
  const images = [abp1, ceibo1, ecommerce1, tmdb1, portfolio];
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragConstraints, setDragConstraints] = useState({
    right: 0,
    left: -1077,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const proyectos = [
    {
      titulo: "Proyecto ABP",
      duracion: "01/09/2023 - 16/09/2023",
      rol: "Desarrollador Individual",
      descripcion:
        "Desarrollé un desafío para una entrevista laboral, el cual consistió en la creación de una página web en la que un administrador podría crear, modificar o eliminar un viaje. También podría crear un pasajero y asignarlo a un viaje.",
      tecnologias:
        "Angular | ABP Framework | C# | .NET Entity Framework | Docker",
      imagenes: [
        abp1,
        abp2,
        abp3,
        abp4,
        abp5,
        abp6,
        abp7,
        abp8,
        abp9,
        abp10
      ],
      enlaces: {
        github: "https://github.com/Albertososa753/ProyectoABP.git"
      }
    },
  
    {
      titulo: "CEIBO DIGITAL",
      duracion: "11/07/2023 - 04/08/2023",
      rol: "Desarrollador en equipo de 5 personas",
      descripcion:
        "Creación de un proyecto profesional para la empresa Ceibo Digital. Una aplicación web que automatizó el sistema de novedades y la generación de informes para facilitar el seguimiento, alineación y gestión de una empresa.",
      tecnologias:
        "React | Redux | JWT | Vite | NextUI | Bcrypt | Cookie-Parser | Express | Mongoose | MongoDB",
      imagenes: [
        ceibo1,
        ceibo2,
        ceibo3,
        ceibo4,
        ceibo5,
        ceibo6,
        ceibo7,
        ceibo8,
        ceibo9,
        ceibo10,
        ceibo11
      ],
      enlaces: {
        github: "https://github.com/Albertososa753/CEIBODIG.git"
      }
    },
    {
      titulo: "Ropita ECommerce",
      duracion: "27/06/2023 - 07/07/2023",
      rol: "Desarrollador en equipo de 4 personas",
      descripcion:
        "Maquetación, creación y diseño de una tienda de ropa en línea con búsqueda por categoría o nombre de prenda, vista individual del producto y carrito de compras. Incluye lógica de usuario, incluyendo un usuario con privilegios de administrador.",
      tecnologias:
        "Angular | ABP Framework | C# | .NET Entity Framework | Docker",
      imagenes: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5],
      enlaces: {
        github: "https://github.com/Albertososa753/Ropita-ECommerce.git"
      }
    },
    {
      titulo: "TMDB",
      duracion: "16/06/2023 - 23/06/2023",
      rol: "Desarrollador Individual",
      descripcion:
        "Desarrollé una aplicación para buscar películas, con características adicionales como registro de usuario e inicio de sesión.",
      tecnologias:
        "React | React-Redux | React-Hooks | NextUI | Node.js | Express | Sequelize",
      imagenes: [tmdb1, tmdb2, tmdb3, tmdb4, tmdb5],
      enlaces: {
        github: "https://github.com/Albertososa753/TMDB.git"
      }
    },
    {
      titulo: "Portfolio",
      duracion: "19/09/2023 - 25/09/2023",
      rol: "Desarrollador Individual",
      descripcion:
        "Este sitio web se adapta perfectamente a cualquier dispositivo, brindándote una experiencia completa para conocer mis creaciones y desarrollos. ¡Bienvenido a mi mundo de proyectos!",
      tecnologias: "JavaScript | CSS | React | Framer-Motion ",
      imagenes: [portfolio],
      enlaces: {
        github: "https://github.com/Albertososa753/PortfolioAlbertoSosa.git"
      }
    }
  ];
  

  const handleImageClick = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
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
      setDragConstraints({ right: 100, left: -2600 });
    }
  }, []);

  return (
    <div id="proyects" className="slider-container">
      <div>
        <h1 className="title">PROYECTOS</h1>
      </div>
      <motion.div className="slider" drag="x" dragConstraints={dragConstraints}>
        {images.map((image, index) => (
          <motion.div className="item" key={index}>
            <img src={image} alt="" onClick={() => handleImageClick(index)} />
            <div className="overlay">
              <button className="view-button" onClick={() => openModal(index)}>
                Ver Más
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {isModalOpen && (
        <div className="overlay-bg">
          <ModalCarousel
            images={proyectos[modalImageIndex].imagenes}
            proyecto={proyectos[modalImageIndex]}
            closeModal={closeImageModal}
          />
        </div>
      )}
    </div>
  );
};

export default Proyects;
