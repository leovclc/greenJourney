import React from 'react';
import './News.css';

function News(props) {

  return (
    <div className="News">
        <img src ={props.img} alt="News about carbon emission"/>
        <h3>{props.title}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">Explore ></a>
    </div>

  );
}

export default News;
