import { useState } from "react";
import MenuList from "./menuList";

const RestaurantCategories = ({data, showItem, setShowIndex}) => {
    const {title} = data?.card?.card;
    const items = data?.card?.card?.itemCards;
    
    return (
        <div className="menuTab p-2 shadow-lg">
           <div className="font-medium flex justify-between p-2 m-2" 
                onClick={()=> setShowIndex()}>
                <div>{title}&nbsp;({items.length})</div>
                <span>🔽</span>
           </div>
            {showItem && items.map((item) => <MenuList key={item.card.info.name} list={item}/>)}
        </div>      
    );
}

export default RestaurantCategories;