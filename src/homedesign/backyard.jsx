import React from "react";
import { NavLink } from "react-router-dom"
import Img32 from "../imgbackyard/1backyard.webp"
import Img33 from "../imgbackyard/2backyard.webp"
import Img34 from "../imgbackyard/3backyard.webp"
import Img35 from "../imgbackyard/4backyard.webp"
import Img36 from "../imgbackyard/5backyard.webp"
import Img37 from "../imgbackyard/6backyard.webp"
import Img38 from "../imgbackyard/7backyard.webp"


const Backyard = () => {
  return (
        <React.Fragment>
            <div className="container">
                 <header>
                    <nav className="nav-bar">
                      <div className="bedrrom_img">
                        <img src={Img32} alt=""  className="img_11"/>
                      </div>
                         <h1 className="logotip">  Backyard Design  </h1>
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
                      <h1 className="h1_list">Backyard designer</h1>
                      <p className="p_list"> This kind of flat or apartment situated in tashkent</p>
                      <span className="dollar"> from 10$ to 35$</span>
                    </div>
                 </header>
                 <div>
                 <h1 className="live">Backyard designer</h1>
                 </div>
                 <div className="main-l">
         <div className="leader">
                 <div className="img-1">
                     <img src={Img33} alt="" className="first-img" /> 
                      <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The Backyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                </div>  
                   <div className="img-2">
                       <img src={Img34} alt="" className="second-img"/>  
                       <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The backyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div>
                  <div className="img-3">
                     <img src={Img35} alt=""  className="third-img" /> 
                     <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The ackyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div> 
                </div> 
                 {/* <<<<<<< div2 >>>>>>>  */}
                  <div className="leader2">
                 <div className="img-4">
                     <img src={Img36} alt="" className="first-img" /> 
                      <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The backyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                </div>  
                  <div className="img-5">
                       <img src={Img37} alt="" className="second-img"/>  
                       <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The backyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div>
                  <div className="img-6">
                     <img src={Img38} alt=""  className="third-img" /> 
                     <h1 className="hliving">Backyard design</h1>
                       <p className="pliving">The backyard designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div> 
                </div>  
         </div>
            </div>

        </React.Fragment>
  )
}

export default Backyard