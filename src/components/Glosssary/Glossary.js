import React, {useState} from "react";
import axios from "axios";
import Definitions from "../Meanings/Defenition";
import InputText from "../InputTExt/InputText";
import Header from "../Header/Heder";
import Definitions_TEST from "../Meanings/Defenition_test";
import s from './Glossary.module.css'
import Footer from "../Footer/Footer";
import Labels from "../Labels/Labels";

export default function Glossary({setWord,meanings, word, setMeanings}) {

    // const dictionaryApi = async () => {
    //     try {
    //         const data = await axios.get(
    //             `https://api.dictionaryapi.dev/api/v2/entries/${word}`
    //         );
    //         setMeanings(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }

    return (
        <>
            <Header/>
            <Labels/>
            <div className={s.main}>


                <InputText
                    setWord={setWord}
                    word={word}
                />

                <Definitions_TEST
                    setWord = {setWord}
                    setMeanings = {setMeanings}
                    meanings={meanings}
                    word={word}
                />

            </div>

            <Footer/>

        </>
    )
};


