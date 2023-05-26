import React from 'react'
import './footer.css'
import locationIcon from './goldLocation.png'
import { useNavigate } from 'react-router-dom'
import instegramIcon from './instegramIcon.png'
import facebookIcon from './facebookIcon.png'
import whiteLogo from './whiteCallLogo.png'
import websiteIcon from './websiteIcon.png'
import useMediaQuery from '../common/Header/mediaQuery'
const Footer = () => {
    const isDesktop = useMediaQuery('max-width:829px')
    const nav = useNavigate();
    var albumBut = () => {
        nav('/choosealbum')
        window.scrollTo(0,0)
    }
    var contactBut = () => {
        nav('/contact')
        window.scrollTo(0,0)
    }
    var priceListBut = () => {
        nav('/services')
        window.scrollTo(0,0)
    }
    var homeBut = () => {
        nav('/')
        window.scrollTo(0,0)
    }
    var dataBut = () => {
        nav('/barber')
        window.scrollTo(0,0)
    }
    var itemsBut = () => {
        nav('/shop')
        window.scrollTo(0,0)
    }
    var sendToSign=()=>{
        nav('/contact')
        window.scrollTo(0,0)
    }
  return (
    <>
    <section className='footerContact'>
        <div className="containerFooter">
            <div className="send flex">
                <div className="text">
                    <h1 style={{textAlign:'center'}}>? מעוניין בשיחת ייעוץ</h1>
                    <p style={{textAlign:'center'}}>צור איתנו קשר עוד היום לשיחת ייעוץ ללא עלות ולמידע נוסף</p>
                </div>
                <button className='btn5' onClick={()=>{sendToSign()}}>לחצו כאן ליצירת קשר</button>
            </div>
        </div>
    </section>
    <div className='footerBox'>
    <div className='innerBoxFooter'>

    <div className='leftFooter'>
        <h1 style={{color:'white',marginTop:'50px'}}>|  עקבו אחרינו  | </h1>
        <div className='buttnsDivFooter' >
        <div style={{height:'50px',width:'50px' ,margin:'25px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={instegramIcon} alt="" style={{height:'75%', width:'75%'}}/>
        </div>
        <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={facebookIcon} alt="" style={{height:'75%', width:'75%',borderRadius:'5px'}}/>    
        </div>     
        </div>
        </div>
        <div className='leftFooterUp'>
            <div className='innerFooterUp'>
            <h1 style={{color:'white',marginBottom:'25px'}}> | צרו איתנו קשר | </h1>
            </div>
            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>אזורי פעילות</h3>
                <p style={{color:'white'}}>כל אזור המרכז</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',marginBottom:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={locationIcon} alt="" style={{heigth:'75%',width:'75%'}}/>
                </div>
            </div>
            </div>
            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>כתובת אימייל</h3>
                <p style={{color:'white'}}>avrahamshemesh555@gmail.com</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',marginBottom:'10px'}}>
                    <img src={whiteLogo} alt="" style={{heigth:'100%',width:'100%'}}/>
                </div>
            </div>
            </div>

            <div className='controladdress'>
            <div className='addressText'>
                <h3 style={{color:'white'}}>טלפון</h3>
                <p style={{color:'white'}}>0508669944</p>
            </div>
            <div className='addressFooter'>
                <div style={{height:'50px',width:'50px',border:'1px goldenrod solid',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={websiteIcon} alt="" style={{heigth:'80%',width:'80%'}}/>
                </div>
            </div>
            </div>
        </div>
        </div>

    <div>
        <div className='menuFooter'>
            <h1 style={isDesktop ? {color:'white',textAlign:'end',marginTop:'50px'} : {color:'white',textAlign:'center',marginTop:'50px'}}>| תפריט האתר | </h1>                    
            <div className='menuFooterButtoms'>
            <button style={{marginTop:'35px'}}>אודותינו</button>
            <button onClick={()=>itemsBut()}>מוצרים</button>
            <button onClick={()=>priceListBut()}>העבודות שלנו</button>
            <button onClick={()=>contactBut()}>צור קשר</button>
            <button onClick={()=>albumBut()}>כרטיס ביקור</button>
            <button onClick={()=>homeBut()}>עמוד הבית</button>
            </div>
        </div>
        </div>
    </div>
    <div className="legal">
        <span> Apps and Websites Professional Developing By Shay Shemesh</span>
    </div>
    </>
  )
}

export default Footer


{/* <footer>
<div className="container">
    <div className="box">
        <div className="logo" >
            <img src={Logo} alt="" />
            <h2>Don You Need Help With Anything ?</h2>
            <p>Receive updates, hot deals, tutorials, discounts sent srtaignt in your inbox every mounth</p>
            <div className="input flex">
                <input type="text" placeholder='Email Address' name='' id=''/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    {footer.map((val) => (
        <div className="box">
            <h3>{val.title}</h3>
            <ul>
                {val.text.map((items) => (
                    <li>{items.list}</li>
                ))}
            </ul>
        </div>
    ))}
</div>
</footer> */}