import React from 'react'
import './priceList.css'
import backgroundImageYellow from './backgroundOption.webp'
import sunRoofPhoto from './sunPhoto.jpg'
import wallBackgroundImage from './blackBackground.jpg'
import villaPhoto from './villaPhoto3.jpg'
import buildingPhoto from './buildingProgress.jpeg'
import GreyBuilding from './greyBuilding.jpeg'
import { useNavigate } from 'react-router-dom'
const PriceList = () => {

    var nev = useNavigate()
  return (

    <div className='backgroundPriceList' style={{backgroundImage:`url(${wallBackgroundImage})`,backgroundSize:'100% 100%'}}>
    {/* <div className="backgroundHeaderList" style={{height:'700px',width:'100%',backgroundSize:'100% 100%',backgroundImage:`url(${backgroundImageYellow})`,display:'flex',flexDirection:'column',textAlign:'center'}}>
    <h1>השירותים שלנו</h1>
        <h3>עיינו בעבודות שלנו ובשירותים המגוונים שלנו</h3>
</div> */}
<h4 className='avi'>- העבודות שלנו -</h4>

        <div className='allList'>
            <div className='firsthalf'>
            <div className="innerList1">
                <div className="innerImage1">
                    <img onClick={()=>{nev('/barberSlide')}} src={sunRoofPhoto} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>
            <p>שיפוצים ותיקונים</p>
            </div>
            <div className="innerList2">
            <div className="innerImage1">
                    <img onClick={()=>{nev('/barberSlide3')}} src={buildingPhoto} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>            <p>עבודות גמר ושלד</p>
            </div>
            <div className="innerList3">
            <div className="innerImage1">
                    <img onClick={()=>{nev('/barberSlide2')}} src={sunRoofPhoto} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>            <p>פרוייקטים מיוחדים</p>
            </div>
            </div>
            <div className='secondhalf'>
            <div className="innerList4">
            <div className="innerImage1">
                    <img src={sunRoofPhoto} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>            <p>אינסטלציה וגבס</p>
            </div>
            <div className="innerList5">
            <div className="innerImage1">
                    <img src={villaPhoto} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>            <p>וילות</p>
            </div>
            <div className="innerList6">
            <div className="innerImage1">
                    <img src={GreyBuilding} alt="" style={{backgroundImage:sunRoofPhoto,backgroundSize:'100% 100%',height:'125px',width:'125px',borderRadius:'50%',boxShadow:'black 5px 2px 50px'}}/>
                </div>            <p>שיקום מבנים</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PriceList