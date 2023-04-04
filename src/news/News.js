import React from 'react';
import './News.css';

function News(props) {

  return (
    <div className="News">
        <img src ={props.img}/>
        <h3>{props.title}</h3>
        <a href={props.link}>Explore ></a>
    </div>

  );
}

export default News;
