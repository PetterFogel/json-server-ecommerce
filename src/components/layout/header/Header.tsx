import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BsBag } from "react-icons/bs";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <div>Poster</div>
      </Link>
      <ul className={classes.ul}>
        <li>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </li>
        <li>
          <BsBag />
        </li>
      </ul>
    </header>
  );
};

export default Header;
