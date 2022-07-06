import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Definition.css";

export default function Definition(props) {
  console.log(props.meaning);
  return (
    <div className="Definition">
        <section>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            
              <p>{definition.definition}</p>
                            
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
                <br />
            
          </div>
        );
      })}
      </section>
    </div>
  );
}