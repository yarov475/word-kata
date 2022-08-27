import React, {useState} from "react";
import s from './InputText.module.css'
export default function InputText({setWord, word}) {

    let initText = 'Text'
    const handleTExt = (e) => {
        e.preventDefault()
        const text = e.target.elements.textToanalize.value;
        setWord(text)
    }

    return (
        <>
            <div className={s.inputText}>

            <form onSubmit={handleTExt}>
                   <textarea
                       defaultValue={initText}
                       id='textToanalize'/><br/>
                <input type='submit'/>
            </form>
            </div>


        </>
    )
}
