import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantInfo = ({ resInfo }) => {

    const [showItems, setShowItems] = useState(true);

    return (
        <div className="mt-4 px-2 sm:px-4">
            <div
                onClick={() => setShowItems(!showItems)}
                className="mb-4 flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-gray-100"
            >
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {resInfo?.card?.card?.title} (
                    {resInfo?.card?.card?.itemCards.length})
                </h3>

                <span className="pr-2 text-xl font-bold sm:pr-6">
                    {showItems ? "⌃" : "⌄"}
                </span>
            </div>

            {showItems && (
                <div className="space-y-4">
                    {resInfo?.card?.card?.itemCards.map((itemCard) => (
                        <RestaurantItem
                            key={itemCard?.card?.info?.id}
                            resItems={itemCard?.card?.info}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RestaurantInfo;
