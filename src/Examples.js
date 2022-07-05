import React from "react";
import "./App.css";

export default function Examples(props) {
    if(props.examples) {
        return (
            <p className="examples"><em>{props.examples}</em></p>
        );
    } else {
        return null;
    }
}