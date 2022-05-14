import restaurants from "../TestData.json";
import './Restaurant.css';

const Restaurant = () => {
    // console.log(restaurants);
        // <div className='restaurantContainer'>
         /* <div className="restaurantInformation">
                <div className="restaurantDescription">
                    <h2>Here shoul be a name of a restaurant{props.props.name}</h2>
                    <p className="">{props.props.categories}</p>
                    <p className="">{props.props.price_category}</p>
                    <p className="">{props.props.star_rating}</p>
                    <p className="">{props.props.description}</p>
                </div>
                <div className='Img'></div>
            </div>
            <div className="restaurantLocation">
                <div className="restaurantMap"></div>
                <div className="restaurantLocationInfo">
                    <div className="hoursContainer">
                        <ul>
                            <li>Monday: {props.props.hours.Monday}</li>
                            <li>Tuesday: {props.props.hours.Tuesday}</li>
                            <li>Wednesday: {props.props.hours.Wednesday}</li>
                            <li>Tuesday: {props.props.hours.Tuesday}</li>
                            <li>Friday: {props.props.hours.Friday}</li>
                            <li>Saturday: {props.props.hours.Saturday}</li>
                            <li>Sunday: {props.props.hours.Sunday}</li>
                        </ul>
                    </div>
                    <p>{props.props.address}</p>
                    <p>{props.props.city}</p>
                    <br />
                    <p>{props.props.phone}</p>
                    <p>{props.props.email}</p>

                </div>
            </div>
            <div className="Reviews"></div> */
        // </div>

        return (
    <div className='restaurantContainer'>
        <div className="restaurantInformation">
                <div className="restaurantDescription">
                    <h3>{restaurants[0].name}</h3>
                    <p className="">Cuisine:{restaurants[0].categories}</p>
                    <p className="">Price category: {restaurants[0].price_category}</p>
                    <p className="">Rating: {restaurants[0].star_rating}</p>
                    <p className="">{restaurants[0].description}</p>
                </div>
                <div className='Img'><img src={restaurants[0].imgUrl} alt="restaurant map"/></div>
            </div>
            <div className="restaurantLocation">
                <div className="restaurantMap"> Here Should be a map</div>
                <div className="restaurantLocationInfo">
                    <div className="hoursContainer">
                        <ul>
                            <li>Monday: {restaurants[0].hours.Monday}</li>
                            <li>Tuesday:{restaurants[0].hours.Tuesday} </li>
                            <li>Wednesday:{restaurants[0].hours.Wednesday}</li>
                            <li>Tuesday:{restaurants[0].hours.Tuesday}</li>
                            <li>Friday: {restaurants[0].hours.Friday}</li>
                            <li>Saturday:{restaurants[0].hours.Saturday}</li>
                            <li>Sunday:{restaurants[0].hours.Sunday} </li>
                        </ul>
                    </div>
                    <div className="ContactInfo">
                        <p>{restaurants[0].address}</p>
                        <p>{restaurants[0].city}</p>
                        <p>{restaurants[0].phone}</p>
                        <p>{restaurants[0].email}</p>
                    </div>
                    

                </div>
            </div>
            <div className="Reviews">
                <h2> No reviews yet</h2>
            </div>
        </div>)

}

export default Restaurant;