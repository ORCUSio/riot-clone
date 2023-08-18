import React from "react";

const WhatsHappening = () => {
  const happeninList = [
    {
      title: "Soul Fighter Cosplay Guide: Round 2",
      type: "news",
      image:
        "https://www.riotgames.com/en/news/soul-fighter-cosplay-guide-round-two",
    },
    {
      title: "Enter the Riot Games VFX Contest Now!",
      type: "NEWS",
      image:
        "https://www.riotgames.com/en/news/vfx-contest-league-valorant-2023",
    },
    {
      title: "Mid-Year Update 2023 | Dev Snapshop - legends of Runterra",
      type: "NEWS",
      image:
        "https://www.riotgames.com/en/news/mid-year-update-2023-dev-snapshot-legends-of-runeterra",
    },
    {
      title: "Arena Making a New Mode",
      type: "INSIDE RIOT",
      image: "https://www.riotgames.com/en/news/arena-making-a-new-mode",
    },
  ];
  return (
    <>
      <hr />
      <div className="py-10 px-16 w-full ">
        <div className="flex justify-between my-16">
          <h1 className="font-bold">What's happening?</h1>
          <button className="border-2 rounded-xl px-2 font-semibold">
            SEE MORE
          </button>
        </div>
        <div className="flex">
          <div>
            <img
              className="rounded-lg"
              src="https://www.riotgames.com/darkroom/1000/1b1855161cb4f9d4e4313b5ee66a1d51:22a2f1969a060157c7412ba69917fdcf/projectl-evo1.png"
              alt=""
            />
          </div>

          <div className="w-1/2">
            {happeninList.map((list, index, typeIndex) => (
              <div className="bg-gray-400 mb-2 mx-3 flex flex-col justify-center px-2 rounded-md w-full h-24 hover:bg-gray-500 hover:border-2 hover:border-black hover:scale-0.9">
                <div className="">
                  <h3 key={index} className="font-semibold leading-3">
                    {list.title}
                  </h3>
                  <h3 key={typeIndex} className="leading-2">
                    {list.type}
                  </h3>
                </div>
                <div>
                  <img src={list.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default WhatsHappening;
