import React from 'react'
import Back from '../common/Back'
import img from '../SlideBarber/contactBack.jpg'
import './contact.css'
import formBackgroundImage from '../common/Header/secondToolsBack.jpg'
import Logo from '../common/Header/aviLogo.png'
import chairImage from '../common/Header/whitebackTools.jpg'
import blockBlackPhoto from '../services/blackBackground.jpg'
import About from '../About/About'
const Contact = () => {
  const chairStyles = {
    backgroundImage:`url(${chairImage})`,
    heigth:'450px',
    width:'400px',
    backgroundSize:'100% 100%',
    backgroundRepeat:'no-repeat',
  }
  // var LogoStylesFunction =()=>{
  //   if(isDesktop == true){
  //     return LogoStyles={
  //       backgroundSize:'100% 100%',
  //       height:'130px',
  //       width:'200px',
  //       marginLeft:'50px',
  //       backgroundRepeat:'no-repeat',
  //       borderRadius:'25px',
  //     }
  //   }
  //   else{
  //     return LogoStyles={
  //       backgroundSize:'100% 100%',
  //       height:'130px',
  //       width:'200px',
  //       marginLeft:'0',
  //       backgroundRepeat:'no-repeat',
  //       borderRadius:'25px',
  //     }
  //   }
  // }
  return (
    <>
    <section className='contact mb'>
      <div className="mainContainerContact">
      <div className="contactContainer" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',backgroundImage:`url(${img})`,backgroundSize:'100% 100%',height:'600px'}} >
        <div className="mainContactBlock" style={{backgroundImage:`url(${blockBlackPhoto})`}}>
        <h2 style={{textShadow:'2px 1px 5px black',fontSize:'30px',textDecoration:'underline'}}>צרו איתנו קשר</h2>
            <h1 style={{textShadow:'2px 1px 5px black'}}>קבעו תור לתספורת כבר מעכשיו</h1>
        </div>
        </div>
      </div>
      {/* <Back className='backContact' name='צרו איתנו קשר' title='! קבעו תור לתספורת כבר מעכשיו' cover={img} /> */}
      <div className="containerForm">
        <div className='formLogoDiv'>
          <div>
          <img src={Logo} alt="" className='formLogo'/>
          </div>
        </div>
        <form action="" >
          <h4 style={{textAlign:'center'}}>אנא מלא את הפרטים הבאים</h4>
          <div className='twoInputs'>
            <input type="text" placeholder='שם מלא'/>
            <input type="text" placeholder='אימייל'/>
          </div>
          <input type="text" placeholder='נושא הפנייה' className='lastInput'/>
          <textarea className='textArea' name="" id="" cols="30" rows="10"></textarea>
          <button className='FormSendButton'> שלח פרטים</button>
        </form>
        <div className='chairImage' style={chairStyles}>
          
          </div>
      </div>
    </section>
    </>
  )
}

export default Contact