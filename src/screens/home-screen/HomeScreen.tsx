import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HomeScreen.module.css";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.section}>
      <div className={classes.homeContainer}>
        <div className={classes.introHolder}>
          <h2 className={classes.pageTitle}>Home</h2>
          <p className={classes.pageSubtitle}>lorem ipsum</p>
          <button
            className={classes.pageBtn}
            onClick={() => navigate("/products")}
          >
            PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
