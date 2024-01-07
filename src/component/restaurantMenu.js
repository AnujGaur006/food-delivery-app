import { useState,useEffect } from "react";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import Shimmer from "./shimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const { resId } = useParams();

    useEffect(() => {fetchMenu()}, []);

    const fetchMenu = async () => {
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" + resId + "&catalog_qa=undefined");
        const menuDataJson = await menuData.json();

        setRestaurantMenu(menuDataJson);
    }

    if (restaurantMenu === null) return <Shimmer/>;
    
    const {name, cuisines, locality, sla, avgRating, totalRatingsString} = restaurantMenu?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards); 
   

    return (<div className="menu">
        <div id='restaurantDetails'>
            <div className="resInfo">
                <div className='resName'>{name}</div>
                <div className="resSubInfo">{cuisines.join(", ")}</div>
                <div className="resSubInfo">{locality},&nbsp;{sla.lastMileTravelString}</div>
            </div>
            <div className="resRating">
                <div className="resStarRating">&#9733;{avgRating}</div>
                <div className="resCustReviews">{totalRatingsString}</div>
            </div>
        </div>
        <div className='menu-items'>
        {   
           itemCards.map((item) => ( 
                <div key={item.card.info.id} className="menuTab">
                    <div className="menuInfo">
                        <div>isVeg :  {item.card.info.isVeg}</div>
                        <div>{item.card.info.name}</div>
                        <div>&#8377;{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                    </div>
                    <div>
                        <img className="dish-icon" src={MENU_ITEM_IMAGE + item.card.info.imageId}/>
                    </div>
                </div>            
            ))
        }
        </div>
    </div>
)}

export default RestaurantMenu;