import { memo } from "react";
import { OneCallWeatherDto } from "../../one-call-weather-dto.model";
import ForecastBoxes from "../ForecastBoxes/ForecastBoxes";
import ForecastHeader from "../ForecastHeader/ForecastHeader";

function Forecast({ forecast }: { forecast: OneCallWeatherDto }) {
  return (
    <section className="section">
      <ForecastHeader conditions={forecast.current} />
      <ForecastBoxes conditions={forecast.current} />
    </section>
  );
}

export default memo(Forecast);
