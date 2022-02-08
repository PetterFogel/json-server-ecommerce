import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { Context } from "../../context/Context";
import classes from "./Header.module.css";

export const Header: FC = () => {
  const { cart, openCart } = useContext(Context);

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
          <BsBag style={{ cursor: "pointer" }} onClick={openCart} />
          {ifCartHasItemsHandler() && (
            <span className={classes.cartItems}>{cart.length}</span>
          )}
        </li>
      </ul>
    </header>
  );
};
