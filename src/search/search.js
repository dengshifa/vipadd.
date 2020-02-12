import React from "react";
import './search.css'

function Search() { 
    return (
      <div className={"search"}>
        	<input type="text" placeholder="新冠肺炎" className={"keyword"}/>
        	<span className={"icon"}></span>     
      </div>
    )
}

export default Search