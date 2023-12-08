import React from "react";
import { useDispatch } from "react-redux";

export default function GifItem(result) {
    const dispatch = useDispatch();
    let item = result.item;

    console.log(item);

    const setFave = () => {
        dispatch({
            type: "SAGA/ADD_FAV",
            payload: item.images.fixed_width.url
        })
    }

  return (
    <div className='flexItem'>
        <img src={item.images.fixed_height.url} />
        <button onClick={setFave} >🤍</button>
    </div>
  );
}
