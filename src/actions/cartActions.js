// actions/cartActions.js
export const addToCart = (name, image, price, id) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        id, // Generate a unique ID (could come from a server)
        name,
        image,
        price,
        quantity: 1, // Initial quantity is 1
      },
    };
  };
  export const changeQuantity = (itemId, newQuantity) => {
    return {
      type: 'CHANGE_QUANTITY',
      payload: {
        itemId,
        newQuantity,
      },
    };
  };
  