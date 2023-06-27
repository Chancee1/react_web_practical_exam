const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'CHANGE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                quantity: item.quantity + action.payload.newQuantity,
              };
            }
            return item;
          }),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;