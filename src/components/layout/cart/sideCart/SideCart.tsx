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
      <div>
        {cart.map((item) => (
          <div>
            <div>
              <img src={item.url} alt="poster" />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
