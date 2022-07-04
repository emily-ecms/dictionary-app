import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
    //console.log(`You searched for "${props.results.word}"`);
    //let definitions = props.results.meanings[0].definitions[0].definition;
    //console.log(definitions);
    //console.log(props.results.word);
    
    if(props.results) {
    return (
        <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        
            {props.results.meanings.map(function (meaning, index) {
                return(
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        
       
        </div>
    )
    } else {
        return null;
    }
    
}