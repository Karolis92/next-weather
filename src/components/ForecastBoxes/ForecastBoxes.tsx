import classNames from "classnames";
import { memo } from "react";
import { Conditions } from "../../one-call-weather-dto.model";
import styles from "./ForecastBoxes.module.css";

function ForecastBoxes({ conditions }: { conditions: Conditions }) {
  return (
    <div className={classNames("columns is-multiline is-centered is-mobile block", styles.boxes)}>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">Feels like</p>
          <p className="title">{Math.round(conditions.feels_like)}°C</p>
        </div>
      </div>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">Humidity</p>
          <p className="title">{conditions.humidity}%</p>
        </div>
      </div>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">Dew Point</p>
          <p className="title">{Math.round(conditions.dew_point)}°C</p>
        </div>
      </div>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">Cloudiness</p>
          <p className="title">{conditions.clouds}%</p>
        </div>
      </div>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">Wind</p>
          <p className="title">
            <span>{conditions.wind_speed}m/s </span>
            <div className="is-inline-block" style={{ transform: `rotate(${conditions.wind_deg}deg)` }}>
              &darr;
            </div>
          </p>
        </div>
      </div>
      <div className="column is-one-third-mobile is-one-quarter-tablet">
        <div className={classNames("box has-text-centered", styles.box)}>
          <p className="heading">UV Index</p>
          <p className="title">{conditions.uvi}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(ForecastBoxes);
