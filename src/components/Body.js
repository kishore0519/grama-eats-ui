import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./common/Shimmer";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const resList = useRestaurantList();

  useEffect(() => {
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check your internet status...</h1>
  }

  // Conditional Redenring
  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  const searchRestaurants = () => {
    if (searchText === 1) return;

    setFilteredRestaurants(
      listOfRestaurants.filter((restaurants) => {
        return restaurants?.info?.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }),
    );
  };

  return (
    <div className="body">
      <div className="filter-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (restaurant) => restaurant?.info?.avgRating > 4,
                ),
              );
            }}
          >
            <span>🔍</span>Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={() => searchRestaurants()}>
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants &&
          filteredRestaurants?.map((restaurantData) => {
            return (
              <Link to={"/restaurant/" + restaurantData?.info?.id} key={restaurantData?.info?.id}>
                <RestaurantCard
                  key={restaurantData?.info?.id}
                  resData={restaurantData}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
