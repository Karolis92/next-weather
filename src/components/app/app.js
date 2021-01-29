import React, { useEffect, useState } from 'react';
import CurrentConditions from '../current-conditions/current-conditions';
import Header from '../header/header';

function App() {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [triggered, setTriggered] = useState(new Date());

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(undefined);
    setForecast(undefined);

    fetch('/.netlify/functions/forecast?lat=54.6892&lon=25.2798&units=metric')
      .then(res => res.json())
      .then(
        (result) => ignore || setForecast(result),
        (error) => ignore || setError(error)
      )
      .then(() => setLoading(false));

    return () => ignore = true;
  }, [triggered]);

  return (
    <>
      <Header
        error={error}
        loading={loading}
        lastUpdate={forecast?.current.dt}
        update={() => setTriggered(new Date())}>
      </Header>
      <CurrentConditions
        conditions={forecast?.current}>
      </CurrentConditions>
    </>
  );
}

export default App;

