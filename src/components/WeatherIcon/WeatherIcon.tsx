import Lottie from "lottie-web";
import { memo, useEffect, useRef } from "react";
import { WeatherIconMapping } from "./weather-icon-mapping.const";
import styles from "./WeatherIcon.module.css";

function WeatherIcon({ icon }: { icon: string }) {
  useEffect(() => {
    const iconMatch = WeatherIconMapping[icon];
    if (iconMatch && ref.current) {
      const animation = Lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `/lottie-files/${iconMatch}.json`,
      });
      animation.setSpeed(0.75);
      return () => animation?.destroy();
    }
  }, [icon]);

  const ref = useRef<HTMLDivElement>(null);

  return <div className={styles.animation} ref={ref}></div>;
}

export default memo(WeatherIcon);
