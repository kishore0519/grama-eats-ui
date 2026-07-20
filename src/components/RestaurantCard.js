import { RES_CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-2xl bg-white transition-transform duration-200 hover:scale-95 hover:shadow-xl">
      <div className="relative">
        <img
          className="h-48 w-full object-cover sm:h-52 lg:h-44"
          src={RES_CARD_IMG_URL + resData?.info?.cloudinaryImageId}
          alt="restaurant logo"
        />

        <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black via-black/50 to-transparent p-2">
          <p className="text-base font-extrabold text-white sm:text-lg">
            {resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="truncate text-lg font-bold sm:text-xl">
          {resData?.info?.name}
        </h3>

        <p className="my-1 text-sm font-semibold text-gray-900 sm:text-base">
          <span className="text-green-600">⭐</span>{" "}
          {resData?.info?.avgRating} • {resData?.info?.sla?.slaString}
        </p>

        <p className="truncate text-sm text-gray-600">
          {resData?.info?.cuisines?.join(", ")}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          {resData?.info?.costForTwo}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
