import React, { useRef, useState, useEffect } from "react";
import Img1 from "../img/livingroom.jpg"
import Img2 from "../img/2livingroom.webp"
import Img3 from "../img/3livingroom.webp"
import Img4 from "../img/4livingroom.webp"
import Img5 from "../img/5livingroom.webp"
import Img6 from "../img/6livingroom.webp"
import Img7 from "../img/7livingroom.webp"
import Img8 from "../img/8livingroom.webp"
import Img9 from "../img/9livingroom.webp"
import Img10 from "../img/10livingroom.webp"
import { NavLink } from "react-router-dom"
import Img39 from "../imgicon/telegram.png"
import Img40 from "../imgicon/youtube.png"
import Img41 from "../imgicon/instagram.png"
const design = () => {

    return (
      <React.Fragment>
         <div className="container">
         <div className="all">
                 <img src={Img1} alt="" className="living-l" /> 
            </div>
            <div className="header">
                <nav className="navbar">
                  <h1 className="header-logo">Design</h1>
                    <ul  className="li-l" > 
                        <li  className="li-desc">
                          <NavLink to={"/home"} >Home</NavLink>
                        </li>
                        <li  className="li-desc">
                          <NavLink  to={"/bedroom"} >Bedroom</NavLink>                
                        </li> 
                        <li  className="li-desc">
                          <NavLink  to={"/dining"} >Dining</NavLink>
                        </li>
                        <li  className="li-desc">
                          <NavLink  to={"/kitchen"} >Kitchen</NavLink>
                        </li>
                        <li  className="li-desc">
                          <NavLink  to={"/backyard"} >Backyard</NavLink>
                        </li>                     
                  </ul>  
                </nav>
                <div className="home-desgn">
                  <h1 className="h-leader">Design your house</h1>
                  <p className="p-leader">Subscribe f_xolmuhammedov Youtube Channel to watch 
                  </p>
                  <p className="spanl">more videos 
                     press to bell icon to get latest updates </p>  
                     <button className="btn-first">Watch more</button>
                     <button className="btn-second">Subscribe</button> 
                </div>
            </div>
         </div>
          <div className="main">
               <div className="leader">
                <h1 className="live">Living room designer</h1>
                 <div className="img-1">
                     <img src={Img2} alt="" className="first-img" /> 
                      <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                </div>  
                <div className="img-2">
                       <img src={Img4} alt="" className="second-img"/>  
                       <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                  <div className="img-3">
                     <img src={Img3} alt=""  className="third-img" /> 
                     <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                </div> 
                {/* <<<<<<< div2 >>>>>>> */}
                  <div className="leader2">
                 <div className="img-7">
                     <img src={Img5} alt="" className="first-img" /> 
                      <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                </div>  
                <div className="img-8">
                       <img src={Img6} alt="" className="second-img"/>  
                       <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                  <div className="img-9">
                     <img src={Img7} alt=""  className="third-img" /> 
                     <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                </div> 
                {/* <<<<<<< div2 >>>>>>> */}
                  <div className="leader3">
                 <div className="img-10">
                     <img src={Img8} alt="" className="first-img" /> 
                      <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                </div>  
                <div className="img-11">
                       <img src={Img9} alt="" className="second-img"/>  
                       <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                  <div className="img-12">
                     <img src={Img10} alt=""  className="third-img" /> 
                     <h1 className="hliving">Living room design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                  </div>
                </div>  
         </div> 
           <div className="footer">
           <div className="covered">
           <h1>Design</h1>
            <p  className="allp">telephone number: 91-790-00-82</p>
            <p className="allp">kochasi: ibrat stret, 12-home </p>
            <div className="">
              <h1>Book store</h1>
              <p className="allh">Design Novza</p>
              <p className="allh">Design Navruz mall</p>
              <p className="allh">Design O`zbegim</p>
              <p className="allh">Design Grocery shop</p>
            </div>
           </div>
               <div className="achivment">
                <h1 className="our-achi">Our achivment</h1>
                <p className="our-p"><span className="span-s">certificate:</span> Digital city</p>
                <p className="our-p"><span className="span-s">certificate:</span> The best designer</p>
                <p className="our-p"><span className="span-s">certificate:</span> Social media marketing</p>
               </div>
               <div className="social">
                  <h1 className="social-m">We in the sicial media</h1>
                   <img src={Img39} alt=""  className="icon-t" />
                   <img src={Img40} alt=""  className="icon-y"/>
                   <img src={Img41} alt=""  className="icon-i"/>
               </div>
           </div>
         
         </React.Fragment>
    )
  }
  
  export default design