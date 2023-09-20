import React, { useRef } from 'react'
import './contact.css'
import LogoLinkedin from '../../assets/logoLink.png'
import LogoGitHub from '../../assets/logoGitHub.png'
import LogoCV from '../../assets/logocv.png'
import LogoYT from '../../assets/logoYT.png'
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dzbnhsg', 'template_idh6nr7', form.current, 'uX4bX4-bis6SbsNr-')
          .then((result) => {
              console.log(result.text);
              alert('Email Enviado!')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
<div id='contact'>
    <h1 className="contactTitle">Contactese Conmigo</h1>
    <span className="contactDesc">Porfavor ante cualquier duda, su consulta no molesta</span>
    <form ref={form} onSubmit={sendEmail} className="contactFrom">
        <input type="text" name="your_name" className='name' placeholder='Nombre'/>
        <input type="email" name="your_email"  className='email' placeholder='Email'/>
        <textarea className='msg' name="messege" rows="5" placeholder='Mensaje'></textarea>
      
        <button type='submit' value='Send' className="submitBtn">Enviar</button>        
        <div className="links">
            <img src={LogoLinkedin} alt="Linkedin" className="link" />
            <img src={LogoGitHub} alt="GitHub" className="link" />
            <img src={LogoCV} alt="CV" className="link" />
            <img src={LogoYT} alt="YouTube" className="link" />
        </div>
    </form>
</div>  
)
}

export default Contact