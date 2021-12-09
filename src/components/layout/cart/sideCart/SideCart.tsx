import React, { FC, useContext } from "react";
import classes from "./SideCart.module.css";
import { BsXLg } from "react-icons/bs";
import Context from "../../../../context/Context";

const SideCart: FC = () => {
  const { openCart } = useContext(Context);

  return (
    <div className={classes.CartContainer}>
      <BsXLg className={classes.CloseIcon} onClick={openCart} />
      <h3 className={classes.CartTile}>Your Cart</h3>
    </div>
  );
};

export default SideCart;
