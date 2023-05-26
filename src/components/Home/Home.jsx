import React from 'react'
import Advantage from '../Advantage/Advantage'
import Barber from '../Barber/Barber'
import Footer from '../Footer/Footer'
import PriceList from '../services/PriceList'
import ChooseAlbum from '../SlideBarber/ChooseAlbum'
import VisitCardHolder from '../VisitCard/VisitCardHolder'


const Home = () => {
  return (
    <>

    <Barber/>
    <VisitCardHolder/>

    <PriceList/>
    <Footer/>
    </>
  )
}

export default Home