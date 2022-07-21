import React, { useState } from "react";
import "./Dictionary.css";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function getResults(response) {
        //console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(`HERE'S THE PICS OF: ${word}`);
        console.log(response.data.photos);
        setPhotos(response.data.photos);
    }

    function search() {
         // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(getResults);
        let pexelsApiKey = "563492ad6f917000010000010b067f8193504972899c4e6ad2c2afc6";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <input type="search" placeholder="Search for a word" onChange={saveWord} defaultValue={props.defaultWord}></input>
            <button className="btn btn-primary rounded">Search</button>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
        </div>
        </section>
        
         <Results results={results} />

         <Photos photos={photos} />
         
         </div>
    )
    } else {
        load();
    }
}