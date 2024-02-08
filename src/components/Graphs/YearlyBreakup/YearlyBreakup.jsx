import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";
function YearlyBreakup() {
  const [chartData, setChartData] = useState({
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
    },
  });
  return (
    <div>
      <div className="shadow-md rounded-lg border border-indigo-100 border-0.5 p-5">
        <div id="chart-yearly" className="flex jusity-between gap-4">
          <div className="min-w-36 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Yearly Breakup</h3>
              <p className="text-xl font-semibold">$36,358</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="">
                <i className="fi fi-bs-arrow-up-left text-teal-400 text-xs font-base h-5 w-5 bg-teal-100 rounded-full flex items-center justify-center"></i>
              </span>{" "}
              <p className="text-sm text-gray-600">
                <span className="text-gray-900">+9%</span> last year
              </p>
            </div>
          </div>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="polarArea"
            width={200}
          />
        </div>
      </div>
    </div>
  );
}

export default YearlyBreakup;
