import React from 'react'
import './proyects.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
 const Proyects = () => {
  return (

<section id='proyects'>
   <h2 className='proyectTitle'>Proyectos Realizados</h2>
   <span className='proyectDesc'>proyectos hechos por mi</span>
   <div className='proyectImgs'>
    <img className='proyectImg' src={Portfolio1} alt="" />
    <img className='proyectImg' src={Portfolio2} alt="" />
    <img className='proyectImg' src={Portfolio3} alt="" />
    <img className='proyectImg' src={Portfolio4} alt="" />

    </div> 
</section>

    )
}
export default Proyects




