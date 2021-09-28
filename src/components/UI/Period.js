import React from 'react';
import classes from "./Period.module.css";



function Period({onClick,currentPeriod, periods}) {



    return (
        <div className={classes.container}>
            {periods.map(period => <span key={period.value}
                                     onClick={() => onClick(period.value)}
                                     className={period.value === currentPeriod?classes.active:""}>{period.label}</span>)}
        </div>
    );
}

export default Period;
