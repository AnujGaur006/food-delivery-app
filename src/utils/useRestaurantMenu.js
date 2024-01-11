import { MENU_FETCH_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)
    
    useEffect(() => {fetchMenu()}, []);

    const fetchMenu = async () => {
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" + resId + "&catalog_qa=undefined");
        const menuDataJson = await menuData.json();

        setResInfo(menuDataJson);
    }
    return resInfo;
}

export default useRestaurantMenu;