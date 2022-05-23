import React from "react";

export default function SearchForm() {
    return (
        <form className="SearchForm">
            <input type="search" placeholder="Search for a word"></input>
            <button className="btn btn-primary rounded">Search</button>
        </form>
    )
}