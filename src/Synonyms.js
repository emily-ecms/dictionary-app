import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms.length > 0) {
    return (
      <div  className="Synonyms">
      <h6> Similar:</h6>
      <ul>
         
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>  {synonym} </li>;
        })}
      </ul>
      </div>
    );
  } else {
    return null;
  }
}