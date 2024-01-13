import { useState,useEffect } from "react";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import Shimmer from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [restaurantMenu, setRestaurantMenu] = useState(null);
    const { resId } = useParams();

    const restaurantMenu = useRestaurantMenu(resId);

    if (restaurantMenu === null) return <Shimmer/>;
    
    const {name, cuisines, locality, sla, avgRating, totalRatingsString} = restaurantMenu?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards); 
   
    return (<div className="menu w-[40%] mx-auto mt-12">
        <div id='restaurantDetails' className="flex justify-between flex-row items-center">
            <div className="resInfo">
                <div className='resName text-2xl font-semibold'>{name}</div>
                <div className="resSubInfo text-base">{cuisines.join(", ")}</div>
                <div className="resSubInfo text-base">{locality},&nbsp;{sla.lastMileTravelString}</div>
            </div>
            <div className="resRating text-2xl font-semibold text-green-500">
                <div className="resStarRating text-base ">&#9733;{avgRating}</div>
                <div className="resCustReviews text-base">{totalRatingsString}</div>
            </div>
        </div>
        <div className='menu-items mt-50 flex flex-col justify-between'>
        {   
           itemCards.map((item) => ( 
                <div key={item.card.info.id} className="menuTab flex flex-row justify-between border-2 border-dashed border-black p-2">
                    <div className="menuInfo p-4">
                        <div>isVeg :  {item.card.info.isVeg}</div>
                        <div>{item.card.info.name}</div>
                        <div>&#8377;{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                    </div>
                    <div>
                        <img className="dish-icon max-w-40 max-h-25 rounded-lg" src={MENU_ITEM_IMAGE + item.card.info.imageId}/>
                    </div>
                </div>            
            ))
        }
        </div>
    </div>
)}

export default RestaurantMenu;