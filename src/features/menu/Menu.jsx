import { useLoaderData, useOutletContext } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Sort from '../../ui/Sort';
import { useState } from 'react';

function Menu() {
  const [query] = useOutletContext();
  const [selectedOption, handleSelectChange] = useState('');

  const menu = useLoaderData();

  return (
    <>
      <div className="mt-10">
        <span className="m-auto flex justify-between gap-4 px-5">
          <span className="w-52">
            <h2 className="text-right font-pacifico text-4xl text-orange-500">
              Discover
            </h2>
            <h3 className="text-right text-5xl ">Our Menu</h3>
          </span>
          <span className=" ml-6 mt-2 max-w-xl indent-0 text-sm text-zinc-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            temporibus harum delectus voluptatem labore incidunt velit voluptate
            eos dolor rerum. Quaerat exercitationem alias aspernatur facere
            culpa quas, odio animi dolorem.
          </span>
        </span>
        <span className=" ml-96 flex w-[80%] justify-end p-4">
          <Sort
            menu={menu}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
          />
        </span>
        <ul>
          {/* {menu.map((pizza, index) => (
          <MenuItem pizza={pizza} key={pizza.id} query={query} index={index} />
        ))} */}

          <MenuItem
            menu={menu}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
            query={query}
          />
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
