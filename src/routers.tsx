import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import { HomeWeb } from "./screen/HomeWeb/HomeWeb"; "./screen/HomeWeb/HomeWeb";
import { Category } from "./screen/Category";
import { Test } from "./screen/teste/Test";
import { Product } from "./screen/Product-Page/Product"
export default function Routess(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomeWeb/>} />
        <Route path="/HomeCategory" element={<Category/>} />
        <Route path="/HomeCategory/Label" element={<Product/>} />
        <Route path="/teste" element={<Test/>} />
      </Routes>
    </Router>
  )
}