import {CDN_URL} from "../utils/constants";

const RestraurantCard = (props) => {
    const {resData} = props;
    return (
    <div className="restaurant-tile">
        <img className="restaurant-thumbnail" src={CDN_URL + resData.info.cloudinaryImageId}/>
        <h4>{resData.info.name}</h4>
        <span>{resData.info.avgRating}</span>
        <h5>{resData.info.cuisines.join(", ")}</h5>
    </div>
);
};

export default RestraurantCard;