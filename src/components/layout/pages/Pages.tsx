import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../../screens/about-screen/AboutScreen";
import Home from "../../../screens/home-screen/HomeScreen";
import Products from "../../../screens/products-screen/ProductsScreen";

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
