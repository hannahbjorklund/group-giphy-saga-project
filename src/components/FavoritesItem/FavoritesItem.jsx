import React from "react";
import { useDispatch} from "react-redux"

export default function FavoritesItem({favorite}){

    const dispatch = useDispatch()

    const handleSelect = (event) => {
        dispatch({
            type: 'SAGA/ADD_CAT',
            payload: {
                id: favorite.id,
                categoryId: Number(event.target.value)
            }
        })
    }

    return (
        <div key={favorite.id}>
            <img src={favorite.url} width={100} height={100}/>
            <select defaultValue={0} onChange={handleSelect}>
                <option value={0} disabled hidden>
                    Categorize
                </option>
                <option value={1}>wild</option>
                <option value={2}>uproarious</option>
                <option value={3}>poignant</option>
                <option value={4}>felicitous</option>
                <option value={5}>whimsical</option>
            </select>
        </div>   
    )
}