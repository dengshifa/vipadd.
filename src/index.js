import React from "react";
import {render} from "react-dom";

//自定义组件
import './index.css'
import Search from "./search/search";//搜索
import Nav from "./nav/nav";//分类导航
import Banner from "./banner/banner";//轮播图
import Article from "./article/index";//文章列表
import Tabbar from "./tabbar/tabbar";//底部导航
import Clock from "./clock.js";//底部导航

// let articles = [
// 	{"id":1,"title":"文章1"},
// 	{"id":2,"title":"文章2"},
// 	{"id":3,"title":"文章3"},
// ]

// articles.map((item)=>{

// })


let App = (
	<div className="newsapp">
		<Search></Search>
		
		<Nav></Nav>

		
		<Banner></Banner>

		<Article></Article>
		
		<Clock></Clock>
		
		<Tabbar></Tabbar>


	</div>
	)

render(App,document.getElementById("root"))