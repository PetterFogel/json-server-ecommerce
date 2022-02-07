import { FC, useContext } from "react";
import { Routes } from "./components/layout/routes/Routes";
import Header from "./components/layout/header/Header";
import Context from "./context/Context";
import SideCart from "./components/layout/cart/sideCart/SideCart";
import "./App.css";

const App: FC = () => {
  const { isCartOpen } = useContext(Context);

  return (
    <>
      <Header />
      <main>
        <Routes />
        {isCartOpen && <SideCart />}
      </main>
    </>
  );
};

export default App;
