import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Services from '../services/Services'
import Blog from '../Blog/Blog'
import { useState } from 'react'
import Pricing from '../Pricing/Pricing'
import Contact from '../Contact/Contact'
import Barber from '../Barber/Barber'
import SlideBarber from '../SlideBarber/SlideBarber'
import VideoSlider from '../SlideBarber/VideoSlider'
import ChooseAlbum from '../SlideBarber/ChooseAlbum'
import PriceList from '../services/PriceList'
import GalleryLink from '../GalleryLink/GalleryLink'
import AccessibilityMenu from '../Accessibility/AccessibilityMenu'
import NavbarHeader from '../common/Header/NavbarHeader'
import SlideBarber2 from '../SlideBarber/SlideBarber2'
import SlideBarber3 from '../SlideBarber/SlideBarber3'
import WhatsappWidget from '../WhatsappWidget/WhatsappWidget'
const Pages = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
    <Router>
      <Header setNavList={setNavList} navList={navList} />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Shemesh' element={<Home/>}></Route>
        <Route path='/Real-Estate' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<PriceList/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/barber' element={<Barber/>}></Route>
        <Route path='/barberslide' element={<SlideBarber/>}></Route>
        <Route path='/barberslide2' element={<SlideBarber2/>}></Route>
        <Route path='/barberslide3' element={<SlideBarber3/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/choosealbum' element={<ChooseAlbum/>}></Route>
        <Route path='/video' element={<VideoSlider/>}></Route>
        <Route path='/GalleryLink' element={<GalleryLink/>}></Route>
        <Route path='/hiddenNavbar' element={<NavbarHeader setNavList={setNavList} navList={navList}/>}></Route>
      </Routes>
      <AccessibilityMenu/>
      <WhatsappWidget/>
    </Router>
    </>
  )
}

export default Pages