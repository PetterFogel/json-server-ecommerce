import React, { FC } from "react";
import classes from "./Home.module.css";

const Home: FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.homeContainer}>
        <div className={classes.introHolder}>
          <h2 className={classes.pageTitle}>Home</h2>
          <p className={classes.pageSubtitle}>lorem ipsum</p>
          <button className={classes.pageBtn}>Products</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
