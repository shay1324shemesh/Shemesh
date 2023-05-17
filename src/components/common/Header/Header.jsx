import React, { useState } from "react"
import "./header.css"
import { nav } from "../../Data/data"
import Logo from './aviLogo.png'
import { Link } from "react-router-dom"
import useMediaQuery from "./mediaQuery"
import { useNavigate } from "react-router-dom"
let task;
let deleteStyles;
let navStyles
const Header = ({ setNavList , navList}) => {

  var nev = useNavigate()

  const isDesktop = useMediaQuery('(max-width: 829px)');
  var changeSit=()=>{
    if(isDesktop == true){
      setNavList(!navList)
      window.scrollTo(0,0)

    }
    else{
      window.scrollTo(0,0)
    }
  }
  var holdMenuBut=()=>{
    if(navList == false){
      setNavList(!navList)
      window.scrollTo(0,0)
      nev('/hiddenNavbar')
    }
    else{
      setNavList(!navList)
      window.scrollTo(0,0)
      nev('/')
    }
  }
  // var keepStyle=()=>{
  //   if(isDesktop == true ){
  //     deleteStyles = {
  //       alignItems:'center',
  //       width:'100%',
  //     }
  //   }
  //   else{
  //     deleteStyles = {
  //       display:'none'
  //     }
  //   }
  // }

  // var checkNav=()=>{
  //   if(navList == true){
  //     navStyles = {
  //       backgroundColor:'grey'
  //     }
  //   }
  //   else{
  //     navStyles = {
  //       backgroundColor: 'rgba(128, 128, 128, 0.321)',

  //       width:'100%',
  //       boxShadow:'grey 1px 1px 25px'
  //     }
  //   }
  // }

  return (
    <>
    {/* {keepStyle()} */}
    {/* {checkNav()} */}
    <header style={navStyles}>
        <div className='container flex' style={navStyles}>
          <div className='logo'>
            <img src={Logo} alt=""  style={{marginLeft:'25px'}}/>
          </div>
          <div className='nav'>
  
            <ul  className='shay' style={{display:'block'}}>
           {nav.map((list, index) => (
                <li key={index} style={{display:'inline',marginLeft:'15px',marginRight:'15px'}}>
                      <Link to={list.path}><button onClick={()=>{changeSit()}}  className="hhll" style={{color:'white',fontFamily:'Varela Round',fontSize:'22px',background:'transparent',textShadow:' black 5px 2px 5px'}}>{list.text}</button></Link>
                 </li>
              ))}                          
            </ul>                     
          </div>
          {isDesktop ?  <p style={{display:'none'}}>
            shay
          </p>
          : <div className='buttonCall' style={{marginRight:'50px'}}>
            <button className='btn1' style={{borderRadius:'5px',width:'175px',height:'75px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px',backgroundColor:'grey',color:'wheat',boxShadow:'white 1px 0 50px'}}>
              0523773413 - לשיחת ייעוץ  
            </button>
          </div>}


<div className='toggle'>
            <button onClick={() => holdMenuBut()}>{navList ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>   
} 
</button>
          </div>
        </div>
      </header>
        
      {/* {navList ? <div style={deleteStyles}>     
       <ul  className='shayApp' style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',height:'100%'}}>
       {nav.map((list, index) => (
           <li key={index} style={{display:'inline',width:'100%'}}>
                 <Link to={list.path}><button onClick={()=>{changeSit()}}  className="hhll" >{list.text}</button></Link>
            </li>
         ))}                          
       </ul></div> 
       : <p style={{display:'none'}}>none</p>
         }  */}
    </>
  )
}

export default Header
