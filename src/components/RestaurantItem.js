import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RES_MENU_SUB_IMG } from "../utils/constants";

const RestaurantItem = ({ resItems }) => {

    const dispach = useDispatch();

    const handleAddItems = (props) => {
        // Dispach an action
        dispach(addItem(props));
    };

    return (
        <li className="mt-4 flex items-start justify-between border-b border-gray-200 py-4">
            <div className="w-[70%]">
                <div className="mb-2 flex h-4 w-4 items-center justify-center rounded-sm border-2 border-green-600">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>

                <h3 className="text-xl font-bold">
                    {resItems?.name}
                </h3>

                <h3 className="my-2 text-lg font-semibold">
                    ₹{(resItems?.defaultPrice || resItems?.price) / 100}
                </h3>

                {
                    resItems?.ratings?.aggregatedRating?.rating &&
                    <p className="my-2 font-semibold text-green-700">
                        ⭐ {resItems?.ratings?.aggregatedRating?.rating}
                        <span className="text-gray-600">
                            ({resItems?.ratings?.aggregatedRating?.ratingCountV2})
                        </span>
                    </p>
                }

                <p className="mt-3 line-clamp-2 leading-6 text-gray-600">
                    {resItems?.description}
                </p>
            </div>

            <div className="relative w-44 text-center">
                <img
                    className="h-36 w-40 rounded-2xl object-cover"
                    src={RES_MENU_SUB_IMG + resItems?.imageId}
                    alt={resItems?.name}
                />

                <button
                    className="absolute left-1/2 top-[120px] h-10 w-28 -translate-x-1/2 cursor-pointer rounded-lg border border-gray-300 bg-white text-xl font-bold text-green-600 shadow-md"
                    onClick={() => handleAddItems(resItems)}
                >
                    ADD
                </button>
            </div>
        </li>
    );
}

export default RestaurantItem;
