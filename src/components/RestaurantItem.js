import { RES_MENU_SUB_IMG } from "../utils/constants";

const RestaurantItem = ({ resItems }) => {

    return (
        <li className="res-item-container">
            <div className="item-left">
                <div className="veg-icon">
                    <div className="veg-dot"></div>
                </div>

                <h3>{resItems?.name}</h3>

                <p className="price">
                    ₹{(resItems?.defaultPrice || resItems?.price) / 100}
                </p>

                <p className="rating">
                    ⭐ {resItems?.ratings?.aggregatedRating?.rating}
                    <span>
                        ({resItems?.ratings?.aggregatedRating?.ratingCountV2})
                    </span>
                </p>

                <p className="description">
                    {resItems?.description}
                </p>
            </div>

            <div className="item-right">
                <img
                    className="item-image"
                    src={RES_MENU_SUB_IMG + resItems?.imageId}
                    alt={resItems?.name}
                />

                <button className="add-btn">ADD</button>
            </div>
        </li >
    );
}

export default RestaurantItem;
