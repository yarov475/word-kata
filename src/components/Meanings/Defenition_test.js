import React from "react";
import s from './Defenition.module.css'

const Definitions_TEST = ({word, meaningsArr}) => {
    console.log( typeof  meaningsArr + ' def test')

    return (

        <>
            {
                meaningsArr.map(
                    (meanings)=>
                        (<div>
                    <div className={s.item}>
                        {/* audio---------------------------- */}

                        {meanings[0] && word && (`${meanings[0].word}  ${meanings[0].phonetic} `)}

                        {meanings[0] && word && (
                            <audio
                                style={{backgroundColor: "#fff", borderRadius: 10}}
                                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                                controls
                            >
                                Your browser does not support the audio element.
                            </audio>
                        )}
                        {/* audio---------------------------- */}


                        {word === "" ? (
                            <span className="subTitle">insert text to the right</span>
                        ) : (

                            meanings.map((mean) =>
                                    mean.meanings.map((item) =>
                                            item.definitions.map((def) => (
                                                <ul
                                                    className="singleMean"

                                                >

                                                    <li className={s.def}>{`${def.definition}`}</li>
                                                    {/*{meanings[0].word}*/}
                                                    {/*{meanings[0].phonetic}*/}
                                                    {def.example && (
                                                        <span>
                    <i className={s.ex}>{def.example}</i>
                  </span>
                                                    )}
                                                    {def.synonyms && (
                                                        <span>
                    <b className={s.syn}>{def.synonyms.map((s) => `${s}, `)}</b>
                  </span>
                                                    )}
                                                </ul>
                                            ))
                                    )
                            )
                        )}
                        <button>Delete</button>
                    </div>

                    <button>Import</button>
                </div>)
                )



            }

        </>


                    )

                };

                export default Definitions_TEST;