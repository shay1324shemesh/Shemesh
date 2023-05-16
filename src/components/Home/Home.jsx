import React from 'react'
import Barber from '../Barber/Barber'
import PriceList from '../services/PriceList'
import ChooseAlbum from '../SlideBarber/ChooseAlbum'
import VisitCardHolder from '../VisitCard/VisitCardHolder'


const Home = () => {
  return (
    <>
    <Barber/>
    <VisitCardHolder/>
    <PriceList/>

    </>
  )
}

export default Home