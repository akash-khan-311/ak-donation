import React from "react";
import Banner from "../../components/Navbar/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const Home = () => {
  const campaignes = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20">
        {campaignes?.map((campaign) => (
          <CategoryCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default Home;
