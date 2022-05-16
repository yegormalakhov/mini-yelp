import "./Content.css";
import RestaurantCard from "./RestaurantCard.js";
import { Link } from "react-router-dom";

const RestaurantsList = (props) => {
  return (
    <div className="SearchList">
      {props.props &&
        props.props.map((restaurant, index) => (
          <div key={restaurant._id}>
            <Link to={restaurant._id}>
              <RestaurantCard props={restaurant} rank={index} />
            </Link>
          </div>
        ))}
    </div>
  );
};
export default RestaurantsList;
