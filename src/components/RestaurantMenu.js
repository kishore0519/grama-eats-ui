import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_MAIN_IMG, RESTAURANT_API } from "../utils/constants";
import resData from "../mockdata/RestaurantData";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { id, name, avgRating, totalRatingsString, areaName, city, cloudinaryImageId, costForTwoMessage, cuisines } = resData?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="res-menu">
      <div className="res-menu-container">
        <h1 className="res-name">{name}</h1>

        <img
          className="res-menu-img"
          src={RES_MENU_MAIN_IMG + cloudinaryImageId}
          alt={name}
        />

        <div className="res-menu-info">
          <div className="rating-row">
            ⭐ <strong>{avgRating}</strong>
            <span>({totalRatingsString})</span>
            <span className="dot">•</span>
            <strong>{costForTwoMessage}</strong>
          </div>

          <p className="cuisines">{cuisines.join(", ")}</p>

          <p className="location">
            {areaName}, {city}
          </p>
        </div>

        <div>
          <RestaurantInfo resInfo={resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]}/>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
