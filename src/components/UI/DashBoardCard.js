import React from 'react';
import classes from "./DashBoardCard.module.css";

function DashBoardCard({label, value,color}) {
    return (
        <div className={classes.container} style={{color}}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}

export default DashBoardCard;
