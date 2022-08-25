import React from "react";
import s from './Defenition.module.css'

const Definitions_TEST = ({word, meanings}) => {
    console.log(meanings)
    return (
<div>
  <div className={s.item}>
      {/* audio---------------------------- */}

        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
     <b>{meanings[0].phonetic}</b>
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"

              >
                  <p>Def</p>
                <b className={s.def}>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <i className={s.ex}>Example : {def.example}</i>
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b className={s.syn}>Synonyms :{def.synonyms.map((s) => `${s}, `)}</b>
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    <button>Delete</button>
    </div>

<button>Import</button>
</div>


    )

};

export default Definitions_TEST;