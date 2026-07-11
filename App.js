import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./utils/mockData";
import { imgRootUrl } from "./utils/constant";

/**
 * Grama Eats app design planning and development.
 *
 * Header
 *  - Logo
 *  - Nav Items
 *   - Home
 *   - About
 *   - Contact
 *   - Cart
 *   - Signin / Signout
 * Body
 *  - Search / Search Bar
 *  - Restaurant Container
 *   - Restaurant Card
 * Footer
 *  - Copyright(c)
 *  - Links
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="app-logo"
          src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          alt="restaurant logo"
          src={imgRootUrl + resData?.info?.cloudinaryImageId}
        />
      </div>
      <div className="res-details">
        <h3>{resData?.info?.name}</h3>

        <p className="rating">
          <span className="star">⭐</span> {resData?.info?.avgRating} •{" "}
          {resData?.info?.sla?.slaString}
        </p>

        <p className="res-cuisines">{resData?.info?.cuisines?.join(", ")}</p>

        <p>{resData?.info?.costForTwo}</p>
      </div>
    </div>
  );
};

const { restaurants } = resData;

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div className="res-container">
        <RestaurantCard resData={restaurants[0]} />
        <RestaurantCard resData={restaurants[1]} />
        <RestaurantCard resData={restaurants[2]} />
        <RestaurantCard resData={restaurants[3]} />
        <RestaurantCard resData={restaurants[4]} />
        <RestaurantCard resData={restaurants[5]} />
        <RestaurantCard resData={restaurants[6]} />
        <RestaurantCard resData={restaurants[7]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
