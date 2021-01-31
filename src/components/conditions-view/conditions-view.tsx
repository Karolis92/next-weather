import { Conditions } from '../../one-call-weather-dto.model';
import styles from './conditions-view.module.css';

function ConditionsView({ conditions }: { conditions?: Conditions }) {
    return !conditions ? null : (
        <section className={`${styles.section} section`}>
            <div className="container  has-text-centered">
                <div className="columns">
                    <div className="column">
                        <div className={`${styles.temperature} title`}>
                            {conditions.temp.toFixed(1)}°C
                        </div>
                    </div>
                    <div className="column">
                        {conditions &&
                            <div>
                                <div className={styles.wind_arrow}
                                    style={{ transform: `rotate(${conditions.wind_deg}deg)` }}>
                                    &darr;
                                </div>
                                <p className="title is-4">{conditions.wind_speed} m/s</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="level">
                    <div className="level-item">
                        <div>
                            <p className="heading">Feels like</p>
                            <p className="title">{conditions.feels_like.toFixed(1)}°C</p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Conditions</p>
                            <p className="title is-capitalized">{conditions.weather[0].description}</p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Humidity</p>
                            <p className="title">{conditions.humidity}%</p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Wind speed</p>
                            <p className="title">{conditions.wind_speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConditionsView;

