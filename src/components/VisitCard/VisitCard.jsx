import { useState } from "react";
import "./visitcard.css";

import Logo from '../common/Header/aviLogo.png'
import secondLogo from './secondLogo.png'
import VCardCreator from "./VCardCreator";

function VisitCard() {

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
      style={{ width: "500px", height: "300px", borderRadius: "50px" }}
      onClick={handleFlip}
    >
      <div className="front">
        <h2 className="visitCardName"> אברהם שמש</h2>
        <p> - קבלן רשום עם ניסיון של 30 שנה - </p>
        <img src={Logo} alt="" height={'200px'} width={'225px'}/>
      </div>
      <div className="back">
        <div className="firstBack">
        {/* <h2>אברהם שמש</h2> */}
        <VCardCreator/>
        <h4 >קבלן רשום מקצועי</h4>
        <ul>
          <li  style={{marginTop:'5px',display:'flex',justifyContent:'flex-end',color:'white'}}> <a className="emailLink" href="mailto:avraham1962@gmail.com">avraham1962@gmail.com</a>  <button className="emailBut">  :אימייל</button></li>
          <li  style={{display:'flex',justifyContent:'flex-end',marginTop:'5px',color:'white'}}> <a className="telLink" href="tel:+972 50-866-9944">050-866-9944 </a> <button className="telBut"> : טלפון</button></li>

        </ul>
        <div className="imageLogoContainer">
        <img src={Logo} alt=""/>

        </div>
        </div>

        <div className="secondBack">
        <div className="onlyBack">
        
        </div>
        <div className="onlyBack2">
        
        </div>
        <div className="onlyBack3">
        
        </div>
        <div className="onlyBack4">
        
        </div>
        <div className="onlyBack5">
        
        </div>
        </div>

      </div>
 
    </div>

  );
}

export default VisitCard;
