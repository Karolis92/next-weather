import React, { memo, MouseEvent, useCallback } from "react";
import { Waypoint } from "react-waypoint";
import { Conditions } from "../../one-call-weather-dto.model";
import styles from './hourly-scroller.module.css';

interface HourlyScrollerProps {
    hourlyConditions: Conditions[];
    selected?: Conditions;
    select: (conditions: Conditions) => void;
};

function HourlyScroller({ hourlyConditions, selected, select }: HourlyScrollerProps) {
    const handleClick = useCallback(item => select(item), [select]);
    const formattedDay = selected && new Date(selected.dt * 1000).toLocaleDateString([], { month: 'long', day: 'numeric' });

    return (
        <div>
            {formattedDay}
            <div className={styles.container}>
                {hourlyConditions.map(conditions =>
                    <MemoizedButton
                        key={conditions.dt}
                        conditions={conditions}
                        active={conditions === selected}
                        select={handleClick} />
                )}
            </div>
        </div>
    );
}

interface MemoizedButtonProps {
    conditions: Conditions;
    active: boolean;
    select: (c: Conditions) => void;
};

const MemoizedButton = memo(({ conditions, active, select }: MemoizedButtonProps) => {
    const formattedHours = new Date(conditions.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    function handleClick(e: MouseEvent<HTMLElement>): void {
        select(conditions);
        e.currentTarget.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Waypoint onEnter={() => select(conditions)} topOffset="2px" bottomOffset="57%">
            <div className={`${styles.button_wrap} ${active ? styles.active : ''}`}>
                <button className={`${styles.button} button is-ghost`} onClick={handleClick}>
                    {formattedHours}
                </button>
            </div>
        </Waypoint>
    );
});

export default HourlyScroller;