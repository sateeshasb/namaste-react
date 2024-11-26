import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.CreateElement => ReactElement (JavaScript object) => HTMLElement (Render)

/* 
* Header
* - Logo
* - Nav Items
* Body
* - Restaurant Container
*  - Restaurant Card
*    - Image
*    - Rating, name, etc.
* - Search
* Footer
* - Copyright
* - Address
* - Contact
*/

const Header = () => {
  return(
    <div className="header">
    <div className="logo-container">
    <img
    className="logo"
    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
    alt="App Logo"
    />
     </div>
       <div className="nav-item">
        <ul>
        <li>home</li>
        <li>about</li>
        <li>Contact</li>
        <li>sugest</li>
        </ul>
       </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props; // Extracting the resData from props
  const { info } = resData; // Extracting the info object from resData

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={info.name} // Proper alt text for the image
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.info.cloudinaryImageId // Correctly accessing cloudinaryImageId
        }
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating} stars</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{info.sla.deliveryTime} Min</h4>
    </div>
  );
};



const resList= [
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      sla: {
        deliveryTime: 45,
        lastMileTravel: 11.2,
      },
    },
  },
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 10.7,
      },
    },
  },
  {
    "info": {
      "id": "151649",
      "name": "Hotel Sai Nath & Sai Restaurant",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "101802",
      "avgRatingString": "4.3",
      "totalRatingsString": "912",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 10.3,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "10.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-24 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f9e42b6-0c0e-4f93-8584-2f7642f20aa1"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "150591",
      "name": "Satkar Restaurant",
      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
      "locality": "Sinchai Colony",
      "areaName": "Satkar Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "21553",
      "avgRatingString": "4.3",
      "totalRatingsString": "2.2K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 12.1,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "12.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-24 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f9e42b6-0c0e-4f93-8584-2f7642f20aa1"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
      "type": "WEBLINK"
    }
  },
];

// not using keys in react (not recomnded)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id || index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
      <Body />
    </div>
  )
};




 
 
 
// Rendering the Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

 