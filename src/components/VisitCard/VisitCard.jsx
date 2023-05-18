import { useState } from "react";
import "./visitcard.css";

import Logo from '../common/Header/aviLogo.png'
import secondLogo from './secondLogo.png'
import VCardCreator from "./VCardCreator";
import useMediaQuery from "../common/Header/mediaQuery";

function VisitCard() {

  const isDesktop = useMediaQuery('(max-width:829px)')

  var vCard = {
    firstName : 'אברהם',
    lastName : 'שמש',
    organization : 'שמש קבלנות ויזמות',
    workPhone : '+972-50-866-9944',
    note : 'קבלן רשום עם ניסיון של מעל 30 שנה בתחום'
  }
  


  let createVcard=()=>{
    const FileSaver = require('file-saver');
    const blob = new Blob([ vCard.getFormattedString() ], 
    {type: "text/vcard;charset=utf-8"});
     FileSaver.saveAs(blob, "blob.vcf");
  //   var vCardsJS = require('vcards-js');


  
  
  // //save to file
  // vCard.saveToFile('./avraham.vcf');
  
  // //get as formatted string
  // console.log(vCard.getFormattedString());
}
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (

    <div
    className={`visit-card ${flipped ? "flipped" : ""}`}
    style={isDesktop ?{ width: "350px", height: "250px", borderRadius: "50px" } :{width: "450px", height: "270px", borderRadius: "50px" }}
    onClick={handleFlip}
  >
    <div className="front">
      <h2 className="visitCardName"> אברהם שמש</h2>
      <p> - קבלן רשום עם ניסיון של 30 שנה - </p>
      <img src={Logo} alt="" 
      style={isDesktop ?{ width: "150px", height: "250px",marginBottom:'20px'} :{width: "200px", height: "300px"}}
      />
    </div>
    <div className="back">
      <div className="firstBack">
      {/* <h2>אברהם שמש</h2> */}
      <VCardCreator/>
      <h4 
      style={isDesktop ? {fontSize:'15px'}:{fontSize:'20px'}}
      >קבלן רשום מקצועי</h4>
      <ul>
        <li  style={{marginTop:'5px',display:'flex',justifyContent:'flex-end',color:'white'}}> <a className="emailLink" href="mailto:avraham1962@gmail.com"
        style={isDesktop ? {fontSize:'15px'}:{fontSize:'20px'}}
        >avraham1962@gmail.com</a>  <button className="emailBut"
        style={isDesktop ? {fontSize:'15px'}:{fontSize:'20px'}}
        >  :אימייל</button></li>
        <li  style={{display:'flex',justifyContent:'flex-end',marginTop:'5px',color:'white'}}> <a className="telLink" href="tel:+972 50-866-9944"
        style={isDesktop ? {fontSize:'15px'}:{fontSize:'20px'}}
        >050-866-9944 </a> <button className="telBut"
        style={isDesktop ? {fontSize:'15px'}:{fontSize:'20px'}}
        > : טלפון</button></li>

      </ul>
      <div className="imageLogoContainer">
      <img src={Logo} alt=""
      style={isDesktop ?{ width: "100px", height: "170px",marginBottom:'20px'} :{width: "175px", height: "240px"}}

      />

      </div>
      </div>

      <div className="secondBack">
        {isDesktop ? 
              <div className="noneBack">
      
              </div>
              :
              <div className="onlyBack">
      
              </div>
              }
        {isDesktop ? 
              <div className="onlyBack2" style={{marginLeft:'10px',width:'1.5px'}}>
      
              </div>
              :
              <div className="onlyBack2">
      
              </div>
              }
        {isDesktop ? 
              <div className="onlyBack3" style={{width:'1.5px',marginLeft:'5px'}}>
      
              </div>
              :
              <div className="onlyBack3">
      
              </div>
              }
       {isDesktop ? 
              <div className="onlyBack4" style={{width:'1.5px',marginLeft:'5px'}} >
      
              </div>
              :
              <div className="onlyBack4">
      
              </div>
              }

{isDesktop ? 
              <div className="onlyBack5" style={{width:'1.5px',marginLeft:'5px'}} >
      
              </div>
              :
              <div className="onlyBack5">
      
              </div>
              }
  
      </div>

    </div>

  </div>

  );
}

export default VisitCard;
