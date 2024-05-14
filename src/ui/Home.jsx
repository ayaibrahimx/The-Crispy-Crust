import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="  justify-items-center text-center">
        <img
          src="public/images/12_22_2023 11_24_59 PM.png"
          alt="pizza"
          className="m-auto h-24 w-24"
        />
        <h1 className=" text-center text-3xl uppercase text-orange-500 ">
          Delivering Flavor With Every Order
        </h1>
        <div className="m-auto w-80 text-sm">
          <p className=" text-center  text-zinc-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            provident! Amet, debitis repellat, voluptates sequi rerum blanditiis
            atque eligendi repudiandae laudantium sunt quasi a dolor labore
            maxime? Perferendis, velit voluptatem.
          </p>
          <Link to="/menu">
            <button className="my-3 mt-5 rounded-sm border-2 border-solid border-orange-500 px-2 py-1 text-orange-500">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 grid grid-flow-col grid-cols-3 gap-4">
        <div className="">
          <h2 className=" text-lg font-semibold  text-orange-500">
            Opening Times:
          </h2>

          <p>Mon-Sat-----------------8AM-7PM</p>
          <p>Sunday------------------Closed</p>
        </div>
        <div className="">
          <img src="public/images/pngwing.com.png" alt="pizza" />
        </div>
        <div className="ml-11">
          <h2 className="text-lg font-semibold text-orange-500 ">
            Find us on Social Media
          </h2>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
      </div>
    </>
  );
}

export default Home;
