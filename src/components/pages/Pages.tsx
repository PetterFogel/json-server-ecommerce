import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../screens/about/About";
import Home from "../screens/home/Home";
import Products from "../screens/products/Products";

const Pages: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Pages;
