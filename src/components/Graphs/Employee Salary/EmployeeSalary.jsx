import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";
const colors = [
  "#a2c5fcb3",
  "#a2c5fcb3",
  "#a2c5fcb3",
  "#3b82f6",
  "#a2c5fcb3",
  "#a2c5fcb3",
  "#a2c5fcb3",
];

function EmployeeSalary() {
  useEffect(() => {
    const options = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21],
        },
      ],
      chart: {
        height: 300,
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
          columnWidth: "50%",
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#chart-empolyee"),
      options
    );
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return (
    <div>
      <div className="shadow-sm px-5 py-5 rounded-lg border border-indigo-100 border-0.5">
        <div>
          <h3 className="text-xl font-semibold">Employee Salary</h3>
          <p className="text-sm font-base text-gray-400 ">Every month</p>
        </div>
        <div id="chart-empolyee"></div>
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-4 items-center justify-center">
            <div className="bg-indigo-50 w-11 h-11 flex items-center justify-center rounded-md">
              <i className="fi fi-br-grid text-indigo-500"></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Salary</p>
              <p className="text-md font-semibold">$36,358</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="bg-indigo-50 w-11 h-11 flex items-center justify-center rounded-md">
              <i className="fi fi-br-grid text-gray-600"></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Profit</p>
              <p className="text-md font-semibold">$5,635</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSalary;
