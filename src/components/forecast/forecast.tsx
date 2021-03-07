import { memo } from 'react';
import { OneCallWeatherDto } from '../../one-call-weather-dto.model';
import styles from './forecast.module.css';

function Forecast({ forecast }: { forecast: OneCallWeatherDto }) {
    return (
        <section className={`section ${styles.section}`}>
            <div className="block">
                <p className={`is-capitalized has-text-centered ${styles.description}`}>{forecast.current.weather[0].description}</p>
                <div className={`${styles.temps}`}>
                    <div>
                        <p className={styles.current_temperature}>
                            {forecast.current.temp.toFixed(1)}°C
                        </p>
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
            <div className="columns is-multiline is-centered is-mobile block">
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Feels like</p>
                        <p className="title">{forecast.current.feels_like.toFixed(1)}°C</p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Humidity</p>
                        <p className="title">{forecast.current.humidity}%</p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Dew Point</p>
                        <p className="title">{forecast.current.dew_point}°C</p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Cloudiness</p>
                        <p className="title">{forecast.current.clouds}%</p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Wind</p>
                        <p className="title">
                            <span>{forecast.current.wind_speed}m/s </span>
                            <div className="is-inline-block" style={{ transform: `rotate(${forecast.current.wind_deg}deg)` }}>
                                &darr;
                            </div>
                        </p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">UV Index</p>
                        <p className="title">{forecast.current.uvi}</p>
                    </div>
                </div>
                <div className="column is-one-third-mobile is-one-fifth-tablet">
                    <div className={`box has-text-centered ${styles.box}`}>
                        <p className="heading">Pressure</p>
                        <p className="title">{forecast.current.pressure}hPa</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(Forecast);

