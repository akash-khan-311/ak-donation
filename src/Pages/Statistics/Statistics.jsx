import React, { useCallback, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const campaigns = useLoaderData();
  let value = 0;
  for (const campaign of campaigns) {
    value += campaign.donate;
  }

  return (
    <div>
      <Helmet>
        <title>AS Campaign - Statistics</title>
      </Helmet>
      <Chart campaigns={campaigns} />
    </div>
  );
};

export default Statistics;
