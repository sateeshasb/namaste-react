 import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import shimmer from "./shimmer";

const Body = () => {

  const [ListofRestaurants, setListOfRestaurnt] = useState([]);
  const [filteredRestaurant,setfilteredRestaurnt] = useState([]);


  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
},[]);

const fetchData = async () => { 
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.216018&lng=77.3565608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  console.log(json);
  setListOfRestaurnt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurnt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


 
    return ListofRestaurants.length == 0 ?(
      <shimmer/>
    ): (
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
              (res)= res.info.name.toLowerCase().include(searchText.toLowerCase()) );
              setfilteredRestaurnt(filteredRestaurant);
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
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;