import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e1017bfe0ce24ac5abcf219461543aa3`;
    fetch(url).then(response=>response.json())
    .then(data=>setArticles(data.articles));
  }, [category])

  return (
    <div className='my-3'>
      <h2 className='text-center'>Latest<span className='badge bg-danger mx-1'>News</span></h2>
  
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard