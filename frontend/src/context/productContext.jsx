/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "http://127.0.0.1:9000/shop";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const getProducts = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(API, {
        method: "GET",
      });
      const data = await response.json();
      const products = data.products;
      // console.log(data.products);
      // console.log(products);
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // API call for individual product

  const getSingleProduct = async (API) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await fetch(API, { method: "GET" });
      const singleProduct = await response.json();
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct[0] });
      // console.log("singleProduct", singleProduct);
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
