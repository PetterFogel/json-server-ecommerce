import axios from "axios";
import { createContext, FC, useState } from "react";
import { Poster } from "../models/Poster";

interface ContextProps {
  data: Poster[];
  isLoading: boolean;
  error: boolean;
  cart: Poster[];
  isCartOpen: boolean;
  addToCart: (poster: Poster) => void;
  sendRequest: (url: string) => void;
  openCart: () => void;
}

const Context = createContext<ContextProps>({
  data: [],
  isLoading: false,
  error: false,
  cart: [],
  isCartOpen: false,
  addToCart: () => {},
  sendRequest: (url: string) => {},
  openCart: () => {},
});

export const ContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Poster[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [cart, setCart] = useState<Poster[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

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

  const addToCartHandler = (poster: Poster) => {
    setCart([...cart, poster]);
  };

  const openCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const contextValue: ContextProps = {
    data,
    isLoading,
    error,
    cart,
    isCartOpen,
    addToCart: addToCartHandler,
    sendRequest: sendRequestHandler,
    openCart: openCartHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
