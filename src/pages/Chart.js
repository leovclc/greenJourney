import Highcharts from 'highcharts';
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';

function Chart() {
    const options = {
      title: {
        text: 'Carbon Emission, 2010-2020',
        align: 'center'
      },
      xAxis: {
        title: {
          text: 'Year'
        }
      },
      yAxis: {
        title: {
          text: 'Carbon Emission'
        }
      },
      // Other Highcharts chart configuration options
      // ...
      series: [{
        name: 'Melbourne',
        data: [439, 486, 651, 818, 112, 142,
          171, 165, 155, 161, 154]
      }, {
        name: 'Beijing',
        data: [249, 379, 297, 298, 324, 302,
          381, 368, 337, 342, 310]
      }]
    };
  
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
  
  export default Chart;
  