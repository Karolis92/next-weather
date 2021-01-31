import { useState } from 'react';
import { useForecast } from '../../hooks/use-forecast';
import { Conditions } from '../../one-call-weather-dto.model';
import ConditionsView from '../conditions-view/conditions-view';
import Header from '../header/header';
import HourlyScroller from '../hourly-scroller/hourly-scroller';
import { Spinner } from '../spinner/spinner';
import styles from './app.module.css';

function App() {
  const { forecast, error, loading, reload } = useForecast();
  const [selected, setSelected] = useState<Conditions>();

  return (
    <div className={styles.app}>
      <Header
        error={error}
        loading={loading}
        lastUpdate={forecast?.current.dt}
        update={reload} />

      {loading && <Spinner />}

      {!loading && forecast &&
        <main className={styles.main_content}>
          <HourlyScroller
            hourlyConditions={forecast.hourly}
            selected={selected}
            select={setSelected} />
          <ConditionsView conditions={selected} />
        </main>
      }
    </div>
  );
}

export default App;

