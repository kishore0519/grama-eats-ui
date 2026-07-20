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
        <li className="mt-4 flex flex-col justify-between border-b border-gray-200 py-4 sm:flex-row sm:items-start">
            <div className="w-full sm:w-[70%]">
                <div className="mb-2 flex h-4 w-4 items-center justify-center rounded-sm border-2 border-green-600">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>

                <h3 className="text-lg font-bold sm:text-xl">
                    {resItems?.name}
                </h3>

                <h3 className="my-2 text-base font-semibold sm:text-lg">
                    ₹{(resItems?.defaultPrice || resItems?.price) / 100}
                </h3>

                {resItems?.ratings?.aggregatedRating?.rating && (
                    <p className="my-2 text-sm font-semibold text-green-700 sm:text-base">
                        ⭐ {resItems?.ratings?.aggregatedRating?.rating}
                        <span className="text-gray-600">
                            ({resItems?.ratings?.aggregatedRating?.ratingCountV2})
                        </span>
                    </p>
                )}

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 sm:text-base">
                    {resItems?.description}
                </p>
            </div>

            <div className="relative mt-4 flex w-full justify-center sm:mt-0 sm:w-44">
                <img
                    className="h-40 w-full max-w-40 rounded-2xl object-cover sm:h-36 sm:w-40"
                    src={RES_MENU_SUB_IMG + resItems?.imageId}
                    alt={resItems?.name}
                />

                <button
                    className="absolute bottom-[-12px] left-1/2 h-10 w-28 -translate-x-1/2 cursor-pointer rounded-lg border border-gray-300 bg-white text-lg font-bold text-green-600 shadow-md transition hover:bg-gray-50"
                    onClick={() => handleAddItems(resItems)}
                >
                    ADD
                </button>
            </div>
        </li>
    );
}

export default RestaurantItem;
