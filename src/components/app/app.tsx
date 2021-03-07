import { useForecast } from '../../hooks/use-forecast';
import Forecast from '../forecast/forecast';
import Header from '../header/header';
import { Spinner } from '../spinner/spinner';
import styles from './app.module.css';

function App() {
  const { forecast, error, loading, reload } = useForecast();

  return (
    <div className={styles.app}>
      <Header
        error={error}
        loading={loading}
        lastUpdate={forecast?.current.dt}
        update={reload} />
      <div>
        <main className='container'>
          {forecast
            ? <Forecast forecast={forecast} />
            : loading && <Spinner />}
        </main>
      </div>
    </div >
  );
}

export default App;

