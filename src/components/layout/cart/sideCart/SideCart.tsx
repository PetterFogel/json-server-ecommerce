import React, { FC, useContext } from "react";
import classes from "./SideCart.module.css";
import { BsXLg } from "react-icons/bs";
import Context from "../../../../context/Context";

const SideCart: FC = () => {
  const { cart, openCart } = useContext(Context);

  return (
    <div className={classes.CartContainer}>
      <BsXLg className={classes.CloseIcon} onClick={openCart} />
      <h3 className={classes.CartTile}>Your Cart</h3>
      <div className={classes.CartItemsContainer}>
        {cart.map((item) => (
          <div className={classes.CartItemsHolder}>
            <div className={classes.imageHolder}>
              <img src={item.url} alt="poster" className={classes.imageStyle} />
            </div>
            <div className={classes.CartItemsInfo}>
              <h3 className={classes.price}>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
