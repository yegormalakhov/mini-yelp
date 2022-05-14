import "./Content.css";
import restaurants from "../TestData.json";
import RestaurantCard from "./RestaurantCard.js";


const RestaurantsList = () => {
    
    return (
    <div className="SearchList">
    { restaurants && restaurants.map((restaurant, index) => <RestaurantCard key={restaurant.id} props={restaurant} rank={index}/>)}
       
    </div>
        )
    }
    export default RestaurantsList