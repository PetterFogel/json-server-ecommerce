import { FC, useContext } from "react";
import { Poster } from "../../../models/Poster";
import { BiTrashAlt } from "react-icons/bi";
import { Context } from "../../../context/Context";
import classes from "./CartItem.module.css";

interface CartItemProps {
  cartItem: Poster;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }: CartItemProps) => {
  const { removeItemFromCart } = useContext(Context);

  const checkPriceTimesQty = () => {
    const totalPrice = cartItem.qty * parseInt(cartItem.price);
    return totalPrice;
  };

  return (
    <div className={classes.CartItemContainer}>
      <div className={classes.CartItemsHolder}>
        <div className={classes.imageHolder}>
          <img src={cartItem.url} alt="poster" className={classes.imageStyle} />
        </div>
        <div className={classes.CartItemsInfo}>
          <h3 className={classes.price}>{cartItem.title}</h3>
          <p>{cartItem.price} kr</p>
          <p>
            {cartItem.qty} x {checkPriceTimesQty()}
          </p>
        </div>
      </div>
      <BiTrashAlt
        className={classes.trashIcon}
        onClick={() => removeItemFromCart(cartItem.id)}
      />
    </div>
  );
};
