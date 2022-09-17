import './App.css';
import Navbar from './components/Navber/Navbar';
import './components/css/app.css'
import SearchBox from './components/searchBox/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherShow from './components/WeatherShow/WeatherShow';

function App() {
  const [weather, setWeather] = useState('dhaka');
  const [weatherDetails, setWeatherDetails] = useState({});
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeatherDetails(data))
  }, [weather])
  return (
    <div className='bg-img'>
      <Navbar />
      <SearchBox setWeather={setWeather} />
      <WeatherShow weatherDetails={weatherDetails} />
    </div>
  );
}

export default App;
