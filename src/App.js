import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Filters from './Components/Filters';
import Restaurant from './Components/Restaurant';
import RestaurantsList from './Components/RestaurantsList';
import {useState, useEffect} from 'react'


function App() {
  const [priceCategory, setPriceCategory] = useState();
  const [ratingCategory, setRatingCategory] = useState();
  const [wordQuery, setWordQuery] = useState("");

  const handlePriceFilter = (event) =>{
    // console.log(event.target.innerText);
    const price = event.target.innerText;
    setPriceCategory(price);
  }

  const handleRatingFilter = (event) => {
    // console.log(event.target.innerText);
    const rating = event.target.innerText;
    setRatingCategory(rating);

  }

  const handleSearchWord = (word) => {
    setWordQuery(word);
  };

  useEffect(()=>{
    // console.log(ratingCategory);
    // console.log(priceCategory);

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
        console.log(`this is ${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  },[priceCategory, ratingCategory, wordQuery]);
  
  return (
    <div>
      <Header />
      <div className='Content'>
        <Filters onPriceClick={handlePriceFilter} onRatingClick={handleRatingFilter} />
        <RestaurantsList searchWord={handleSearchWord} />
      </div>
      
      <Footer />
      <Restaurant />
    </div>

  )
}

export default App;
