import axios from "axios";
import { createContext, FC, useState } from "react";
import { Poster } from "../models/product";

interface ContextProps {
  data: Poster[];
  isLoading: boolean;
  error: boolean;
  cart: number;
  addToCart: () => void;
  sendRequest: (url: string) => void;
}

const Context = createContext<ContextProps>({
  data: [],
  isLoading: false,
  error: false,
  cart: 0,
  addToCart: () => {},
  sendRequest: (url: string) => {},
});

export const ContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Poster[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [cart, setCart] = useState<number>(0);

  const sendRequestHandler = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  const addToCartHandler = () => {
    setCart(cart + 1);
    console.log(cart);
  };

  const contextValue: ContextProps = {
    data,
    isLoading,
    error,
    cart,
    addToCart: addToCartHandler,
    sendRequest: sendRequestHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
