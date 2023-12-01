import React from 'react';
import { NavLink } from 'react-router-dom';
import Img18 from "../imagedining/1diningroom.webp"
import Img19 from "../imagedining/2diningroom.webp"
import Img20 from "../imagedining/3diningroom.webp"
import Img21 from "../imagedining/4diningroom.webp"
import Img22 from "../imagedining/5diningroom.webp"
import Img23 from "../imagedining/6diningroom.webp"
import Img24 from "../imagedining/7diningroom.webp"


const Dining = () => {
    return (
      <React.Fragment>
           <div className="container">
                 <header>
                    <nav className="nav-bar">
                      <div className="bedrrom_img">
                        <img src={Img18} alt=""  className="img_11"/>
                      </div>
                         <h1 className="logotip">    Dining Design  </h1>
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
                      <h1 className="h1_list">Dining designer</h1>
                      <p className="p_list"> This kind of flat or apartment situated in tashkent</p>
                      <span className="dollar"> from 10$ to 35$</span>
                    </div>
                 </header>
                 <div>
                 <h1 className="live">Dining room designer</h1>
                 </div>
                 <div className="main-l">
         <div className="leader">
                 <div className="img-1">
                     <img src={Img19} alt="" className="first-img" /> 
                      <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                </div>  
                   <div className="img-2">
                       <img src={Img20} alt="" className="second-img"/>  
                       <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div>
                  <div className="img-3">
                     <img src={Img21} alt=""  className="third-img" /> 
                     <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div> 
                </div> 
                 {/* <<<<<<< div2 >>>>>>>  */}
                  <div className="leader2">
                 <div className="img-4">
                     <img src={Img22} alt="" className="first-img" /> 
                      <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                </div>  
                  <div className="img-5">
                       <img src={Img23} alt="" className="second-img"/>  
                       <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">15$</span>
                  </div>
                  <div className="img-6">
                     <img src={Img24} alt=""  className="third-img" /> 
                     <h1 className="hliving">Dining room design</h1>
                       <p className="pliving">The dining designer is very cozy and bright, you <br />
                        can spend holidays here. we spend a lot of time in this living room</p>
                        <span className="span-s">50$</span>
                  </div> 
                </div>  
         </div>
            </div>
      </React.Fragment>
    )
  }
  
  export default Dining