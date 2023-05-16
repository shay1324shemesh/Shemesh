import React from 'react'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import VisitCard from './VisitCard'
import './visitCardHolder.css'
import blackBackgroundImage from '../services/blackBackground.jpg'

const VisitCardHolder = () => {

  const[flag,setFlag]=useState(false)
  var changeFlag = () => {
    setFlag(!flag)
  }


  return (
    <div className='mainVisitCard' style={{backgroundImage:`url(${blackBackgroundImage})`}}>
      <h1 className='firstH1'>לחצו על כרטיס הביקור למטה למידע נוסף</h1>
      <button className='visitBut' onClick={()=>changeFlag()}>Show/Hide - Visit Card</button>
      { flag ?  <Animated 
      animationIn="bounceInLeft" 
      animationOut="fadeOutLeftBig"
      isVisible={true}
      > 
      <VisitCard/>
      </Animated>  :
      <Animated 
      isVisible={false}
      > 
      <VisitCard/>
      </Animated> 
      }

    </div>
  )
}

export default VisitCardHolder
