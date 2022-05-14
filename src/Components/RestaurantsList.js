import "./Content.css";
import restaurants from "../TestData.json";
import RestaurantCard from "./RestaurantCard.js";


const RestaurantsList = (props) => {
    console.log(props.props);
    return (
    <div className="SearchList">
    { props.props && props.props.map((restaurant, index) => <RestaurantCard key={restaurant._id} props={restaurant} rank={index}/>)}
       
    </div>
        )
    }
    export default RestaurantsList