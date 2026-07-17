import RestaurantItem from "./RestaurantItem";

const RestaurantInfo = ({ resInfo }) => {

    return (
        <div className="mt-4 px-4">
            <h3 className="mb-4 text-xl font-extrabold text-gray-900">
                {resInfo?.card?.card?.title} ({resInfo?.card?.card?.itemCards.length})
            </h3>

            <div className="space-y-4">
                {resInfo?.card?.card?.itemCards.map((itemCard) => (
                    <RestaurantItem
                        key={itemCard?.card?.info?.id}
                        resItems={itemCard?.card?.info}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantInfo;
