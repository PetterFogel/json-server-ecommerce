import { FC } from "react";
import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div>Logo</div>
      <ul className={classes.ul}>
        <li>Products</li>
        <li>About</li>
      </ul>
    </header>
  );
};

export default Header;
