import { useCallback, useEffect, useState } from "react";
import { OneCallWeatherDto } from "../one-call-weather-dto.model";

export function useForecast() {
    const [forecast, setForecast] = useState<OneCallWeatherDto>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();
    const [trigger, setTrigger] = useState(Date.now());

    useEffect(() => {
        let ignore = false;
        setLoading(true);
        setError(false);

        fetch('/.netlify/functions/forecast?lat=54.6892&lon=25.2798&units=metric')
            .then(res => res.json())
            .then(
                (result) => ignore || setForecast(result),
                () => ignore || setError(true)
            )
            .then(() => setLoading(false));

        return () => { ignore = true; };
    }, [trigger]);

    const reload = useCallback(() => setTrigger(Date.now()), []);

    return { forecast, loading, error, reload };
}