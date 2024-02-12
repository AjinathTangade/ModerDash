import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const colors = [
  "#e0e7ff",
  "#e0e7ff",
  "#e0e7ff",
  "#3b82f6",
  "#e0e7ff",
  "#e0e7ff",
  "#e0e7ff",
];

function EmployeeSalary() {
  useEffect(() => {
    const options = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13],
        },
      ],
      chart: {
        height: 300,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "20%",
          distributed: true,
          borderRadius: 4,
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
        show: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jule"],
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
            borderColor: "rgba(0, 0, 0, 0)",
          },
        },
        axisBorder: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return <div id="chart"></div>;
}s

export default EmployeeSalary;
