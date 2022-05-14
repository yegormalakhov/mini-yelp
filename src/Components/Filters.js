import "./Content.css";

const Filters = () => {
    return (<div className="FiltersContainer">
            
            <div className="PriceFilter">
            <h3>Filter price</h3>
                <button><span>€</span></button>
                <button><span>€€</span></button>
                <button><span>€€€</span></button>
                <button><span>€€€€</span></button>
            </div>
            <div className='RatingFilter'>
            <h3>Filter rating</h3>
                <button><span>1</span></button>
                <button><span>2</span></button>
                <button><span>3</span></button>
                <button><span>4</span></button></div>
            <div></div>
        </div>)
    }
    export default Filters