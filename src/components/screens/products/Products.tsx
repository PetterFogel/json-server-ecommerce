import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Product } from "../../../models/product";
import classes from "./Products.module.css";

const Products: FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/posters");
      console.log(response);
      const data = response.data;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

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
                <p>{product.price} kr</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
