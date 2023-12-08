import React from "react";

export default function FavoritesItem({favorite}){
    console.log(favorite);
    return (
        <div className='flexItem'>
            <img src={`${favorite.url}`}/>
        </div>
    )
}