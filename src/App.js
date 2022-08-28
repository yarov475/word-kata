import logo from './logo.svg';
import './App.css';
import Glossary from "./components/Glosssary/Glossary";
import InputText from "./components/InputTExt/InputText";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header/Heder";
import Footer from "./components/Footer/Footer";

function App() {
    const [word, setWord] = useState('');
    const [meanings, setMeanings] = useState([]);


    /**
     * send word to free dictionary api
     * https://api.dictionaryapi.dev/
     * push translated word to state
         * @returns {Promise<void>}
     */

const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
// TODO delete log
  console.log(meanings + ' from app.js');

    /**
     * use efect react hook
     * when input walue changes it evoke dictionaryApi
     * with new word
     */
  useEffect(() => {
    dictionaryApi();
  }, [word]);

    return (
        <div className="App">
            <Header/>
            <Glossary
                setMeanings={setMeanings}
                meanings={meanings}
                setWord={setWord}
                word={word}
            />
            <Footer/>

        </div>
    );
}

export default App;
