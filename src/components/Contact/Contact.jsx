import React from 'react'
import Back from '../common/Back'
import img from '../SlideBarber/contactBack.jpg'
import './contact.css'
import formBackgroundImage from '../common/Header/secondToolsBack.jpg'
import Logo from '../common/Header/aviLogo.png'
import chairImage from '../common/Header/whitebackTools.jpg'
import blockBlackPhoto from '../services/blackBackground.jpg'
import About from '../About/About'
import useMediaQuery from '../common/Header/mediaQuery'
import ContactForm from './ContactForm'
const Contact = () => {

  const isDesktop = useMediaQuery('(max-width:829px)')

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
        <div className="mainContactBlock" style={isDesktop ? {backgroundImage:`url(${blockBlackPhoto})`,height:'175px',borderRadius:'50px',width:'50%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center',padding:'25px'} : {backgroundImage:`url(${blockBlackPhoto})`,height:'150px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'15px',borderRadius:'25px'}}>
        <h2 style={{textShadow:'2px 1px 5px black',fontSize:'30px',textDecoration:'underline'}}>צרו איתנו קשר</h2>
            <h1 style={{textShadow:'2px 1px 5px black'}}>פנו אלינו לייעוץ כבר עכשיו  </h1>
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
        <ContactForm/>

        <div className='chairImage' style={chairStyles}>
          
          </div>
      </div>
    </section>
    </>
  )
}

export default Contact


