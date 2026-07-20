import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_MAIN_IMG, RESTAURANT_API } from "../utils/constants";
import resData from "../mockdata/RestaurantData";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantMenu = () => {

  const [itemsInfo, setItemsInfo] = useState([]);
  const { resId } = useParams();

  const { id, name, avgRating, totalRatingsString, areaName, city, cloudinaryImageId, costForTwoMessage, cuisines } = resData?.data?.cards[2]?.card?.card?.info;

  useEffect(() => {
    const itemsCategoryInfo = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    setItemsInfo(itemsCategoryInfo);
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">

        <h1 className="pb-3 text-2xl font-bold text-gray-900 sm:pl-5 sm:text-3xl">
          {name}
        </h1>

        <img
          className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-[360px] lg:rounded-3xl"
          src={RES_MENU_MAIN_IMG + cloudinaryImageId}
          alt={name}
        />

        <div className="mt-3 rounded-2xl border-b border-gray-200 px-4 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-900 sm:text-base">
            <span>⭐</span>

            <strong>{avgRating}</strong>

            <span>({totalRatingsString})</span>

            <span className="text-gray-400">•</span>

            <strong>{costForTwoMessage}</strong>
          </div>

          <p className="mt-3 text-sm font-semibold text-orange-500 sm:text-base">
            {cuisines.join(", ")}
          </p>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            {areaName}, {city}
          </p>
        </div>

        <div className="mt-6">
          {itemsInfo.map((itemCategory) => (
            <RestaurantInfo
              key={itemCategory?.card?.card?.categoryId}
              resInfo={itemCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
