"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const ChartComponent = () => {
  Chart.register(ArcElement);
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-64 h-64">
      <Pie data={data} />
    </div>
  );
};

export default ChartComponent;
