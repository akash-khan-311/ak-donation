import React from "react";
import "./CampaignDetails.css";
import swal from "sweetalert";

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

  const handleAddToDonation = () => {
    const addedDonations = [];
    const donationsCampaigns = JSON.parse(localStorage.getItem("donations"));

    if (!donationsCampaigns) {
      addedDonations.push(campaign);
      localStorage.setItem("donations", JSON.stringify(addedDonations));
      swal("Good Job", "Donation Campaign Add Successfully", "success");
    } else {
      const isExits = donationsCampaigns.find((campaign) => campaign.id === id);
      if (!isExits) {
        addedDonations.push(...donationsCampaigns, campaign);
        localStorage.setItem("donations", JSON.stringify(addedDonations));
        sweetAlert("Good Job", "Donation Campaign Add Successfully", "success");
      } else {
        sweetAlert("Opps!", "This Campaign Already Added", "error");
      }
    }
  };

  return (
    <div className="container mx-auto py-3 text-white">
      <div className="relative">
        <img src={image} className="lg:h-[80vh]  w-full" alt="" />
        <div className="absolute bottom-0 w-full ">
          <div className="overlay flex  py-6 ">
            <button
              onClick={handleAddToDonation}
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
