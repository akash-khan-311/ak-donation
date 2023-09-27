import React, { useCallback, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Chart from "../../components/Chart/Chart";

const Statistics = () => {
  const campaigns = useLoaderData();
  let value = 0;
  for (const campaign of campaigns) {
    value += campaign.donate;
  }

  return (
    <div>
      <Chart campaigns={campaigns} />
    </div>
  );
};

export default Statistics;
