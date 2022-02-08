import { FC, useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { Context } from "../../../context/Context";
import { CartItem } from "../cart-item/CartItem";
import classes from "./SideCart.module.css";

export const SideCart: FC = () => {
  const { cart, openCart, emptyCart } = useContext(Context);

  return (
    <div className={classes.CartContainer}>
      <div className={classes.CartItemsContainer}>
        <BsXLg className={classes.CloseIcon} onClick={openCart} />
        <h3 className={classes.CartTile}>Your Cart</h3>
        {cart.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <div className={classes.TotalAmountContainer}>
        <h4 className={classes.totalAmountTitle}>Total Amount:</h4>
        <button className={classes.totalAmountBtn}>Checkout</button>
        <button className={classes.totalAmountBtn} onClick={emptyCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
};
