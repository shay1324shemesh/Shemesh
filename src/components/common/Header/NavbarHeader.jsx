import React from 'react'
import { nav } from "../../Data/data"
import { useNavigate } from 'react-router-dom'
import useMediaQuery from './mediaQuery'
const NavbarHeader = ({navList,setNavList}) => {
    const isDesktop = useMediaQuery('(min-width:829px)')
    var nev = useNavigate()
    var onclickFun=(path)=>{
      setNavList(!navList)
      nev(path)
    }
  return (
    <>
    <div className='mainShayApp'>  
       <ul  className='shayApp' style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',height:'100%',marginTop:'0',paddingTop:'200px'}}>
       {nav.map((list, index) => (
           <li key={index} style={{display:'inline',width:'100%'}}>
                 <button className="hhll" onClick={()=>{onclickFun(list.path) }} >{list.text}</button>
            </li>
         ))}                          
       </ul>
    </div> 
    </>

  )
}

export default NavbarHeader
