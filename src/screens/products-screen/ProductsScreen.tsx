import axios from "axios";
import { FC, useEffect } from "react";
import { ProductsList } from "../../components/manage-products/products-list/ProductsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllPosters, postersSlice } from "../../redux/posters/posterSlice";

import classes from "./ProductsScreen.module.css";

export const Products: FC = () => {
  const dispatch = useAppDispatch();
  const { posters, isLoading, error } = useAppSelector(fetchAllPosters);
  const { setPosters, setIsLoading, setError } = postersSlice.actions;

  useEffect(() => {
    sendRequest();
  }, []);

  const sendRequest = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}/posters`
      );
      dispatch(setPosters(response.data));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setIsLoading(false));
    }
  };

  if (error)
    return <p className={classes.error}>Oops! Something went wrong... :(</p>;

  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Products</h2>
      {isLoading ? (
        <p className={classes.loading}>Loading...</p>
      ) : (
        <ProductsList posters={posters} />
      )}
    </section>
  );
};
