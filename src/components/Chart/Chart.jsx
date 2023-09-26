import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const totalDonate = 575;
  let newDonate = 0;
  const mydonate = JSON.parse(localStorage.getItem("donations"));
  let remainingDonate = 0;
  if (mydonate) {
    for (let campaignCard of mydonate) {
      newDonate += campaignCard.donate;
    }
    remainingDonate = totalDonate - newDonate;
  }

  const data = [
    { name: "Total Donation", value: remainingDonate },
    { name: "Your Donation", value: newDonate },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className=" lg:mx-auto py-16">
    
        <PieChart className="mx-auto w-full" width={600} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

    </div>
  );
};

export default Chart;
