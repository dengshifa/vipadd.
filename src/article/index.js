import React , {Component} from 'react'
import axios from 'axios';

import Cover1 from "../img/1.jpg"
import './article.css'

class Article extends Component{
  state = {
    articles:[],//默认文章列表为空数组
  }
  componentDidMount(){
    axios.get('http://playground.it266.com/news')
        .then((response)=>{
            this.setState({articles:response.data.articles})
        })
        .catch((error)=>{
            console.log(error)
        });
  }
  render(){
    return (
      this.state.articles.map((item)=>{
        return (
          <div className="Article">
            <div className='title'>{item.title}</div>        
            <img src={Cover1} alt="图片消失了" className="cover"/>
          </div>
          )

      })
      )
  }
}


export default Article;