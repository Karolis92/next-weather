import classNames from "classnames";
import { memo } from "react";
import { OneCallWeatherDto } from "../../one-call-weather-dto.model";
import ForecastBoxes from "../ForecastBoxes/ForecastBoxes";
import ForecastHeader from "../ForecastHeader/ForecastHeader";
import styles from "./Forecast.module.css";

function Forecast({ forecast }: { forecast: OneCallWeatherDto }) {
  return (
    <section className={classNames("section", styles.wrapper)}>
      <ForecastHeader conditions={forecast.current} />
      <ForecastBoxes conditions={forecast.current} />
    </section>
  );
}

export default memo(Forecast);
