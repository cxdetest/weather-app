import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './app.scss';

const App = () => {
  const [location, setLocation] = useState({
    current: 'auto:ip',
    result: {},
  });
  const [loading, setLoading] = useState(true);

  function getData() {
    let timer;
    setLoading(true);
    clearTimeout(timer);

    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=947820c034c44e83981215819232502&q=${location.current}&aqi=no`
      )
      .then(function (res) {
        setLocation({ ...location, result: res.data });
      });

    timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Weather App</h1>

      <span className='container'>
        {/* weather info */}
        <>
          {loading || location.result.length > 0 ? (
            <span className='loading'>loading...</span>
          ) : (
            <>
              <h3>{location.result.location.name}</h3>
              <p>{location.result.location.localtime}</p>
              <img
                src={location.result.current.condition.icon}
                alt={location.result.current.condition.text}
              />
              <p>{location.result.current.condition.text}</p>
              <p>{location.result.current.temp_c}°</p>
            </>
          )}
        </>

        {/* search weather */}
        <>
          <input
            type='text'
            name='location'
            onChange={(e) =>
              setLocation({ ...location, current: e.target.value })
            }
            autoComplete='off'
            maxLength={50}
          />
          <button type='button' onClick={getData}>
            Search
          </button>
        </>
      </span>

      <footer>
        WeatherApp &copy; {new Date().getFullYear()} | All rights reserved.
      </footer>
    </>
  );
};

export default App;
