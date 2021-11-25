import { FC, useContext, useEffect } from "react";
import classes from "./Products.module.css";
import { BsPlusCircle } from "react-icons/bs";
import Context from "../../../context/Context";

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
        <p>Loading...</p>
      ) : (
        <div className={classes.productContainer}>
          {data.map((product) => (
            <div key={product.id} className={classes.productHolder}>
              <div className={classes.imageHolder}>
                <img
                  src={product.url}
                  alt="product"
                  className={classes.imageStyle}
                />
              </div>
              <div className={classes.productInfo}>
                <h4 className={classes.productTitle}>{product.title}</h4>
                <BsPlusCircle className={classes.plusIcon} />
              </div>
              <p>{product.price} kr</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
