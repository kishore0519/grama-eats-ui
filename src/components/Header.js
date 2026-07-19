import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-sm">
      <div>
        <Link to="/">
          <img
            className="pl-16 w-52 h-20 object-contain"
            alt="app-logo"
            src={LOGO_URL}
          /></Link>
      </div>
      <div className="mr-10 flex items-center">
        <ul className="flex items-center gap-7">
          <li>
            <Link
              className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors"
              to="/"
            >Home</Link>
          </li>
          <li>
            <Link
              className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors"
              to="/grocery"
            >Grocery</Link>
          </li>
          <li>
            <Link
              className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors"
              to="/about"
            >About</Link>
          </li>
          <li>
            <Link
              className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors"
              to="/contact"
            >Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="rounded-full bg-gray-300 px-4 py-2 text-lg font-bold hover:bg-gray-400"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
