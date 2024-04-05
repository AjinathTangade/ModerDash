import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";

function Customers() {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [60, 300, 80, 200, 40],
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
        show: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      xaxis: {
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
      tooltip: {
        enabled: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#chart-customers"),
      options
    );
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5">
      <div className="px-4 pt-4">
        <div className="flex flex-col gap-1 ">
          <p className="text-sm text-gray-600">Customers</p>
          <p className="text-xl font-semibold">36,358</p>
        </div>
        <div className="flex items-center gap-1 pt-3">
          <span className="">
            <i className="fi fi-bs-arrow-up-left text-red-400 text-xs font-base h-5 w-5 bg-red-100 rounded-full flex items-center justify-center"></i>
          </span>{" "}
          <p className="text-sm text-gray-600 ">
            <span className="text-gray-900">+9%</span>
          </p>
        </div>
      </div>
      <div id="chart-customers"  />
    </div>
  );
}

export default Customers;
