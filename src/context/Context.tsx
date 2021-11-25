import axios from "axios";
import { createContext, FC, useState } from "react";
import { Poster } from "../models/product";

interface ContextProps {
  data: Poster[];
  isLoading: boolean;
  error: boolean;
  sendRequest: (url: string) => void;
}

const Context = createContext<ContextProps>({
  data: [],
  isLoading: false,
  error: false,
  sendRequest: (url: string) => {},
});

export const ContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Poster[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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

  const contextValue: ContextProps = {
    data,
    isLoading,
    error,
    sendRequest: sendRequestHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;