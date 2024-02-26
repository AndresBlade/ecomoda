import React from 'react'
import imagenLupa from "../../../assets/icons_finances/lupa.png";
import { useState,useEffect, useRef } from 'react';

const useReadOnly = (initialState:boolean) => {
    const [isReadOnly, setIsReadOnly] = useState(initialState);

    const toggleReadOnly = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsReadOnly(!isReadOnly);
    };

    return [isReadOnly, toggleReadOnly];
    };

const Search = () => {
    const [search, setSearch]=useState("")
    const [isReadOnly, toggleReadOnly] = useReadOnly(true);
    // const showData = async()=>{

    //     const response = await fetch(url);
    //     const data = await response.json();

    // }
    // showData();

    const searcher = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
        console.log(e);
    };
    return (
        <div className='search'>
            <img src={imagenLupa} alt="Buscar" className="search-imagen"/>
            <input value={search} readOnly={isReadOnly} onChange={searcher} type="text" id="" placeholder='Search...' className='search-input'/>
            <button onClick={toggleReadOnly}>Cambiar estado</button>
        </div>

    )
}

export default Search
