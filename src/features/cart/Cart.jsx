import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { addToCart, deleteItemFromCart, removeFromCart } from './cartSlice';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  function handleAddToCart(name, unitPrice, imageUrl) {
    dispatch(addToCart([name, unitPrice, imageUrl]));
  }

  function handleDeleteitem(name) {
    dispatch(deleteItemFromCart([name]));
  }
  function handleRemoveFromCart(name, unitPrice, imageUrl) {
    dispatch(removeFromCart([name, unitPrice, imageUrl]));
  }
  let priceOfAllItems = 0;
  return (
    <div className="mt-20">
      {cart.length > 0 &&
        cart.map((pizza, index) => {
          const { name, unitPrice, imageUrl, quantity } = pizza;
          const priceOfItem = unitPrice * quantity;
          priceOfAllItems += priceOfItem;

          return (
            <span key={name} className=" m-auto flex items-start px-3 py-2">
              <span>
                <img
                  src={imageUrl}
                  alt="pizza"
                  className="h-20 w-20 rounded-full "
                />
              </span>
              <span className="mt-5 flex w-96 justify-between">
                <p className="mx-5 font-pacifico text-2xl text-orange-500">
                  {name}
                </p>
                <p className="mt-2 text-xl ">{priceOfItem}$</p>
              </span>
              <span className="ml-28 flex w-28">
                <button
                  className="pointer m-auto my-3  mt-5 h-10 w-10 rounded-full border-2 border-solid border-orange-500 px-2 py-1 text-orange-500  hover:border-slate-100 hover:text-orange-500 "
                  onClick={() => handleAddToCart(name, unitPrice, imageUrl)}
                >
                  +
                </button>
                <span className="mt-7 flex text-xl">
                  <p className="mx-1">{quantity}</p>
                </span>

                <button
                  className="pointer m-auto  my-3 mt-5 h-10 w-10 rounded-full border-2 border-solid border-orange-500 px-2 py-1 text-orange-500  hover:border-slate-100 hover:text-orange-500 "
                  onClick={() =>
                    handleRemoveFromCart(name, unitPrice, imageUrl)
                  }
                  disabled={quantity === 1}
                >
                  -
                </button>
              </span>
              <span>
                <button
                  onClick={() => handleDeleteitem(name)}
                  className="  ml-20 mt-[1.23rem] h-11 w-11
                    rounded-full border-2 border-solid border-orange-500 font-semibold text-orange-500 duration-500
                    hover:border-slate-100 hover:text-slate-100 "
                >
                  <Icon
                    icon="mi:delete"
                    height="40"
                    width="40"
                    className="p-2"
                  />
                </button>
              </span>
            </span>
          );
        })}

      {cart.length > 0 ? (
        <>
          <span className="text-l  flex flex-col text-right font-pacifico text-slate-100">
            <p className=" mt-8 ">
              Your Total: <span className="text-xl">{priceOfAllItems}$</span>
            </p>
            <span className="m-auto mt-14 flex gap-3">
              <button className="m-auto  rounded-full border border-solid border-orange-500 px-4 py-3 font-pacifico text-3xl  text-slate-100 hover:border-slate-100 hover:text-orange-500">
                <Link to="/cart/map">Checkout</Link>
              </button>
              <EmptyCart />
            </span>
          </span>
        </>
      ) : (
        <span className="flex">
          <p className="m-auto py-4 pt-8 font-pacifico text-4xl text-orange-600">
            Please Add Items to Your Cart
          </p>
        </span>
      )}
      <span className="mt-10 flex"></span>
    </div>
  );
};

export default Cart;
