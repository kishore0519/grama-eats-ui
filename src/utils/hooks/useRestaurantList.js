import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../constants";
import resList from "../../mockdata/RestaurantsList";

const useRestaurantList = () => {

    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const data = await fetch(RESTAURANTS_API);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (err) {
            console.log(err);
        }
    };

    return resList;
}

export default useRestaurantList;
