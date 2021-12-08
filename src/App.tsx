import { FC } from "react";
import Header from "./components/layout/header/Header";
import Pages from "./components/layout/pages/Pages";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Pages />
      </main>
    </>
  );
};

export default App;
