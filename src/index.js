import React from "react";
import {render} from "react-dom";

//自定义组件
import './index.css'
import Search from "./search.js";//搜索
import Nav from "./nav.js";//分类导航
import Banner from "./banner.js";//轮播图
import Article from "./article.js";//文章列表
import Tabbar from "./tabbar.js";//底部导航

let App = (
	<div className="newsapp">
		<Search></Search>
		
		<Nav></Nav>

		
		<Banner></Banner>

		
		<Article></Article>
		<Article></Article>
		<Article></Article>

		
		<Tabbar></Tabbar>



	</div>
	)

render(App,document.getElementById("root"))