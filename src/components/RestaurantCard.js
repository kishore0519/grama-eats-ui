import { RES_CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-2xl bg-white transition-transform duration-200 hover:scale-95 hover:shadow-xl">
      <div>
        <img
          className="h-44 w-full object-cover"
          alt="restaurant logo"
          src={RES_CARD_IMG_URL + resData?.info?.cloudinaryImageId}
        />
      </div>

      <div className="p-3">
        <h3 className="text-xl font-bold">
          {resData?.info?.name}
        </h3>

        <p className="my-1 text-base font-semibold text-gray-900">
          <span className="text-green-600">⭐</span>
          {" "}
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
