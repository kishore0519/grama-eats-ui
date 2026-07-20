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
    <div className="flex justify-center bg-gray-100 px-5 py-4">
      <div className="w-[910px]">

        <h1 className="pb-2 pl-5 text-3xl font-bold text-gray-900">
          {name}
        </h1>

        <img
          className="h-[360px] w-full rounded-3xl object-cover"
          src={RES_MENU_MAIN_IMG + cloudinaryImageId}
          alt={name}
        />

        <div className="mt-2 rounded-2xl border-b border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
            <span>⭐</span>

            <strong>{avgRating}</strong>

            <span>({totalRatingsString})</span>

            <span className="text-gray-400">•</span>

            <strong>{costForTwoMessage}</strong>
          </div>

          <p className="mt-3 font-semibold text-orange-500">
            {cuisines.join(", ")}
          </p>

          <p className="mt-2 text-gray-500">
            {areaName}, {city}
          </p>
        </div>

        <div className="mt-6">
          {
            itemsInfo.map((itemCategory) => {
              return <RestaurantInfo key={itemCategory?.card?.card?.categoryId} resInfo={itemCategory} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
