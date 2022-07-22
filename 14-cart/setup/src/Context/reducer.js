const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (type === "REMOVE_SINGLE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== payload.id);
    return { ...state, cart: newCart };
  }

  if (type === "INCREASE_AMOUNT") {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === payload.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (type === "DECREASE_AMOUNT") {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === payload.id) {
        let newAmount = 1;
        if (cartItem.amount > newAmount) {
          newAmount = cartItem.amount - 1;
        }
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (type === "UPDATE_CART") {
  }

  return state;
};

export default reducer;
