import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function Normal() {
    useEffect(() => {
        const options = {
            series: [
              {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100],
              },
              {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41],
              },
            ],
            chart: {
              height: 200,
              type: 'area',
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
          };
       
    
        const chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();
    
        // Cleanup function
        return () => {
          chart.destroy();
        };
      }, []);
    
  return (
    <div id="chart" />

  )
}

export default Normal;