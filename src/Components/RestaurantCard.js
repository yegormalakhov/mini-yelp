import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const priceRange = props.props.price_category;
  let priceRating = "";
  if (priceRange === 5) {
    priceRating = "€€€€€";
  } else if (priceRange === 4) {
    priceRating = "€€€€";
  } else if (priceRange === 3) {
    priceRating = "€€€";
  } else if (priceRange === 2) {
    priceRating = "€€";
  } else {
    priceRating = "€";
  }

  return (
    <div className="restaurant-card">
      <img
        src={props.props.imgUrl}
        alt="restaurant"
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h2>
          {props.rank + 1}. {props.props.name}
        </h2>
        <div className="rating-container">
          <p className={props.props.star_rating > 0 ? "rated" : "notrated"}>
            ★
          </p>
          <p className={props.props.star_rating > 1 ? "rated" : "notrated"}>
            ★
          </p>
          <p className={props.props.star_rating > 2 ? "rated" : "notrated"}>
            ★
          </p>
          <p className={props.props.star_rating > 3 ? "rated" : "notrated"}>
            ★
          </p>
          <p className={props.props.star_rating > 4 ? "rated" : "notrated"}>
            ★
          </p>
        </div>
        <div className="description-container">
          <p className="categories">{props.props.categories}</p>
          <p className="price">{priceRating}</p>
          <p>{props.props.city}</p>
        </div>
        <p>{props.props.description}</p>
      </div>
    </div>
    //</Link>
  );
};

export default RestaurantCard;
