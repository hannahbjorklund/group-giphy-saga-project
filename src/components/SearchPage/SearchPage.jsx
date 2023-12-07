import React from "react";
import { useDispatch } from 'react-redux'

const SearchPage = () => {
    const dispatch = useDispatch()

    const handleSearchInput = (event) => {

    }

    return(
        <div>
            <form>
                <input type='text' placeholder='search criteria'/>
            </form>
        </div>
    )
}