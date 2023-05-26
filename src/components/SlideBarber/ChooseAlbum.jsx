import React from 'react'
import { useNavigate } from 'react-router-dom'

import aviLogo from '../common/Header/aviLogo.png'
import backgroundImageBlack from './blackBackground.jpg'
import GalleryLink from '../GalleryLink/GalleryLink'
import PriceList from '../services/PriceList'
import VisitCardHolder from '../VisitCard/VisitCardHolder'
import Footer from '../Footer/Footer'
const ChooseAlbum = () => {

    const nav = useNavigate()
    // var linkVideos = () => {
    //     nav('/video')
    // }
    // var linkPhotos = () => {
    //     nav('/barberslide')
    // }
  return (
    <>
    {/* <h1 style={{textAlign:'center',padding:'50px',color:'white',textShadow:'  grey 2px 0 5.5px',textDecoration:'underline',paddingTop:'150px'}}>בחר אלבום</h1> */}

    <div className="controllButtoms" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'450px',width:'100%',backgroundSize:'100% 100%',backgroundImage:`url(${backgroundImageBlack})`}}>
  
    </div>
    <VisitCardHolder/>
    <Footer/>


    </>
  )
}

export default ChooseAlbum


    {/* <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{color:'white'}}>
                Photos
            </h2>
        <button style={{height:'50px',width:'50px',border:'none',borderRadius:'25px'}} onClick={linkPhotos}><img src={photosLogo} alt="" style={{heigth:'100%',width:'100%'}}/></button>
        </div>
        <div  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'50px'}}>
        <h2 style={{color:'white'}}>
        Videos
        </h2>
        <button style={{height:'50px',width:'50px',border:'none',borderRadius:'25px'}} onClick={linkVideos}><img src={videosLogo} alt="" style={{height:'100%',width:'100%'}}/></button>
        </div> */}

//         <div className='albumFirstNote' style={{height:'100%',width:'100%',display:'flex',justifyContent:'right',alignItems:'center'}}>
//         <div className="firstBorderDiv" style={{border:'2.5px white solid',height:'80%',width:'85%'}}>
//             <h1>avi</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis iusto sit reprehenderit similique ea cumque, numquam eos earum aspernatur accusantium unde labore eius! Error tempore maxime necessitatibus sit adipisci?</p>
//         </div>
//     </div>
//     <div className="albumLogo" style={{height:'100%',width:'100%',backroundImage:`url(${aviLogo})`,backgroundSize:'100% 100%'}}>
//         {/* <div className="aviLogoDiv" style={{height:'100%',width:'100%'}}>

//         </div> */}

//     </div>
//     <div className="albumSecondNote" style={{height:'100%',width:'100%',display:'flex',alignItems:'center'}}>
//     <div className="secondBorderDiv" style={{border:'2.5px white solid',height:'80%',width:'85%'}}>
//         <h1>shemesh</h1>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci repudiandae blanditiis rerum. Consequatur aspernatur, reiciendis vitae sapiente officiis ullam perspiciatis alias laboriosam repellendus nisi temporibus fuga, pariatur, accusamus recusandae.</p>
// </div>
//     </div>

