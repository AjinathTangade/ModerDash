import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";

function YearlyBreakup() {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [options, setOptions] = useState({
    chart: {
      width: 380, // Default width
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  });

  // Function to update chart options based on screen width
  const updateChartOptions = () => {
    const newOptions = { ...options };

    // if (window.innerWidth < 480) {
    //   newOptions.chart.width = 300; // Adjust width for smaller screens
    //   newOptions.legend.show = false; // Hide legend for smaller screens
    // } else {
    //   newOptions.chart.width = 380; // Default width for larger screens
    //   newOptions.legend.show = true; // Show legend for larger screens
    // }

    setOptions(newOptions);
  };

  // Update chart options when component mounts and on window resize
  React.useEffect(() => {
    updateChartOptions();
    window.addEventListener("resize", updateChartOptions);
    return () => {
      window.removeEventListener("resize", updateChartOptions);
    };
  }, []);

  return (
    <div className="">
      <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 p-5">
        <div id="chart-yearly" className="flex justify-between gap-4">
          <div className="min-w-32 lg:min-w-36 flex flex-col justify-between">
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
          <div>
            <div>
              <div className="chart-wrap">
                <ReactApexChart options={options} series={series} type="donut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearlyBreakup;
