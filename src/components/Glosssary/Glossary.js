import React, {useState} from "react";
import axios from "axios";

import InputText from "../InputTExt/InputText";

import Definitions_TEST from "../Meanings/Defenition_test";
import s from './Glossary.module.css'

import Labels from "../Labels/Labels";

export default function Glossary({setWords,meaningsArr, words, setMeanings}) {

    return (
        <>

            <Labels/>
            <div className={s.main}>


                <InputText
                    setWords={setWords}
                    words={words}
                />

<div>
    <Definitions_TEST
                    setWords = {setWords}
                    setMeanings = {setMeanings}
                    meaningsArr={meaningsArr}
                    words={words}
                />
</div>


            </div>



        </>
    )
};


