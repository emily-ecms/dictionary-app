import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
    const [word, setWord] = useState("");

    function searchWord(event) {
        event.preventDefault();
        alert(`You searched for "${word}"`);
    }

    function saveWord(event) {
        setWord(event.target.value);
    }

    return (
        <form className="SearchForm" onSubmit={searchWord}>
            <input type="search" placeholder="Search for a word" onChange={saveWord}></input>
            <button className="btn btn-primary rounded">Search</button>
        </form>
    )
}