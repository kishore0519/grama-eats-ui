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
    <div className="bg-gray-50 min-h-screen">
      {/* Filter Section */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-16 py-6">
        <button
          className="rounded-lg border border-gray-300 bg-white px-5 py-2 font-semibold shadow-sm transition hover:bg-orange-500 hover:text-white"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              )
            );
          }}
        >
          🔍 Top Rated Restaurants
        </button>

        <div className="flex items-center gap-3">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
            className="w-72 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

          <button
            onClick={searchRestaurants}
            className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-16 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurants?.map((restaurantData) => (
          <Link
            key={restaurantData?.info?.id}
            to={"/restaurant/" + restaurantData?.info?.id}
            className="no-underline"
          >
            <RestaurantCard resData={restaurantData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
