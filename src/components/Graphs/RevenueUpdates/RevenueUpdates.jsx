import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";

function RevenueUpdates() {
  const [chartOptions] = useState({
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 4,
        dumbbellColors: [["#008FFB", "#00E396"]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Product A", "Product B"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
  });

  const [series, setSeries] = useState([
    {
      data: [
        { x: "2008", y: [2800, 4500] },
        { x: "2009", y: [3200, 4100] },
        { x: "2010", y: [2950, 7800] },
        { x: "2011", y: [3000, 4600] },
        { x: "2012", y: [3500, 4100] },
        { x: "2013", y: [4500, 6500] },
        { x: "2014", y: [4100, 5600] },
      ],
    },
  ]);

  const [productATotal, setProductATotal] = useState(0);
  const [productBTotal, setProductBTotal] = useState(0);

  useEffect(() => {
    let productASum = 0;
    let productBSum = 0;

    series[0].data.forEach((item) => {
      productASum += item.y[0];
      productBSum += item.y[1];
    });

    setProductATotal(productASum);
    setProductBTotal(productBSum);
  }, [series]);

  const totalRevenue = productATotal + productBTotal;

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    // Fetch data for the selected year and update series state
    // For demo purposes, we're using hardcoded data here
    const newData = [
      {
        data: [
          { x: selectedYear, y: [2800, 4500] },
          { x: selectedYear, y: [3200, 4100] },
          { x: selectedYear, y: [2950, 7800] },
          { x: selectedYear, y: [3000, 4600] },
          { x: selectedYear, y: [3500, 4100] },
          { x: selectedYear, y: [4500, 6500] },
          { x: selectedYear, y: [4100, 5600] },
        ],
      },
    ];
    setSeries(newData);
  };

  return (
    <div className="w-full">
      <div
        id="chart-fir"
        className="shadow-md px-5 pt-7 rounded-lg border border-indigo-100 border-0.5"
      >
        <div className="flex gap-4 justify-between pb-6">
          <div>
            <h3 className="text-xl font-semibold">Revenue Updates</h3>
            <p className="text-sm font-base text-gray-400 ">
              Overview of Profit
            </p>
          </div>
          <div className="flex justify-end items-center">
            <select
              className="border border-indigo-300 rounded-md text-md outline-none px-4 h-10 w-30"
              onChange={handleYearChange}
            >
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <ReactApexChart
            options={chartOptions}
            series={series}
            type="rangeBar"
            height={280}
            width={500}
          />
          <div className="min-w-54">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center justify-center">
                <div className="bg-indigo-50 w-11 h-11 flex items-center justify-center rounded-md">
                  <i className="fi fi-br-grid text-indigo-500"></i>
                </div>
                <div>
                  <p className="text-2xl font-semibold">${totalRevenue}.00</p>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <div>
                  <span className="before:block before:absolute before:-inset-1.5 before:bg-[#008ffb] relative inline-block before:rounded-full"></span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Earnings this month</p>
                  <p className="text-xl font-semibold">${productATotal}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <div>
                  <span className="before:block before:absolute before:-inset-1.5 before:bg-[#00e396] relative inline-block before:rounded-full"></span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Earnings this month</p>
                  <p className="text-xl font-semibold">${productBTotal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueUpdates;
