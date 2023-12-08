import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GifItem from "../GifItem/GifItem";
import { useHistory } from "react-router-dom";

const SearchPage = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchResultsArray = useSelector((store) => store.gifs);

  const submitSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "SAGA/GET_GIFS", payload: searchInput });
    displayGifs();
  };
    console.log(searchResultsArray)

  const displayGifs = () => {};

  const navToFavs = () => {
    history.push("/favorites")
  }

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="search criteria"
            value={searchInput}
            onChange={handleSearchInput}
          />
          <button
            type="submit"
            onClick={submitSearch}>
                Search
          </button>
          <button onClick={navToFavs}>
                Favorites
          </button>
        </form>
      </div>
      <div className='gifList'>
        {searchResultsArray.length>0 && (
        <>
            {searchResultsArray.map((result) => {
                return <GifItem key={result.id} item={result} />;
            })}
        </>
        )}
      </div>
    </>
  );
};

export default SearchPage