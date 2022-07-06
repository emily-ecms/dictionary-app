import React, { useState } from "react";
import "./Dictionary.css";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function getResults(response) {
        //console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0]);
        setResults(response.data[0]);
    }

    function search() {
         // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(getResults);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function saveWord(event) {
        setWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {

    return (
        <div className="Dictionary">
        <section>
        <form className="SearchForm" onSubmit={handleSubmit}>
            <input type="search" placeholder="Search for a word" onChange={saveWord}></input>
            <button className="btn btn-primary rounded">Search</button>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
        </div>
        </section>
        
         <Results results={results} />
         
         </div>
    )
    } else {
        load();
    }
}