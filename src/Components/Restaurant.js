import restaurants from "../TestData.json";
import "./Restaurant.css";
import { useParams } from "react-router-dom";
import GoBack from "./GoBack";

const Restaurant = ({ info }) => {
  //   console.log(info);
  const { restaurantId } = useParams();
  const targetedRestaurant = info.find((restaurant) => {
    return restaurant._id === restaurantId;
  });

  if (!targetedRestaurant) {
    return <p>No restaurant found</p>;
  }
  return (
    <div className="restaurantContainer">
      <div className="restaurantInformation">
        <div className="restaurantDescription">
          <h1>{targetedRestaurant.name}</h1>
          <p className="restaurantDetails">Cuisine:{targetedRestaurant.categories}</p>
          <p className="restaurantDetails">
            Price category: {targetedRestaurant.price_category}
          </p>
          <p className="restaurantDetails">Rating: {targetedRestaurant.star_rating}</p>
          <p className="">{targetedRestaurant.description}</p>
        </div>

        <div className="Img">
          <img src={targetedRestaurant.imgUrl} alt="restaurant map" />
        </div>
      </div>
      <div className="restaurantLocation">
        <div className="restaurantMap">
          <p>Here Should be a map</p>
        </div>
        <div className="restaurantLocationInfo">
          <div className="hoursContainer">
            <ul>
              <li>Monday: {targetedRestaurant.hours.Monday}</li>
              <li>Tuesday:{targetedRestaurant.hours.Tuesday} </li>
              <li>Wednesday:{targetedRestaurant.hours.Wednesday}</li>
              <li>Tuesday:{targetedRestaurant.hours.Tuesday}</li>
              <li>Friday: {targetedRestaurant.hours.Friday}</li>
              <li>Saturday:{targetedRestaurant.hours.Saturday}</li>
              <li>Sunday:{targetedRestaurant.hours.Sunday} </li>
            </ul>
          </div>
          <div className="ContactInfo">
            <p>{targetedRestaurant.address}</p>
            <p>{targetedRestaurant.city}</p>
            <p>{targetedRestaurant.phone}</p>
            <p>{targetedRestaurant.email}</p>
          </div>
        </div>
      </div>
      
      <div>
        <GoBack />
      </div>
      <hr />
      <div className="Reviews">
        <h2> No reviews yet</h2>
      </div>
    </div>
  );
};

export default Restaurant;
