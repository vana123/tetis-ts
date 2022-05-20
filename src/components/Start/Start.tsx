import React, {useState} from "react";
import './Start.css'

type ButtonProps = {
    handlePauseClick: () => void
}

export const Start = ({handlePauseClick}: ButtonProps) =>{

    const [Flag, setFlag] = useState(true)

    const clickHandler = () => {
        handlePauseClick()
        setFlag(!Flag)
    }

    return(
        <div className={Flag ? "activeFlag Start" : "inactiveFlag Start"} onClick={clickHandler}>
            <button className="Start__button">
                START
            </button>
        </div>
    )
}