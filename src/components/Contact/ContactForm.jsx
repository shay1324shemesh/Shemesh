import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css'
const ContactForm = () => {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_j7dm8ru',
            'template_5bwbto2',
            form.current, 
            'LBrfL4ATs11SqmS1C'
            )
          .then((result) => {
            alert('הודעתכם נשלחה בצלחה !')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    

  return (
    <div className="mainForm">
            <h1 className='formH1'>מלאו את הפרטים ונחזור אליכם בהקדם</h1>
            <form ref={form} onSubmit={sendEmail}>
    <label className='nameLabel'>שם מלא</label>
    <input className='nameInput' type="text" name="name"  />
    <label className='emailLabel'>כתובת אימייל</label>
    <input  className='emailInput' type="email" name="email"/>
    <label className='messegeLabel'>תוכן ההודעה</label>
    <textarea name="message" className='messegeArea' style={{borderRadius:'15px'}}/>
    <input className='submitInput' type="submit" value="שלח הודעה" />

  </form>  
    </div>

  )
}

export default ContactForm