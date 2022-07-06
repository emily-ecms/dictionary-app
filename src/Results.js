import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
        
    if(props.results) {
    return (
        <div className="Results">
            <section>
        <h2 className="word">{props.results.word}</h2>

         {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        </section>
        
            {props.results.meanings.map(function (meaning, index) {
                return(
                    <div key={index}>
                        <Definition meaning={meaning} />
                    </div>
                )
            })}
        
       
        </div>
    )
    } else {
        return null;
    }
    
}