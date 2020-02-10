import React from 'react'
import "./tabbar.css"
function Tabbar() {
    return (
      <div id='tabbar'>
          <ul>
              <li>
                <img src={require("./icon/wenzhang.png")} alt="图片消失了"/>
                <p>要闻</p>
              </li>
              <li>
                <img src={require("./icon/shu.png")} alt="图片消失了"/>
                <p>周刊</p>
              </li>
              <li>
                <img src={require("./icon/tegong.png")} alt="图片消失了"/>
                <p>特供</p>
              </li>
              <li>
                <img src={require("./icon/shuju.png")} alt="图片消失了"/>
                <p>数据通</p>
              </li>
              <li>
                <img src={require("./icon/wode.png")} alt="图片消失了"/>
                <p>我的</p>
              </li>
          </ul>
      </div>
    )
}

export default Tabbar
