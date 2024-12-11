 import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import shimmer from "./shimmer";

const Body = () => {

  const [ListofRestaurants, setListOfRestaurnt] = useState( resList );

  const [searchText, setsearchText] = useState("");

  

 
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button onClick={()=>{
              //filter the res cards update UI
             const filteredRestaurant = ListofRestaurants.filter(
              (res)= res.data.name.toLowerCase().include(searchText.toLowerCase()) );
              setListOfRestaurnt(filteredRestaurant);
            }}>search</button>
          </div>
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