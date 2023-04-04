import React from 'react';
import News from './News';
import img1 from '../images/NewsImage1.png';
import img2 from '../images/NewsImage2.png';
import img3 from '../images/NewsImage3.png';
import './NewsPage.css';

function NewsPage() {

  return (
    <div className="NewsPage">
        <h1>Recent news about carbon emission</h1>
        <div className="NewsList">
                <News
                    img = {img1}
                    title="Australia: Extreme Heat Threatens Lives"
                    link="https://www.hrw.org/news/2022/03/21/australia-extreme-heat-threatens-lives"
                />
                <News
                    img = {img2}
                    title="Australia faces more fires, drought as climate continues to heat"
                    link="https://www.aljazeera.com/news/2020/11/13/australia-faces-more-fires-drought-as-climate-continues-to-heat"
                />
                <News
                    img = {img3}
                    title="Australia’s emissions climbed in Coalition’s final year as transport and fossil fuels wiped out gains during Covid"
                    link="https://www.theguardian.com/environment/2022/jun/27/australias-emissions-climbed-in-coalitions-final-year-as-transport-and-fossil-fuels-wiped-out-gains-during-covid#:~:text=Transport%20emissions%20were%20up%2010,not%20back%20at%202019%20levels."
                />
        </div>
    </div>


  );
}

export default NewsPage;
