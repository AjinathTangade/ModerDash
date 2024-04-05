import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

function Normal() {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        type: "area",
        stacked: false,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        borderColor: "rgba(0, 0, 0, 0)",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: true,
      },
      stroke: {
        curve: "smooth",
        lineCap: "butt",
      },
      xaxis: {
        labels: {
          show: true,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#chart-normal"),
      options
    );
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return <div className="chart-container" id="chart-normal" />;
}

export default Normal;
