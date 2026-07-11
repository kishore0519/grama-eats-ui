import { resData } from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  const { restaurants } = resData;
  console.log(restaurants);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div>
        <RestaurantCards restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Body;
