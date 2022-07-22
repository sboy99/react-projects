import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
// import cartItems from "../data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: `CLEAR_CART` });
  };

  const updateAmount = (id, mode) => {
    dispatch({ type: `UPDATE_AMOUNT`, payload: { id, mode } });
  };

  // const incAmount = (id) => {
  //   dispatch({ type: `INCREASE_AMOUNT`, payload: { id } });
  // };
  // const decAmount = (id) => {
  //   dispatch({ type: `DECREASE_AMOUNT`, payload: { id } });
  // };

  const removeSingleItem = (id) => {
    dispatch({ type: `REMOVE_SINGLE_ITEM`, payload: { id } });
  };

  useEffect(() => {
    dispatch({ type: `GET_TOTALS` });
  }, [state.cart]);

  //Fetch Data//
  const fetchData = async () => {
    dispatch({ type: `LOADING` });
    const { data: cart } = await axios.get(url);
    dispatch({ type: `FETCH_CARTITEMS`, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeSingleItem, updateAmount }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
