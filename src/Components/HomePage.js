import React from "react";
import CurrentCard from "./CurrentCard";
import ForecastToday from "./ForecastToday";

function HomePage() {
  return (
    <>
      {/* HERO SECTION IMG START*/}
      <div className="Hero-img max-w-full mt-1 md:mt-20 flex justify-center flex-col md:flex-row md:justify-evenly">
        <div className="text-div text-center mb-2 md:flex md:justify-center md:items-center">
          <p className=" invisible md:visible text-lg font-bold text-white md:text-4xl md:font-extrabold ">
            Welcome, <br />
            To The 3 <sup>rd</sup> Best Ranked Weather App <br />
            Across India!
          </p>
          <p className=" text-lg font-bold text-gray-700 md:hidden">
            Welcome, To The 3 <sup>rd</sup> Best Ranked Weather app! <br />
            Across India!
          </p>
        </div>
        <div className="img-div md:ml-5">
          <img
            src="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=1200"
            alt="HeroImg"
            className=" overfill"
          />
        </div>
      </div>
      {/* HERO SECTION IMG END*/}

      {/* CURRENT CARD START*/}
      <div className="current-div flex justify-center items-center m-14 flex-col">
        <CurrentCard />
      </div>
      {/* CURRENT CARD END*/}

      {/* TODAY FORECAST SECTION START */}
      <div className="div-3 flex flex-col mt-10">
        <div className="title-container flex justify-center">
          <p className="text-3xl font-bold border-b-4 text-white border-slate-600 rounded-lg">TODAY'S FORECAST</p>
        </div>
        <div className="info-container mt-10">
          <ForecastToday />
        </div>
      </div>
    </>
  );
}

export default HomePage;
