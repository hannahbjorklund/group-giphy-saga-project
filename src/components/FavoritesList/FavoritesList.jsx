import React, { useEffect } from "react";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import { useDispatch, useSelector } from "react-redux";

export default function FavoritesList() {
  const dispatch = useDispatch();
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

  return (
    <div className="favoritesContainer">
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

      {favoritesReducer[0] && (
        <>
          {favoritesReducer[0].map((favorite) => {
            return <FavoritesItem key={favorite.id} favorite={favorite} />;
          })}
        </>
      )}
    </div>
  );
}
