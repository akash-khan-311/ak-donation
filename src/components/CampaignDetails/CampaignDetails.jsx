import React from "react";
import "./CampaignDetails.css";

const CampaignDetails = ({ campaign }) => {
  const {
    id,
    image,
    title,
    textColor,
    backgroundColor,
    categoryColor,
    donate,
    description,
  } = campaign || {};
  
  
  


  return (
    <div className="">
      <div className="relative">
        <img src={image} className="h-[80vh]  w-full" alt="" />
        <div className="absolute bottom-0 w-full ">
          <div className="overlay flex  py-6 ">
            <button
              className="btn text-white border-0 ml-10"
              style={{ background: `${textColor}` }}
            >
              Donate $ {donate}
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 space-y-3">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CampaignDetails;
