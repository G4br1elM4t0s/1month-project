import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import { HomeWeb } from "./screen/HomeWeb/HomeWeb"; "./screen/HomeWeb/HomeWeb";
import { Category } from "./screen/Category/Category";
export default function Routess(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomeWeb/>} />
        <Route path="/HomeCategory" element={<Category/>} />
      </Routes>
    </Router>
  )
}