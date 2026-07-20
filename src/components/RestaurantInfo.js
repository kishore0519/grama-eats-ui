import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantInfo = ({ resInfo }) => {

    const [showItems, setShowItems] = useState(true);

    return (
        <div className="mt-4 px-4">
            <div onClick={() => {
                setShowItems(!showItems);
            }} className="mb-4 flex cursor-pointer items-center justify-between">

                <h3 className="text-xl font-bold text-gray-900">
                    {resInfo?.card?.card?.title} ({resInfo?.card?.card?.itemCards.length})
                </h3>

                <span className="text-xl font-bold pr-6">
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
                </div>)
            }
        </div>
    );
}

export default RestaurantInfo;
