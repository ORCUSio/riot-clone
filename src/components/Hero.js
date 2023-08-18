import React from "react";

const Hero = () => {
  return (
    <div className="w-96 text-center my-32 ml-16">
      <div>
        <div className="leading-10  text-5xl mb-8">
          VALORANT <br /> CHAMPIONS <br />{" "}
          <div className="bg-yellow-100 p-0">LOS ANGLES</div>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2">THE ACTION STARTS NOW!</h2>
          <p className="text-sm">
            Tune in as 16 of the best teams from around the world battle <br />
            for the ultimate title of global VALORANT Champions.
          </p>
        </div>

        <button className="text-lg font-semibold bg-red-50 px-2 rounded-xl ">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
