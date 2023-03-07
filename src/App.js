import React, { useState } from 'react';
import Result from './Components/Result';
import Form from './Components/Form';
import './app.scss';

const App = () => {
  const [location, setLocation] = useState('auto:ip');

  return (
    <>
      <h1>Weather App</h1>

      <span className='container'>
        <Result location={location} />
        <Form setLocation={setLocation} />
      </span>

      <footer>
        WeatherApp &copy; {new Date().getFullYear()} | All rights reserved.
      </footer>
    </>
  );
};

export default App;
