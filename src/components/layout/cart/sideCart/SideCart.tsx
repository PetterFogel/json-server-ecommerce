import React, { FC, useContext } from "react";
import classes from "./SideCart.module.css";
import { BsXLg } from "react-icons/bs";
import Context from "../../../../context/Context";
import CartItem from "../cartItem/CartItem";

const SideCart: FC = () => {
  const { cart, openCart } = useContext(Context);

  return (
    <div className={classes.CartContainer}>
      <BsXLg className={classes.CloseIcon} onClick={openCart} />
      <h3 className={classes.CartTile}>Your Cart</h3>
      <div className={classes.CartItemsContainer}>
        {cart.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SideCart;
