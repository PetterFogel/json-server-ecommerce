import { FC, useContext, useEffect } from "react";
import classes from "./Products.module.css";
import Context from "../../../context/Context";
import ProductItem from "../../layout/productItem/ProductItem";

const Products: FC = () => {
  const { data, isLoading, error, sendRequest } = useContext(Context);

  useEffect(() => {
    sendRequest("http://localhost:3000/posters");
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

export default Products;
