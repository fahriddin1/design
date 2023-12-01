import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Design from "./homedesign/design";
import Bedroom from "./homedesign/bedroom";
import Dining from "./homedesign/dining";
import Kitchen from "./homedesign/kitchen";
import Backyard from "./homedesign/backyard";



const App = () => {
  return (
    <React.Fragment>
       <Routes>
        <Route path="/" element={<Design/>}/>
        <Route path="bedroom" element={<Bedroom/>}/>
        <Route path="dining" element={<Dining/>}></Route>
        <Route path="kitchen" element={<Kitchen/>}></Route>
        <Route path="backyard" element={<Backyard/>}></Route>
      </Routes> 
    </React.Fragment>
  )
}

export default App