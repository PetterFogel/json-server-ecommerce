import { FC } from "react";
import { Poster } from "../../../models/Poster";
import { ProductItem } from "../products-item/ProductsItem";
import classes from "./ProductsList.module.css";

interface ProductsListProps {
  posters: Poster[];
}

export const ProductsList: FC<ProductsListProps> = ({ posters }) => {
  return (
    <div className={classes.productContainer}>
      {posters.map((poster) => (
        <ProductItem key={poster.id} poster={poster} />
      ))}
    </div>
  );
};
