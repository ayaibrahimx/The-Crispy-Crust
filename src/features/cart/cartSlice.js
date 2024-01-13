import { createSlice } from '@reduxjs/toolkit';

const getCounterFromLocalStorage = () => {
  const storedValue = localStorage.getItem('counter');
  const parsedValue = parseInt(storedValue, 10);
  return !isNaN(parsedValue) ? parsedValue : 0;
};

const getCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  return Array.isArray(storedCart) ? storedCart : [];
};

const initialState = {
  cart: getCartFromLocalStorage(),
  counter: getCounterFromLocalStorage(),
  quantity: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const [name, unitPrice, imageUrl] = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.cart.find((item) => item.name === name);

      if (existingItem) {
        // If the item is already in the cart, update its quantity or any other relevant property
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        // state.cart.push({ name, unitPrice, imageUrl, quantity: 1 });
        state.cart = [
          ...state.cart,
          { name, unitPrice, imageUrl, quantity: 1 },
        ];
      }
      // Increment the counter by 1
      state.counter += 1;

      // Update the local storage for both the counter and the cart
      localStorage.setItem('counter', state.counter.toString());
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const [name] = action.payload;

      const existingItem = state.cart.find((item) => item.name === name);
      state.counter -= 1;
      existingItem.quantity -= 1;

      localStorage.setItem('counter', state.counter.toString());
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    deleteItemFromCart: (state, action) => {
      const [name] = action.payload;
      // state.cart = state.cart.filter((item) => item.name !== name);
      // state.counter = state.cart.length;
      // localStorage.setItem('counter', state.counter.toString());

      // Find the item to be deleted
      const deletedItem = state.cart.find((item) => item.name === name);

      // Update the counter by subtracting the quantity of the deleted item
      state.counter -= deletedItem ? deletedItem.quantity : 0;

      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.name !== name);
    },

    emptyCart: (state) => {
      // Object.assign(state, initialState);
      state.cart = [];
      state.counter = 0;
      localStorage.removeItem('counter');
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, deleteItemFromCart } =
  cartSlice.actions;

export default function cartReducer(state, action) {
  const updatedState = cartSlice.reducer(state, action);
  // Persist the cart state in local storage
  localStorage.setItem('counter', JSON.stringify(updatedState.counter));
  localStorage.setItem('cart', JSON.stringify(updatedState.cart));

  return updatedState;
}
