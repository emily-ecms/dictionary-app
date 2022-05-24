import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm() {
    const [word, setWord] = useState("");

    function displayResult(response) {
        console.log(response.data);
    }

    function searchWord(event) {
        event.preventDefault();
        
        // documentation: https://dictionaryapi.dev/

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(displayResult);
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