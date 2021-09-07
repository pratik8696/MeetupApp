import React from 'react'
import classes from "./MeetupDetails.module.css"

function MeetupDetails(props) {
    return (
        <div className={classes.maindiv}>
            <div>
            <img src={props.img} alt="meetupimg" className={classes.detail} />
            </div>
            <div className={classes.description}>
            <h1 className={classes.title}>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default MeetupDetails
