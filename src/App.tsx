import { FC, useContext } from "react";
import Header from "./components/layout/header/Header";
import Pages from "./components/layout/pages/Pages";
import "./App.css";
import Context from "./context/Context";
import SideCart from "./components/layout/cart/sideCart/SideCart";

const App: FC = () => {
  const { isCartOpen } = useContext(Context);

  return (
    <>
      <Header />
      <main>
        <Pages />
        {isCartOpen && <SideCart />}
      </main>
    </>
  );
};

export default App;
