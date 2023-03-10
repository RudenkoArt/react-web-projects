const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };

    case 'DISPLAY_ITEMS':
      return { ...state, cart: action.payload, loading: false };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    case 'TOGGLE_AMOUNT': {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              amount:
                action.payload.type === 'INCREASE'
                  ? cartItem.amount + 1
                  : cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount > 0);

      return { state, cart: tempCart };
    }

    case 'GET_TOTALS': {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = +total.toFixed(2);

      return { ...state, total, amount };
    }
    default:
      return state;
  }
};

export default reducer;
