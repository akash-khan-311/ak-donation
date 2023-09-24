import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CampaignDetails from "../CampaignDetails/CampaignDetails";

const Campaigns = () => {
  const [campaign, setCampaign] = useState({});
  const { id } = useParams();
  const allCampaigns = useLoaderData();

  useEffect(() => {
    const findCampaigns = allCampaigns.find((campaign) => campaign.id == id);
    setCampaign(findCampaigns);
  }, [id, allCampaigns]);

  return (
    <div>
      <div>
        <CampaignDetails campaign={campaign} />
      </div>
    </div>
  );
};

export default Campaigns;
