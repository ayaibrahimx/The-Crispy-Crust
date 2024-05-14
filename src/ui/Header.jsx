import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Search from './Search';
import { useSelector } from 'react-redux';

function Header({ query, setQuery }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const { counter } = useSelector((store) => store.cart);

  return (
    <>
      <nav className="  sticky top-0  z-50 flex w-full items-center justify-between bg-stone-900 bg-opacity-80 px-8 py-3">
        <Link to="/">
          <span className="flex  items-center pb-2 ">
            <img
              src="/images/12_22_2023 11_24_59 PM.png"
              alt="pizza"
              className="inline-block h-14 w-14"
            />

            <h2 className=" font- inline pt-4 font-pacifico uppercase">
              The Crispy Crust
            </h2>
          </span>
        </Link>
        <span>
          {currentPath === '/menu' && (
            <Search query={query} setQuery={setQuery} />
          )}
        </span>
        <span className="">
          <ul className="display:inline justify-items-between  flex space-x-3">
            <li>About</li>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <li>Blog</li>
            <Link to="/cart">
              <span className="flex">
                <span className="absolute right-5 top-4">
                  {counter ? counter : '0'}
                </span>
                <Icon
                  className="icon cursor-pointer text-orange-500"
                  icon="mi:shopping-cart"
                  height="30"
                  width="30"
                ></Icon>
              </span>
            </Link>
          </ul>
        </span>
      </nav>
    </>
  );
}

export default Header;
