import React, { FC, useEffect, useState } from "react";
import { Product } from "../../../models/product";
import classes from "./Products.module.css";

const Products: FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posters")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error, "Error!"));
  }, []);

  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Products</h2>
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
    </section>
  );
};

export default Products;
