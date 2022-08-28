import React, {useState} from "react";
import axios from "axios";
import Definitions from "../Meanings/Defenition";
import InputText from "../InputTExt/InputText";
import Header from "../Header/Heder";
import Definitions_TEST from "../Meanings/Defenition_test";
import s from './Glossary.module.css'
import Footer from "../Footer/Footer";
import Labels from "../Labels/Labels";

export default function Glossary({setWord,meaningsArr, word, setMeanings}) {

    return (
        <>

            <Labels/>
            <div className={s.main}>


                <InputText
                    setWord={setWord}
                    word={word}
                />


                <Definitions_TEST
                    setWord = {setWord}
                    setMeanings = {setMeanings}
                    meaningsArr={meaningsArr}
                    word={word}
                />

            </div>



        </>
    )
};


