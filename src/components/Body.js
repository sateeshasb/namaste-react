 import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [ListofRestaurants, setListOfRestaurnt] = useState( resList );
 

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
           onClick={() => {
             const filteredList = ListofRestaurants.filter(
               (res) => res.info.avgRating > 4
               );  
               setListOfRestaurnt(filteredList); 
               }} 
              >
             Top Ratted Restaurant
              </button>
          </div>

          <div className="res-container">
          {/* Render a RestaurantCard for each restaurant in resobj */}
          {ListofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;