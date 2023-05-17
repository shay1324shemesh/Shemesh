import React from 'react'
import './gallery.css'
import galleryVideo from './colorsVideo.mp4'
import logoPhoto from '../common/Header/aviLogo.png'
import VisitCard from '../VisitCard/VisitCard'
import VisitCardHolder from '../VisitCard/VisitCardHolder'
const GalleryLink = () => {
 

  return (
    <>
    <div className="mainGevesVideo">
    <video autoPlay loop muted playsInline>
        <source src={galleryVideo} type="video/mp4"/>
      </video>

      <div className="textDivGeves">
        <img src={logoPhoto} alt="" height={'150px'} widget={'150px'}/>
        <h1>אברהם שמש קבלנות ויזמות</h1>
        <p>ריכזנו לכם דוגמאות מעבודות גבס רבות ומקצועיות שתוכלו להתרשם מהם</p>
      </div>
    </div>
    <VisitCardHolder/>
    </>
  )
}

export default GalleryLink

    {/* <div className="galleryContainer">
      <video src={galleryVideo} type="video/mp4" autoPlay loop muted style={{position:'absolute'}}>
      </video>
      <h1>עבודות גבס</h1>
    </div> */}