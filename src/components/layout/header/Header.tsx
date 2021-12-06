import { FC, useContext } from "react";
import classes from "./Header.module.css";
import Context from "../../../context/Context";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header: FC = () => {
  const { cart } = useContext(Context);

  const ifCartHasItemsHandler = () => {
    if (cart.length >= 1) return true;
    return false;
  };

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
          <BsBag style={{ cursor: "pointer" }} />
          {ifCartHasItemsHandler() && (
            <span className={classes.cartItems}>{cart.length}</span>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
