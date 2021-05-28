import { memo } from "react";
import { Conditions } from "../../one-call-weather-dto.model";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./ForecastHeader.module.css";

function ForecastHeader({ conditions }: { conditions: Conditions }) {
  return (
    <div className={styles.forecast_header}>
      <WeatherIcon icon={conditions.weather[0].icon} />
      <div className={styles.overview}>
        <p className={`is-capitalized has-text-centered ${styles.description}`}>{conditions.weather[0].description}</p>
        <div className={`${styles.temps}`}>
          <div>
            <p className={styles.current_temperature}>{Math.round(conditions.temp)}°C</p>
          </div>
          {/* <div className={`${styles.min_max}`}>
            <div className="has-text-right">
              <p className="heading">Min</p>
              <p className="title">5°C</p>
            </div>
            <div className="has-text-right">
              <p className="heading">Max</p>
              <p className="title">30°C</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default memo(ForecastHeader);
