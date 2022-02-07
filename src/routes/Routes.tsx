import { FC } from "react";
import { Route, Routes as Swtich } from "react-router-dom";
import About from "../screens/about-screen/AboutScreen";
import Home from "../screens/home-screen/HomeScreen";
import Products from "../screens/products-screen/ProductsScreen";

export const Routes: FC = () => {
  return (
    <>
      <Swtich>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Swtich>
    </>
  );
};
