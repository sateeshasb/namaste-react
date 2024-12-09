 import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+info.cloudinaryImageId}
        />
        <h3>{info.name}</h3>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.costForTwo}</h4>
        <h4>{info.avgRating} stars</h4>
      </div>
    );
  };
  export default RestaurantCard;