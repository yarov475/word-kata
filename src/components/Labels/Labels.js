import React from "react";
import s from './labels.module.css'

const labels = () => {
    return (

        <div className={s.label}>
        <span>
            <h2>Insert text here</h2>
        <p>You can paste text to make wordlist here. Text should be in txt format max width = 10000 sings </p>

        </span>

        </div>
    )
}

export default labels