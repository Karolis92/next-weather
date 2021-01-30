export interface OneCallWeatherDto {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentConditions;
    minutely: { dt: number; precipitation: number; }[];
    hourly: HourlyConditions[];
    daily: {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: {
            min: number;
            max: number;
            morn: number;
            day: number;
            eve: number;
            night: number;
        };
        feels_like: {
            morn: number;
            day: number;
            eve: number;
            night: number;
        };
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_deg: number;
        weather: Weather[];
        clouds: number;
        pop: number;
        snow: number;
        uvi: number;
    }[]
}

export interface Conditions {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
}

export interface CurrentConditions extends Conditions {
    sunrise: number;
    sunset: number;
}

export interface HourlyConditions extends Conditions {
    pop: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}