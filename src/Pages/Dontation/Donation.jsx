import React, { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donationsItems = JSON.parse(localStorage.getItem("donations"));
    if (donationsItems) {
      setDonations(donationsItems);
    } else {
      setNotFound("Data Not Found");
    }
  }, []);
  return (
    <div className=" py-14 container mx-auto">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {donations.slice(0, dataLength).map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
      {donations.length > 4 ? <div
          className={
            dataLength === donations.length
              ? "hidden"
              : "flex justify-center my-5"
          }
        >
          <button
            onClick={() => setDataLength(donations.length)}
            className="btn bg-green-900 hover:bg-green-700 capitalize text-white"
          >
            See All
          </button>
        </div> : ' ' }
    </div>
  );
};

export default Donation;
