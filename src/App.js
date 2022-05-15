import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Filters from "./Components/Filters";
import Restaurant from "./Components/Restaurant";
import RestaurantsList from "./Components/RestaurantsList";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [priceCategory, setPriceCategory] = useState();
  const [ratingCategory, setRatingCategory] = useState();
  const [wordQuery, setWordQuery] = useState("");
  const [restaurants, setRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState();

  const handlePriceFilter = (event) => {
    const price = event.target.innerText.length;
    setPriceCategory(price);
  };

  const handleRatingFilter = (event) => {
    const rating = event.target.innerText;
    setRatingCategory(rating);
  };

  const handleSearchWord = (word) => {
    setWordQuery(word);
  };

  useEffect(() => {
    fetch("https://miniyelpback.herokuapp.com/restaurants/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `An error has occured while fetching the data. Status code: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (priceCategory) {
      const targetedCategory = restaurants.filter(
        (restaurant) => restaurant.price_category === priceCategory
      );
      setFilteredRestaurants(targetedCategory);
    }
    // if(ratingCategory){
    //   const targetedCategory = restaurants.filter((restaurant)=> restaurant.star_rating === ratingCategory);
    //   setRestaurants(targetedCategory);
    // }
  }, [priceCategory, ratingCategory, wordQuery]);

  if (!restaurants) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Header />
      <div className="Content">
        <Filters
          onPriceClick={handlePriceFilter}
          onRatingClick={handleRatingFilter}
        />
        <Routes>
          <Route
            path="/"
            element={
              <RestaurantsList
                props={filteredRestaurants ? filteredRestaurants : restaurants}
                searchWord={handleSearchWord}
              />
            }
          />
          <Route
            path="/:restaurantId"
            element={<Restaurant info={restaurants} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
