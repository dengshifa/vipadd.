import React from 'react'

import './article.css'
function Article(){
    return (
      <div id='art'>
          <div className="box">
          <div className='box1'>特别报道:消费待重启</div>
          <div className='box2'>
            <img src={require("./img/1.jpg")} alt="图片消失了"/>
          </div>
          </div>
      </div>
    )

}

export default Article;