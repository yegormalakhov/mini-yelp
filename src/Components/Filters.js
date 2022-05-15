import "./Content.css";

const Filters = ({ onPriceClick, onRatingClick }) => {
  return (
    <div className="FiltersContainer">
      <div className="PriceFilter">
        <h3>Filter price</h3>
        <button className="PriceBtn firstBtn" onClick={onPriceClick}>
          <span>€</span>
        </button>
        <button className="PriceBtn" onClick={onPriceClick}>
          <span>€€</span>
        </button>
        <button className="PriceBtn" onClick={onPriceClick}>
          <span>€€€</span>
        </button>
        <button className="PriceBtn" onClick={onPriceClick}>
          <span>€€€€</span>
        </button>
        <button className="PriceBtn lastBtn" onClick={onPriceClick}>
          <span>€€€€€</span>
        </button>
      </div>
      <div className="RatingFilter">
        <h3>Filter rating</h3>
        <button className="RatingBtn firstBtn" onClick={onRatingClick}>
          <span>1</span>
        </button>
        <button className="RatingBtn" onClick={onRatingClick}>
          <span>2</span>
        </button>
        <button className="RatingBtn" onClick={onRatingClick}>
          <span>3</span>
        </button>
        <button className="RatingBtn" onClick={onRatingClick}>
          <span>4</span>
        </button>
        <button className="RatingBtn lastBtn" onClick={onRatingClick}>
          <span>5</span>
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default Filters;
