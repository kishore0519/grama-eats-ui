import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 flex flex-col items-center justify-between bg-white px-4 py-3 shadow-sm md:flex-row md:px-8 lg:px-16">
      <div>
        <Link to="/">
          <img
            className="h-16 w-40 object-contain sm:h-20 sm:w-52"
            alt="app-logo"
            src={LOGO_URL}
          />
        </Link>
      </div>

      <div className="mt-4 md:mt-0">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
          <li>
            <Link
              className="text-base font-semibold text-gray-800 transition-colors hover:text-orange-500 md:text-lg"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-base font-semibold text-gray-800 transition-colors hover:text-orange-500 md:text-lg"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>

          <li>
            <Link
              className="text-base font-semibold text-gray-800 transition-colors hover:text-orange-500 md:text-lg"
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="text-base font-semibold text-gray-800 transition-colors hover:text-orange-500 md:text-lg"
              to="/contact"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              className="text-base font-semibold text-gray-800 transition-colors hover:text-orange-500 md:text-lg"
              to="/cart"
            >
              Cart ({cartItems.length})
            </Link>
          </li>

          <li>
            <button
              className="rounded-full bg-gray-300 px-4 py-2 font-bold transition hover:bg-gray-400"
              onClick={() =>
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
