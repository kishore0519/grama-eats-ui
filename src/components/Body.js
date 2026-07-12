import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./common/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43083&lng=78.3349506&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();

      // Optional Chaining
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (err) {
      console.log(err);
    }
  };

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
              <RestaurantCard
                key={restaurantData?.info?.id}
                resData={restaurantData}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
