import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

function Test() {
    useEffect(() => {
        const options = {
            series: [
              {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100],
              },
            ],
            chart: {
              height: 400,
              type: 'area',
            },
            dataLabels: {
              enabled: true,
            },
            stroke: {
            curve: 'smooth',
              lineCap:'round',
            },
            yaxis:{
                show:false,
            },
            grid:{
borderColor:"rgba(0, 0, 0, 0)",
padding:{
    top:-30,
    right:0,
    bottom:-8,
    left: 12,
}
            }
            
          };
       
    
        const chart = new ApexCharts(document.querySelector('#chart-normal-nor'), options);
        chart.render();
    
        // Cleanup function
        return () => {
          chart.destroy();
        };
      }, []);
    
  return (
    <div id="chart-normal-nor" />
  )
}

export default Test;