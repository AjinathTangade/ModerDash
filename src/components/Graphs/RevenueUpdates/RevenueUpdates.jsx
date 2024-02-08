import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
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

  const [series] = useState([
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
  // Calculate totals for Product A and Product B across all years
  const [productATotal, setProductATotal] = useState(0);
  const [productBTotal, setProductBTotal] = useState(0);

  useEffect(() => {
    let productASum = 0;
    let productBSum = 0;

    series[0].data.forEach((item) => {
      productASum += item.y[0];
      productBSum += item.y[1];
      //console.log("A",productASum)
      //console.log("B",+productBSum)
    });

    setProductATotal(productASum);
    setProductBTotal(productBSum);
    //console.log("A", productASum);
    //console.log("B", +productBSum);
  }, [series]);

  // Calculate total revenue for all products combined
  const totalRevenue = productATotal + productBTotal;
  //console.log(productATotal)
  return (
    <div className="w-full">
      <div
        id="chart-fir"
        className="shadow-md p-5 rounded-lg border border-0.5"
      >
        <h3 className="text-lg font-semibold">Revenue Updates</h3>
        <p className="text-sm font-base text-gray-400 pb-4">
          Overview of Profit
        </p>
        <div className="flex gap-4">
          <ReactApexChart
            options={chartOptions}
            series={series}
            type="rangeBar"
            height={280}
            width={500}
          />
          <div className="min-w-60">
            <p>Total Revenue for Product B: {productBTotal}</p>
            <p>Total Revenue for Product A: {productATotal}</p>
            <p>Total Revenue for all Products: {totalRevenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueUpdates;
