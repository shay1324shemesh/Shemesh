import React from 'react'
import Image from './newPhoto.webp'
import './barber.css'
import avi from './aviPhoto.jpg'
import backgroundImageBrown from './whiteTexture.jpg' 
import backgroundImageApp from './textureBackground.jpg' 
import useMediaQuery from '../common/Header/mediaQuery'
import backgroundVideo from './homeVideo.mp4'
import lineDivider from './dividerLine.png'
import logoPhoto from '../common/Header/aviLogo.png'

let backgroundStyles={};
const Barber = () => {
  const isDesktop = useMediaQuery('(max-width:829px)')

  var checkBack = () => {
    if(isDesktop = true){
      backgroundStyles = {
        backgroundImage:`url(${backgroundImageBrown})`,
        backgroundSize:'100% 100%'
      }
    }
    else{
      backgroundStyles = {
        backgroundImage:`url(${backgroundImageApp})`,
        backgroundSize:'100% 100%'
    }
  }
}
  return (
    <>
    <div className="mainBarberVideo">
      <video autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>

      <div className="textDivBarber">
        <img src={logoPhoto} alt="" height={'150px'} widget={'150px'}/>
        <h1>אברהם שמש קבלנות ויזמות</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum in totam officiis alias vero earum consequatur quasi, ea quod, aut officia explicabo provident fugiat nisi blanditiis voluptas non! Temporibus, quos.</p>
      </div>
    </div>
    {isDesktop ?     
    <div className='mainBarber' style={{backgroundImage:`url(${backgroundImageBrown})`,backgroundSize:'100% 100%'}}>
    <div className='moveDiv'>
      <div className='textDiv' style={isDesktop ? {maxWidth:'70%',fontSize:'20px',marginTop:'100px'} : {maxWidth:'40%',fontSize:'20px'}}>
        <h1>..קצת עלינו</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nisi asperiores saepe, minima consectetur aliquid ex nihil perferendis maxime sunt excepturi at facere et rerum itaque fugiat, nostrum repudiandae veniam.</p>
      </div>
      <div className='photoAviDiv'>
      <img src={avi} alt="" style={isDesktop ? {height:'300px',width:'325px',borderRadius:'25px',boxShadow:'white 1px 0 50px'} : {height:'400px',width:'450px',borderRadius:'25px',boxShadow:'white 1px 0 50px'}}/>
      </div>
      </div>

    <div className='barberLine' >
      <img src={lineDivider} alt="" />
    </div>
    <div className='barberContainer'>
        <div className='barberBackground'>
            <img src={Image} alt="barber" 
            style={isDesktop ? {height:'400px',width:'350px'} : {height:'350px',width:'250px'}}
            />
        </div>
        <div className='barberDescription'>
          <div className='innerBarberDescription'>
          <h2>מה זה בעצם קבלן רשום ?</h2>
            <p>בחיפוש אחר קבלן רשום שיעסוק בעבודות גמר ושלד, בניית ושיקום מבנים, ושיפוצים, חשוב למצוא מקצוען מיומן ואמין שישלב את הידע והמומחיות גדולות לכל מטרה. בחירה מומלצת בעבודות אלו, ולמרות שיש אפשרות להשתמש בקבלן לא רשום. קבל רשום שעוסק בעבודות גמר ושלד, בניית ושיקום מבנים, ושיפוצים מביא עימו יתרונות מרובים. ובראשונה, הוא מצויד בידע ומומחיות מקצועית בתחום, אינטגרציה מעמיקה של תהליכי הבנייה, התכנון והשיפוץ , קבלן מנוסה יותר בטווח של יותר שנים שהוא לא צריך להתעלם ממנו אם אתם רוצים מבאלגן בהמשך הצרכים של אנשים שמקבלים את המחירים. יותר אך על האיכות אנחנו ממליצים לא להתפשר </p>
          </div>
        </div>
    </div>

    </div> 
    :
    <div className='mainBarber' style={{backgroundImage:`url(${backgroundImageApp})`,backgroundSize:'100% 100%'}}>
    <div className='moveDiv'>
      <div className='textDiv' style={{maxWidth:'40%'}}>
      <h1>..קצת עלינו</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nisi asperiores saepe, minima consectetur aliquid ex nihil perferendis maxime sunt excepturi at facere et rerum itaque fugiat, nostrum repudiandae veniam.</p>
      </div>
      <div>
      <img src={avi} alt="" style={{height:'400px',width:'450px',borderRadius:'25px',boxShadow:'white 1px 0 50px'}}/>
      </div>
      </div>

    <div className='barberLine' >
      <img src={lineDivider} alt="" />
    </div>
    <div className='barberContainer'>
        <div className='barberBackground'>
            <img src={Image} alt="barber"/>
        </div>
        <div className='barberDescription'>
          <div>
          <h2>מה זה בעצם קבלן רשום ?</h2>
            <p>בחיפוש אחר קבלן רשום שיעסוק בעבודות גמר ושלד, בניית ושיקום מבנים, ושיפוצים, חשוב למצוא מקצוען מיומן ואמין שישלב את הידע והמומחיות גדולות לכל מטרה. בחירה מומלצת בעבודות אלו, ולמרות שיש אפשרות להשתמש בקבלן לא רשום. קבל רשום שעוסק בעבודות גמר ושלד, בניית ושיקום מבנים, ושיפוצים מביא עימו יתרונות מרובים. ובראשונה, הוא מצויד בידע ומומחיות מקצועית בתחום, אינטגרציה מעמיקה של תהליכי הבנייה, התכנון והשיפוץ , קבלן מנוסה יותר בטווח של יותר שנים שהוא לא צריך להתעלם ממנו אם אתם רוצים מבאלגן בהמשך הצרכים של אנשים שמקבלים את המחירים. יותר אך על האיכות אנחנו ממליצים לא להתפשר </p>
          </div>
        </div>
    </div>

    </div>}
    </>
  )
}

export default Barber
