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
  removeItemFromCart: (itemId: string) => void;
  emptyCart: () => void;
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
  removeItemFromCart: (itemId: string) => {},
  emptyCart: () => {},
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
    const exist = cart.find((cartItem) => cartItem.id === poster.id);
    if (exist) return increaseQtyHandler(poster);
    setCart([...cart, poster]);
  };

  const increaseQtyHandler = (poster: Poster) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === poster.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const openCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItemFromCartHandler = (itemId: string) => {
    setCart(cart.filter((cartItem) => cartItem.id !== itemId));
  };

  const emptyCartHandler = () => {
    setCart([]);
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
    removeItemFromCart: removeItemFromCartHandler,
    emptyCart: emptyCartHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
