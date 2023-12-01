import React from 'react';
import { NavLink } from 'react-router-dom';
import Img25 from "../imagechiken/1kitchenroom.webp"
import Img26 from "../imagechiken/2kitchenroom.webp"
import Img27 from "../imagechiken/3kitchenroom.webp"
import Img28 from "../imagechiken/4kitchenroom.webp"
import Img29 from "../imagechiken/5kitchenroom.webp"
import Img30 from "../imagechiken/6kitchenroom.webp"
import Img31 from "../imagechiken/7kitchenroom.webp"

const Kitchen = () => {
    return (
      <React.Fragment>
         <div className="container">
                 <header>
                    <nav className="nav-bar">
                      <div className="bedrrom_img">
                        <img src={Img25} alt=""  className="img_11"/>
                      </div>
                         <h1 className="logotip">    Kitchen Design  </h1>
                           <ul className="ul-desc">
                            <li className="list_li">
                            <NavLink to={"/"}>Home</NavLink>
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
                      <h1 className="h1_list"> Kitchen designer</h1>
                      <p className="p_list"> This kind of flat or apartment situated in tashkent</p>
                      <span className="dollar"> from 10$ to 35$</span>
                    </div>
                 </header>
                 <div>
                 <h1 className="live"> Kitchen designer</h1>
                 </div>
                 <div className="main-l">
         <div className="leader">
                 <div className="img-1">
                     <img src={Img26} alt="" className="first-img" /> 
                      <h1 className="hliving">Kitche design</h1>
                       <p className="pliving">The kitchen designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                </div>  
                   <div className="img-2">
                       <img src={Img27} alt="" className="second-img"/>  
                       <h1 className="hliving"> Kitchen design</h1>
                       <p className="pliving">The kitchen designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div>
                  <div className="img-3">
                     <img src={Img28} alt=""  className="third-img" /> 
                     <h1 className="hliving">Kitchen design</h1>
                       <p className="pliving">The kitchen designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div> 
                </div> 
                 {/* <<<<<<< div2 >>>>>>>  */}
                  <div className="leader2">
                 <div className="img-4">
                     <img src={Img29} alt="" className="first-img" /> 
                      <h1 className="hliving">Kitchen design</h1>
                       <p className="pliving">The kitchen designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                </div>  
                  <div className="img-5">
                       <img src={Img30} alt="" className="second-img"/>  
                       <h1 className="hliving">Kitchen design</h1>
                       <p className="pliving">The kitchen designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div>    
                  <div className="img-6">
                     <img src={Img31} alt=""  className="third-img" /> 
                     <h1 className="hliving">Kitchen design</h1>
                       <p className="pliving">The hotel designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div> 
                </div>  
         </div>
            </div>
      </React.Fragment>
    )
  }
  
  export default Kitchen