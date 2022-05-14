import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Filters from './Components/Filters';
import RestaurantsList from './Components/RestaurantsList';


function App() {
  return (
    <div>
      <Header />
      <div className='Content'>
        <Filters/>
        <RestaurantsList/>
      </div>
      
      <Footer />
  
    </div>

  )
}

export default App;
