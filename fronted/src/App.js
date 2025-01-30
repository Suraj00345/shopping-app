import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCatagory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import Shop from "./Pages/Shop";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png";
import women_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCatagory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCatagory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCatagory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
