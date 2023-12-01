import React from "react";
import { NavLink } from "react-router-dom"
import "./css/style.css"
import Img11 from "../image/3bedroom.jpg"
import Img12 from "../image/2bedroom.jpg"
import Img13 from "../image/4bedroom.webp"
import Img14 from "../image/5bedroom.webp"
import Img15 from "../image/6bedroom.webp"
import Img16 from "../image/7bedroom.webp"
import Img17 from "../image/8bedroom.jpg"


const Bedroom = () => {
  return (
        <React.Fragment>
            <div className="container">
                 <header>
                    <nav className="nav-bar">
                      <div className="bedrrom_img">
                        <img src={Img11} alt=""  className="img_11"/>
                      </div>
                         <h1 className="logotip">    Bedroom Design  </h1>
                           <ul className="ul-desc">
                            <li className="list_li">
                            <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li className="list_li">
                            <NavLink to={"/bedroom"}>Bedroom</NavLink>
                            </li>
                            <li className="list_li">
                            <NavLink to={"/dining"}>Dining</NavLink>
                            </li>
                            <li className="list_li">
                            <NavLink to={"/kitchen"}>Kitchen</NavLink>
                            </li>
                            <li className="list_li">
                            <NavLink to={"/backyard"}>Backyard</NavLink>
                            </li>
                           </ul> 
                    </nav>
                    <div className="bedrool">
                      <h1 className="h1_list"> Bedroom designer</h1>
                      <p className="p_list"> This kind of flat or apartment situated in tashkent</p>
                      <span className="dollar"> from 10$ to 35$</span>
                    </div>
                 </header>
                 <div>
                 <h1 className="live">Living room designer</h1>
                 </div>
                 <div className="main-l">
         <div className="leader">
                 <div className="img-1">
                     <img src={Img12} alt="" className="first-img" /> 
                      <h1 className="hliving">Bedroom design</h1>
                       <p className="pliving">The Bedroom  designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                </div>  
                   <div className="img-2">
                       <img src={Img13} alt="" className="second-img"/>  
                       <h1 className="hliving">c design</h1>
                       <p className="pliving">The Bedroom designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div>
                  <div className="img-3">
                     <img src={Img14} alt=""  className="third-img" /> 
                     <h1 className="hliving">Bedroom  design</h1>
                       <p className="pliving">The Bedroom designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div> 
                </div> 
                 {/* <<<<<<< div2 >>>>>>>  */}
                  <div className="leader2">
                 <div className="img-4">
                     <img src={Img15} alt="" className="first-img" /> 
                      <h1 className="hliving">Bedroom  design</h1>
                       <p className="pliving">The Bedroom  designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                </div>  
                  <div className="img-5">
                       <img src={Img16} alt="" className="second-img"/>  
                       <h1 className="hliving">Bedroom  design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div>
                  <div className="img-6">
                     <img src={Img17} alt=""  className="third-img" /> 
                     <h1 className="hliving">Bedroom  design</h1>
                       <p className="pliving">The Bedroom  designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div> 
                </div>  
         </div>
            </div>

        </React.Fragment>
  )
}

export default Bedroom