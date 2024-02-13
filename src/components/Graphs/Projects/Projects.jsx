import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";
const colors = ["#3b82f6"];

function Projects() {
  useEffect(() => {
    const options = {
      series: [
        {
          data: [50, 40, 78, 70, 81, 90, 65, 90],
        },
      ],
      chart: {
        height: 100,
        type: "bar",
        toolbar: {
          show: false,
        },
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
          borderRadius: 10,
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
      tooltip: {
        enabled: true,
      },
      yaxis: {
        show: false,
        crosshairs: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        // categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#chart-project"),
      options
    );
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 h-30">
      <div className="px-4 pt-4">
        <div className="flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Projects</p>
          <p className="text-xl font-semibold">78,298</p>
        </div>
        <div className="flex items-center gap-1 pt-3">
          <span className="">
          <i className="fi fi-bs-arrow-up-left text-teal-400 text-xs font-base h-5 w-5 bg-teal-100 rounded-full flex items-center justify-center"></i>
          </span>{" "}
          <p className="text-sm text-gray-600 ">
            <span className="text-gray-900">+9%</span>
          </p>
        </div>
      </div>
      <div>
        <div id="chart-project"></div>
      </div>
    </div>
  );
}

export default Projects;
