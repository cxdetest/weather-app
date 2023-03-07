import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Result = ({ location }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const weather = useCallback(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=947820c034c44e83981215819232502&q=${location}&aqi=no`
      )
      .then(function (res) {
        setResult(res.data);
      });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    weather();

    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [weather]);

  return (
    <>
      {loading || result.length > 0 ? (
        <span className='loading'>loading...</span>
      ) : (
        <>
          <h3>{result.location.name}</h3>
          <p>{result.location.localtime}</p>
          <img
            src={result.current.condition.icon}
            alt={result.current.condition.text}
          />
          <p>{result.current.condition.text}</p>
          <p>{result.current.temp_c}°</p>
        </>
      )}
    </>
  );
};

export default Result;
