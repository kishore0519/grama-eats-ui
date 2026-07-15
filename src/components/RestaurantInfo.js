import RestaurantItem from "./RestaurantItem";

const RestaurantInfo = ({ resInfo }) => {

    return (
        <div className="menu-section">
            <h3>{resInfo?.card?.card?.title}</h3>

            <div className="menu-items">
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
