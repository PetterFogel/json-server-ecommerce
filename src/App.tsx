import { FC, useContext } from "react";
import { Routes } from "./routes/Routes";
import { SideCart } from "./components/manage-side-cart/side-cart/SideCart";
import { Header } from "./layout/header/Header";
import { Context } from "./context/Context";
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
