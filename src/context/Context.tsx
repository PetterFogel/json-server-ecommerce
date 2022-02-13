import axios from "axios";
import { createContext, FC, useState } from "react";
import { Poster } from "../models/Poster";
import { Response } from "../models/Response";

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

export const Context = createContext<ContextProps>({
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
  const [response, setResponse] = useState<Response>({
    data: [],
    isLoading: false,
    error: false,
  });
  const [cart, setCart] = useState<Poster[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const sendRequestHandler = async (url: string) => {
    try {
      setResponse((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const response = await axios.get(url);
      const data = response.data;
      setResponse((prevState) => ({
        ...prevState,
        data: data,
        isLoading: false,
      }));
    } catch (error) {
      setResponse((prevState) => ({
        ...prevState,
        error: true,
        isLoading: false,
      }));
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
    data: response.data,
    isLoading: response.isLoading,
    error: response.error,
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
