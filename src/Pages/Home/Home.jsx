import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./Home.css";

const Home = () => {
  const campaignes = useLoaderData();
  const [fullCampaigns, setFullCampaigns] = useState(campaignes);
  const [searchValue, setSearchValue] = useState(campaignes);
  const newCampaigns = [];
  newCampaigns.push(...campaignes);
  const searchValue1 = useRef(null);
  const handleSearch = (e) => {
    const search = searchValue1.current.value;

    e.preventDefault();

    if (search.length) {
      const filterCampaigns = fullCampaigns.filter(
        (campaign) => campaign.category.toLowerCase() === search.toLowerCase()
      );
      if (filterCampaigns) {
        setSearchValue(filterCampaigns);
      }
    } else {
      setSearchValue(fullCampaigns);
    }
  };

  return (
    <div>
      <div className="main lg:py-16">
        <div className="flex justify-center items-center h-[40vh]">
          <form className="form-control">
            <h1 className="text-3xl lg:text-5xl  font-semibold text-center my-5 flex ">
              I Grow By Helping People In Need
            </h1>
            <div class="relative flex justify-center mx-auto h-10 w-full min-w-[200px] max-w-[24rem]">
              <input
                ref={searchValue1}
                type="text"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <button
                onClick={handleSearch}
                class="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-nonepeer-placeholder-shown:bg-blue-gray-500 "
                type="button"
                data-ripple-light="true"
              >
                Search
              </button>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20 ">
          {searchValue?.map((campaign) => (
            <CategoryCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
