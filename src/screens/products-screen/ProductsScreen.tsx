import { FC, useContext, useEffect } from "react";
import { ProductItem } from "../../components/manage-products/products-item/ProductsItem";
import { Context } from "../../context/Context";
import classes from "./ProductsScreen.module.css";

export const Products: FC = () => {
  const { data, isLoading, error, sendRequest } = useContext(Context);

  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_API_BASEURL}/posters`);
  }, []);

  if (error) return <p>Oops! Something went wrong...</p>;

  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Products</h2>
      {isLoading ? (
        <p className={classes.loading}>Loading...</p>
      ) : (
        <div className={classes.productContainer}>
          {data.map((poster) => (
            <ProductItem key={poster.id} poster={poster} />
          ))}
        </div>
      )}
    </section>
  );
};