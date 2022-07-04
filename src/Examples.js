import React from "react";

export default function Examples(props) {
    if(props.examples) {
        return (
            <p>e.g: "{props.examples}"</p>
        );
    } else {
        return null;
    }
}