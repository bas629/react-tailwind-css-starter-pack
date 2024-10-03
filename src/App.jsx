import "./App.css";
import React,{useState} from "react"
import  Imagefloder  from "./components/Imagefloder.js"
import { Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from './components/logo.jpg';
import navbar from './components/navbar.png';
import Publicpost from "./components/Publicpost";

function App() {
 const[navbatFlag,setNavbarFlag]=useState(false);
 function  openNavbar()
 { if(navbatFlag)
 {
   setNavbarFlag(false);
 }
  else
  {
    setNavbarFlag(true);
  }
  console.log(navbatFlag);

 }

  
return (
  
    <div className="bg-black w-[30vw]  min-h-[100vh] mx-auto text-white ">

    <ul className="flex flex-row justify-between w-[100%] h-36 px-8">
    
    <NavLink to='/'><img src={logo} className="w-24 scale-105"></img></NavLink>
    <img src={navbar} onClick={openNavbar}className="w-24 my-auto scale-75" ></img>

    </ul>

     {  navbatFlag &&
        <ul className="bg-white   w-[100%] h-[100%] transition ease-linear   shadow-xl shadow-black px-10">


        </ul>
    
       
        

     } 

     <Routes>
    
     <Route  path="/publicPost"  element={<Publicpost></Publicpost>}></Route>

     </Routes>
   
   
     <div className=" bottom-16   ">
 <ul className="  space-x-6   px-5 ">
  <NavLink>  uploadPost    </NavLink>

  <NavLink>  privatePost   </NavLink>

  <NavLink>  PublicPost    </NavLink>

  <NavLink> ProtectedPost </NavLink>
 
 </ul>
 </div>
   </div>
  ); 
}

export default App;
