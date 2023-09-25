import React, { useCallback, useState } from "react";
import PieChart from "../../components/PieChart";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  const campaigns = useLoaderData();
  return (
    <div>
      <PieChart campaigns={campaigns} />
    </div>
  );
};

export default Statistics;
