import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./Spinner.module.css"
function Spinner() {
    let [color, setColor] = useState("#0070f3");
    return (
        <div>
            <div className={classes.center}>
            <ClipLoader color={color} size={150} />
            </div>
        </div>
    )
}

export default Spinner
