import React, { FC, useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import Context from "../../../../context/Context";
import { Poster } from "../../../../models/product";
import classes from "./ProductItem.module.css";

interface ProductItemProps {
  poster: Poster;
}

const ProductItem: FC<ProductItemProps> = ({ poster }: ProductItemProps) => {
  const { addToCart } = useContext(Context);

  return (
    <div key={poster.id} className={classes.productHolder}>
      <div className={classes.imageHolder}>
        <img src={poster.url} alt="product" className={classes.imageStyle} />
      </div>
      <div className={classes.productInfo}>
        <h4 className={classes.productTitle}>{poster.title}</h4>
        <BsPlusCircle
          className={classes.plusIcon}
          onClick={() => addToCart(poster)}
        />
      </div>
      <p>{poster.price} kr</p>
    </div>
  );
};

export default ProductItem;
