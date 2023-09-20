import React from 'react'
import './intro.css'
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png'
import bg from '../../assets/_com.apple.Pasteboard.OrebzH.png'

const Intro = () => {
  return (
<section id='intro'>
  <div className='introContent'>
<span className='hello'>Hola,</span>
<span className="introText">Yo soy <span className="introName">Alberto Sosa</span><br />Desarrollador FullStack</span>
<p className="introPara">Este es mi sitio web en el cual te mostrae los proyectos que he <br />echo  a lo largo de mi carrera</p>
<Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Contratame</button></Link>
  </div>
  <img src={bg} alt="Profile" className='bg' />
</section>  )
}

export default Intro