import React from "react";

export default function FavoritesItem({favorite}){
    console.log(favorite);
    return (
        <span key={favorite.id}>
            <img src={`${favorite.url}`} width={100} height={100}/>
        </span>
    )
}