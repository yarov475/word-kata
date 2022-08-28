import React, {useState} from "react";
import s from './InputText.module.css'
import findTopWords from "../findtopWords/findTopWords";
export default function InputText({setWords, words}) {

    let initText = 'Text to analise'
    /**
     * set one word to fetch fn
     * @param e
     */
    const handleTExt = (e) => {
        e.preventDefault()
        const str = e.target.elements.textToanalize.value;
        let listArr = findTopWords(str)
        setWords(listArr)
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
