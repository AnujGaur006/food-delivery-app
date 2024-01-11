import RestraurantCard from "./restaurantCard";
import { useState } from "react";
import { useEffect} from "react";
import restaurantObj from "../utils/mockdata.js";
import Shimmer from "./shimmerUI.js";
import { Link } from "react-router-dom";
import useOnlineFeature from "../utils/useOnlineFeature.js";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {fetchRestaurants()}, []);
    
    // ideally we would want to fetch data from api
    const fetchRestaurants = async () => {
        const resList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await resList.json();
        // console.log(data); 

        setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const [searchText, setSearchText] = useState("");

    // every search input, for each character, dom structure is rerendered, as searchText value changes]
    // console.log("test");
    
    // conditional rendering 

    if(useOnlineFeature() === false)
        return <h1 className="offline">Please check your internet connection!!</h1> 

    return restaurantList.length === 0 ? <Shimmer/> :  (
    <div className="container">
        <div className="search">
            <input type="text" id='search-bar' value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-res" type="submit" onClick={
                () => {
                    const resList = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(resList);       
                }
            }>Search</button>
            <button className="topRes" onClick=
            {
                () => {
                    let resList = restaurantList.filter( (restaurant) => restaurant.info.avgRating >= 4.4);
                    setFilteredRestaurant(resList);  
                }
            }>Top Restaurants</button>
        </div>
        <div className="restaurant-tiles">
            {
                filteredRestaurant.map(restaurant => <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestraurantCard resData={restaurant}/></Link>)
            }
        </div>
    </div>
);
};
export default Body;