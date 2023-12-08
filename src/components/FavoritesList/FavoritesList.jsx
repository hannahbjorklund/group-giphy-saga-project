import React, { useEffect } from "react";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function FavoritesList() {

  const dispatch = useDispatch();
  const history = useHistory();

  const favoritesReducer = useSelector((store) => store.favorites);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    console.log("Inside getFavorites in FavoritesList");
    dispatch({
      type: "SAGA/GET_FAVS",
    });
  };

  const filterFavoritesByCategory = (categoryId) => {
    console.log("In filterFavoritesByCategory, categoryId:", categoryId);
  };

  const returnHome = () => {
    history.push('/')
  }

  

  return (

    <div className="favoritesContainer">

      <button onClick={returnHome}>Home</button>

      <select
        name="category"
        onChange={() => filterFavoritesByCategory(this.value)}
      >
        <option value={1}></option>
        <option value={2}></option>
        <option value={3}></option>
        <option value={4}></option>
        <option value={5}></option>
      </select>

      {favoritesReducer && (
        <>
          {favoritesReducer.map((favorite) => {
            return <FavoritesItem key={favorite.id} favorite={favorite} />;
          })}
        </>
      )}

    </div>
  );
}
