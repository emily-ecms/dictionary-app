import React from "react";

export default function Definitions(props) {
    //console.log(`You searched for "${props.results.word}"`);
    //let definitions = props.results.meanings[0].definitions[0].definition;
    //console.log(definitions);
    //console.log(props.results.word);
    
    if(props.results) {
    return (
        <div>
        <h2>Definition of "{props.results.word}"</h2>
       
        </div>
    )
    } else {
        return null;
    }
    
}