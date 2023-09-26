import React, { useCallback, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Chart from "../../components/Chart/Chart";

const Statistics = () => {
  const campaigns = useLoaderData();
  let value = 0;
  for (const campaign of campaigns) {
    value += campaign.donate;
  }
  console.log(value);
  return (
    <div>
      <Chart />
    </div>
  );
};

export default Statistics;
