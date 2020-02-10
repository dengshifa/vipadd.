import React from "react";
import './search.css'

function Search() { 
    return (
      <div id='search'>
      	<div id="sear">
        	<input type="text" placeholder="新冠肺炎" />
        	<img src={require("./icon/erji.png")} alt="加载失败"/>
        </div>       
      </div>
    )
}

export default Search