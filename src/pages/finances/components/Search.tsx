import React from 'react'
import imagenLupa from "../../../assets/icons_finances/lupa.png";
import { useState,useEffect, useRef } from 'react';


const Search = () => {
    const [prestamos, setPrestamos]=useState([]);
    const [search, setSearch]=useState("");


    // const showData = async()=>{

    //     const response = await fetch(url);
    //     const data = await response.json();

    // }
    // showData();

    const searcher = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
        // console.log(e.target.value);
    };
    // let results=[];
    // if(!search){
    //     results=user;
    // }else{
    //     results = user.filter((dato)=>
    //     dato.name.toLowerCase().includes(search.toLocaleLowerCase()));

    // }

    return (
        <div className='search'>
            <img src={imagenLupa} alt="Buscar" className="search-imagen"/>
            <input value={search} onChange={searcher} type="text" id="" placeholder='Search...' className='search-input'/>

        </div>

    )
}

export default Search
