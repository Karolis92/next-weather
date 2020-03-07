import React from 'react';
import './current-conditions.css';

function CurrentConditions(props) {

    function getDisplayText(key) {
        return !props.conditions ? '?' : props.conditions[key];
    }

    function getDisplayTemperature(key) {
        return !props.conditions ? '?' : `${props.conditions[key].toFixed(1)}°C`;
    }

    function getDisplayPercentage(key) {
        return !props.conditions ? '?' : `${props.conditions[key] * 100}%`;
    }

    return (
        <section className="CurrentConditions section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="CurrentConditions_city-name title has-text-centered">
                            Vilnius
                    </h1>
                    </div>
                    <div className="column is-two-thirds">
                        <div className="CurrentConditions_temperature title has-text-centered">
                            {getDisplayTemperature('temperature')}
                        </div>
                        <div className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Feels like</p>
                                    <p className="title">{getDisplayTemperature('apparentTemperature')}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Conditions</p>
                                    <p className="title">{getDisplayText('summary')}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Humidity</p>
                                    <p className="title">{getDisplayPercentage('humidity')}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Wind speed</p>
                                    <p className="title">{getDisplayText('windSpeed')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default CurrentConditions;

