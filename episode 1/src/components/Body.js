import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [List, setList] = useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterList = List.filter((res) => {
            // console.log(res?.info?.avgRating);
            return res?.info?.avgRating > 4.4
          });
          setList(filterList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* restaurant Cards */}
        {
          List.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
          )}
      </div>

    </div>
  )
}

export default Body;