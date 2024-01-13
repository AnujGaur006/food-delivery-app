import { useState,useEffect } from "react";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import Shimmer from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./restaurantCategories";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantMenu = () => {
    // const [restaurantMenu, setRestaurantMenu] = useState(null);
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);

    const restaurantMenu = useRestaurantMenu(resId);

    // react context
    const {loggedInUser} = useContext(UserContext);
    console.log("User : " + loggedInUser);

    if (restaurantMenu === null) return <Shimmer/>;
    
    const {name, cuisines, locality, sla, avgRating, totalRatingsString} = restaurantMenu?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // filter cards with ItemCategory
    const categories = restaurantMenu?.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.
                                filter((card) => 
                                card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
    // console.log(categories);                        
   
    return (<div className="menu w-[55%] mx-auto mt-12">
        <div id='restaurantDetails'>
            <div className='resName text-2xl font-bold'>{name}</div>
            <div className="flex justify-between">
                <div className="text-xs">
                    <div className="resSubInfo text-base">{cuisines.join(", ")}</div>
                    <div className="resSubInfo text-base">{locality},&nbsp;{sla.lastMileTravelString}</div>
                </div>
                <div className="resRating text-2xl font-bold border-4 pr-2 text-green-500">
                    <div className="resStarRating text-base ">&#9733;{" "}{avgRating}</div>
                    <div className="resCustReviews text-base">{totalRatingsString}</div>
                </div>
            </div>
        </div>
        <div>
        {   
           categories.map((item ,index) => <RestaurantCategories 
                                            key={item.card.card.title} 
                                            data={item}
                                            showItem={index===showIndex ? true : false}
                                            setShowIndex={() => setShowIndex(index)}/>)
        }
        </div>
    </div>
)}

export default RestaurantMenu;