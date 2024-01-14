import {CDN_URL} from "../utils/constants";

const RestraurantCard = (props) => {
    const {resData} = props;
    return (
    <div className="restaurant-tile p-2 w-[220px] hover:shadow-2xl">
        <img className="restaurant-thumbnail w-[200px] h-[160px] rounded-lg object-cover" src={CDN_URL + resData.info.cloudinaryImageId}/>
        <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
        <span>{resData.info.avgRating}</span>
        <h5>{resData.info.cuisines.join(", ")}</h5>
    </div>
);
};

export const withOfferRestaurant = (RestraurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute text-xs bg-black mt-2 p-1 ml-[-102px] text-white rounded-lg">Open</label>
                <RestraurantCard {...props}/>
            </div>
        );
    };
}

export default RestraurantCard;