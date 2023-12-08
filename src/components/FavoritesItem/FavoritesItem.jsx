import React from "react";

export default function FavoritesItem({favorite}){
    console.log(favorite);
    return (
        <div className='flexItem'>
            <img src={`${favorite.url}`} width={100} height={100}/>
        </div>
    )
}