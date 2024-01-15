import React from "react";
import "./searchResult.css"

const SearchResult =({results,onSelection})=>{
   
    const handleChange=(user)=>{
        console.log(user);
        onSelection(user);    

    }
   
    return(
        <div className="result-list">
            {
                results.map((user,id)=>{
                    return <div key={id} className="search-result" onClick={()=>handleChange(user)}>{user}</div>
                })
            }
          
        </div>
    )

}

export default SearchResult