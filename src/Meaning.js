import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="highlight">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section>
              <h4>{definition.definition}</h4>
                            
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
                <br />
            </section>
          </div>
        );
      })}
    </div>
  );
}