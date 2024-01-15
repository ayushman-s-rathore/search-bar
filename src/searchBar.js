import React, { useState }  from "react";
import {  FaSearch } from "react-icons/fa";
import "./searchBar.css"

function Search({setResults}){
    const[ input, setInput]= useState("");
    const options= ["Ayushman","ayush","asauis","ifgjwsif"];

    const fetchUser=(value)=>{
        const value2=value.toLowerCase();
        const results=options.filter((user)=>{
            return (
                value && user &&
                (user.toLowerCase().includes(value) ||
                user.toLowerCase().includes(value2))
            );
        })
        setResults(results);
    }

   const handleChange=(value)=>{
    setInput(value);
    fetchUser(value);
   }
    

    return (
    <div className="search">    
       <input 
       type="text" 
       className="search-input" 
       placeholder="Search here!!"
       value={input}
       onChange={(e)=>handleChange(e.target.value)}
       />
       <FaSearch></FaSearch>
    </div>
    );

}
export default Search 