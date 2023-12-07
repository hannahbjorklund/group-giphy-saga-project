import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import GifItem from "../GifItem/GifItem";

const SearchPage = () => {
    const dispatch = useDispatch()

    const [searchInput, setSearchInput] = useState('');
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const searchResultsArray = useSelector(store => store.gifs)

    const submitSearch = (event) => {
        event.preventDefault();
        dispatch({type: 'SAGA/GET_GIFS', payload: searchInput});
        displayGifs();
    }
    const displayGifs = () => {

    }


    return(
        <>
        <div>
            <form>
                <input type='text' placeholder='search criteria' value={searchInput} onChange={submitSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
        <div>
            {searchResultsArray.map((result) => {
                <GifItem item={result}/>
})}
        </div>
        </>
    )
}