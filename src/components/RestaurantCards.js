import RestaurantCard from "./RestaurantCard";

const RestaurantCards = ({ restaurants }) => {
  return (
    <div className="res-container">
      {restaurants?.map((restaurantData) => {
        return (
          <RestaurantCard
            key={restaurantData?.info?.id}
            resData={restaurantData}
          />
        );
      })}
    </div>
  );
};

export default RestaurantCards;
