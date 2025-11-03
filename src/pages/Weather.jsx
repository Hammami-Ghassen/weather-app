
import React, { useState } from 'react';
import '../styles/Weather.css'
import WeatherCard from '../components/WeatherCard'
import SearchBar from '../components/SearchBar'

const weatherData = [
  { city: 'Tunis', temperature: 18, icon: '/assets/some_clouds.png' },
  { city: 'Bizerte', temperature: 22, icon: '/assets/some_sun.png' },
  { city: 'Sousse', temperature: 25, icon: '/assets/some_rain.png' },
  { city: 'Gafsa', temperature: 16, icon: '/assets/some_sun.png' },
]
export default function Weather() {
  const [query, setQuery] = useState('');

  const filteredData = weatherData.filter((item) =>
    item.city.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <SearchBar onChange={setQuery} /> 

      <div className="weather-container">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <WeatherCard
              key={index}
              city={item.city}
              temperature={item.temperature}
              icon={item.icon}
            />
          ))
        ) : (
          <p>No cities match your search.</p>
        )}
      </div>
    </div>
  );
  
}