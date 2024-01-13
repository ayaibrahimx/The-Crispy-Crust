import { useDispatch } from 'react-redux';
import { emptyCart } from '../cart/cartSlice';

function EmptyCart() {
  const dispatch = useDispatch();
  function handleEmptyCart() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );
    console.log(confirmed);

    confirmed && dispatch(emptyCart());
  }

  return (
    <div className="">
      <button
        onClick={handleEmptyCart}
        className="pointer rounded-full   border border-solid border-orange-500 px-4  py-3 text-2xl text-gray-400  hover:border-orange-500 hover:text-orange-500 "
      >
        Empty Cart
      </button>
    </div>
  );
}

export default EmptyCart;
