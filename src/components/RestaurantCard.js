import { RES_CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          alt="restaurant logo"
          src={RES_CARD_IMG_URL + resData?.info?.cloudinaryImageId}
        />
      </div>
      <div className="res-details">
        <h3>{resData?.info?.name}</h3>

        <p className="rating">
          <span className="star">⭐</span> {resData?.info?.avgRating} •{" "}
          {resData?.info?.sla?.slaString}
        </p>

        <p className="res-cuisines">{resData?.info?.cuisines?.join(", ")}</p>

        <p>{resData?.info?.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
