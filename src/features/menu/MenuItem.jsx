import { useDispatch } from 'react-redux';

import { addToCart } from '../cart/cartSlice';

function MenuItem({ menu, selectedOption, query }) {
  const filteredSearch = menu.filter((pizza) =>
    pizza.name.toLowerCase().includes(query.toLowerCase()),
  );
  if (selectedOption === 'Price Low to High') {
    filteredSearch.sort((a, b) => a.unitPrice - b.unitPrice);
  } else if (selectedOption === 'Price High to Low') {
    filteredSearch.sort((a, b) => b.unitPrice - a.unitPrice);
  } else if (selectedOption === 'New to old') {
    filteredSearch.sort((a, b) => b.id - a.id);
  } else if (selectedOption === 'Old to New') {
    filteredSearch.sort((a, b) => a.id - b.id);
  }
  const dispatch = useDispatch();
  function handleAddToCart(name, unitPrice, imageUrl) {
    dispatch(addToCart([name, unitPrice, imageUrl]));
  }

  return (
    <>
      {filteredSearch.map((pizza, index) => {
        const isEven = index % 2 === 0;
        const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;

        return (
          <>
            <li
              key={id}
              className={`flex grid-cols-2  items-start justify-between gap-4 px-4
              py-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <span className={`w-96`}>
                <img
                  src={imageUrl}
                  alt="pizza "
                  className={`  max-w-96 rounded-full p-5 duration-500 hover:rotate-45 ${
                    soldOut && 'grayscale hover:transform-none '
                  }`}
                />
              </span>

              <span className={` mt-14 w-96`}>
                <p className="pb-2 font-pacifico text-2xl text-orange-500">
                  {name}
                </p>
                <p className=" capitalize">{ingredients.join(', ')}</p>
                <p>{unitPrice}$</p>
                {soldOut ? (
                  <button
                    disabled
                    className={`mt-9 rounded-md border border-orange-500 bg-gray-800 px-2 py-3 hover:border hover:border-slate-100 hover:text-orange-500`}
                  >
                    Sold out
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleAddToCart(name, unitPrice, imageUrl, id)
                    }
                    className={`mt-9 rounded-md border border-orange-500 px-2 py-3 hover:border hover:border-slate-100 hover:text-orange-500`}
                  >
                    Add to Cart
                  </button>
                )}
              </span>
            </li>
          </>
        );
      })}
    </>
  );
}

export default MenuItem;
