import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const PieChart = ({ campaigns }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const doantionsData = JSON.parse(localStorage.getItem("donations"));
  let yourDonations = 0;
  let currentTotalDonations = 0;

  if (campaigns) {
    for (const campaign of campaigns) {
      currentTotalDonations += campaign.donate;
    }
  } else {
    currentTotalDonations = 0;
  }
  if (doantionsData) {
    for (const savedCampaign of doantionsData) {
      yourDonations += savedCampaign.donate;
    }
  }

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [currentTotalDonations, yourDonations],
            backgroundColor: ["#00C49F", "#FF444A"],
          },
        ],
        labels: ["Your Donation", "Total Donation"],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div className="flex justify-center w-4/4 lg:w-2/4 md:w-2/4 mx-auto lg:h-[90vh] ">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
