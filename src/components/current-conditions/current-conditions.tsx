import React from 'react';
import styles from './current-conditions.module.css';

function CurrentConditions({ conditions }: { conditions: any }) {

    function getDisplayText(selector: (c: any) => string) {
        return !conditions ? '?' : selector(conditions);
    }

    function getDisplayTemperature(selector: (c: any) => number) {
        return !conditions ? '?' : `${selector(conditions).toFixed(1)}°C`;
    }

    function getDisplayPercentage(selector: (c: any) => number) {
        return !conditions ? '?' : `${selector(conditions)}%`;
    }

    return (
        <section className={`${styles.section} section`}>
            <div className="container">
                <div className="columns has-text-centered">
                    <div className="column">
                        <h1 className="title is-1">
                            Vilnius
                        </h1>
                        {conditions &&
                            <div>
                                <div className={styles.wind_arrow}
                                    style={{ transform: `rotate(${conditions.wind_deg}deg)` }}>
                                    ⮟
                                </div>
                                <p className="title is-4">{conditions.wind_speed} m/s</p>
                            </div>
                        }
                    </div>
                    <div className="column is-two-thirds">
                        <div className={`${styles.temperature} title`}>
                            {getDisplayTemperature(c => c.temp)}
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <div>
                                    <p className="heading">Feels like</p>
                                    <p className="title">{getDisplayTemperature(c => c.feels_like)}</p>
                                </div>
                            </div>
                            <div className="level-item">
                                <div>
                                    <p className="heading">Conditions</p>
                                    <p className="title is-capitalized">{getDisplayText(c => c.weather[0].description)}</p>
                                </div>
                            </div>
                            <div className="level-item">
                                <div>
                                    <p className="heading">Humidity</p>
                                    <p className="title">{getDisplayPercentage(c => c.humidity)}</p>
                                </div>
                            </div>
                            <div className="level-item">
                                <div>
                                    <p className="heading">Wind speed</p>
                                    <p className="title">{getDisplayText(c => c.wind_speed)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CurrentConditions;

