import React, { FC, useContext } from "react";
import { Poster } from "../../../../models/Poster";
import classes from "./CartItem.module.css";
import { BiTrashAlt } from "react-icons/bi";
import Context from "../../../../context/Context";

interface CartItemProps {
  cartItem: Poster;
}

const CartItem: FC<CartItemProps> = ({ cartItem }: CartItemProps) => {
  const { removeItemFromCart } = useContext(Context);

  return (
    <div className={classes.CartItemContainer}>
      <div className={classes.CartItemsHolder}>
        <div className={classes.imageHolder}>
          <img src={cartItem.url} alt="poster" className={classes.imageStyle} />
        </div>
        <div className={classes.CartItemsInfo}>
          <h3 className={classes.price}>{cartItem.title}</h3>
          <p>{cartItem.price}</p>
        </div>
      </div>
      <BiTrashAlt
        className={classes.trashIcon}
        onClick={() => removeItemFromCart(cartItem.id)}
      />
    </div>
  );
};

export default CartItem;