import { useForecast } from "../../hooks/useForecast";
import Footer from "../Footer/Footer";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import styles from "./App.module.css";

function App() {
  const { forecast, error, loading, reload } = useForecast();

  return (
    <div className={styles.app}>
      <Header error={error} loading={loading} lastUpdate={forecast?.current.dt} update={reload} />
      <main className="container">{forecast ? <Forecast forecast={forecast} /> : loading && <Spinner />}</main>
      <Footer />
    </div>
  );
}

export default App;
