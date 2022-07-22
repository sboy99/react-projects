const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (type === "REMOVE_SINGLE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== payload.id);
    return { ...state, cart: newCart };
  }

  if (type === `UPDATE_AMOUNT`) {
    const { id, mode } = payload;

    const cart = state.cart.map((item) => {
      if (item.id === id) {
        if (mode === `INC`) {
          return { ...item, amount: item.amount + 1 };
        }
        if (mode === `DEC`) {
          return { ...item, amount: item.amount - 1 > 0 ? item.amount - 1 : 1 };
        }
      }
      return item;
    });

    return { ...state, cart };
  }

  // if (type === "INCREASE_AMOUNT") {
  //   const newCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === payload.id) {
  //       return { ...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return { ...state, cart: newCart };
  // }

  // if (type === "DECREASE_AMOUNT") {
  //   const newCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === payload.id) {
  //       let newAmount = 1;
  //       if (cartItem.amount > newAmount) {
  //         newAmount = cartItem.amount - 1;
  //       }
  //       return { ...cartItem, amount: newAmount };
  //     }
  //     return cartItem;
  //   });
  //   return { ...state, cart: newCart };
  // }

  if (type === "GET_TOTALS") {
    const { totalItems, totalPrice } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.totalItems += amount;
        total.totalPrice += amount * price;

        return total;
      },
      {
        totalItems: 0,
        totalPrice: 0,
      }
    );

    return {
      ...state,
      total: parseFloat(totalPrice.toFixed(2)),
      amount: totalItems,
    };
  }

  if (type === `LOADING`) {
    return { ...state, loading: true };
  }

  if (type === `FETCH_CARTITEMS`) {
    const { cart } = payload;
    return { ...state, loading: false, cart };
  }

  return state;
};

export default reducer;
