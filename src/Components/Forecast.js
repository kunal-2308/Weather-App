import React, { useState, useContext } from "react";
import TimeLineCard from "./TimeLineCard";
import moon from "../moon.gif";
import sun from "../sun.gif";
import ForecastDaysTimeLine from "./ForecastDaysTimeLine";
import MainContext from "../Context/MainContext";

function Forecast() {
  const { response, setDays } = useContext(MainContext);
  const [inputDays, setInputDays] = useState("");

  if (!response) return <p>Loading...</p>; // Handle case where response is not yet available

  const { current, forecast } = response;
  const isDay = current ? current.is_day : 0;
  const hours = forecast.forecastday[0]?.hour || [];
  const date = response.location?.localtime ? response.location.localtime.slice(0, 10) : '';
  const forecastDays = forecast.forecastday.slice(1) || [];

  const handleSearch = () => {
    const days = parseInt(inputDays, 10);
    if (!isNaN(days) && days > 0) {
      setDays(days);
    }
  };

  return (
    <>
      <div className="main-div flex flex-col justify-center items-center">
        <div className="main-timeLine-container md:w-[1200px] flex justify-center mt-28 flex-col bg-white rounded-lg">
          {/* UPPER CONTAINER P1 START*/}
          <div className="card-container">
            <div className="div-1 flex flex-row justify-between items-center p-4">
              <p className="text-center font-bold">{date}</p>
              <div className="div-C text-center mt-2">
                <p className="text-4xl font-bold text-black">
                  {response.location?.name || 'Location'}
                </p>
                <p className="mt-1 text-lg">{response.location?.country || 'Country'}</p>
              </div>
              <img
                className="w-12 h-12"
                src={isDay === 1 ? sun : moon}
                alt="Day/Night"
              />
            </div>
          </div>
          {/* UPPER CONTAINER P1 END*/}

          <div className="divider">WEATHER TIMELINE</div>

          {/* UPPER CONTAINER P2 START*/}
          <div
            className={`second-container flex ${
              hours.length > 11 ? "overflow-x-auto" : ""
            }`}
          >
            {hours.map((element, index) => (
              <TimeLineCard
                key={index}
                icon={element.condition.icon}
                time={element.time}
              />
            ))}
          </div>
          {/* UPPER CONTAINER P2 END*/}
        </div>

        {/* INPUT SECTION FOR NUMBER OF FORECAST DAYS START */}
        <div className="container-div flex flex-row items-center mt-24 justify-center">
          <div className="search-input">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="number"
                value={inputDays}
                onChange={(e) => setInputDays(e.target.value)}
                className="grow"
                placeholder="Enter No. of days for forecast"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div className="butt-div ml-2">
            <button onClick={handleSearch} className="btn btn-outline">Search</button>
          </div>
        </div>
        {/* INPUT SECTION FOR NUMBER OF FORECAST DAYS END */}

        <div className="info mt-24">
          <p className="text-3xl font-bold text-white border-b-4 border-yellow-500 rounded-lg">NEXT FORECAST</p>
        </div>

        {/* NEW FORECAST FOR ENTERED DAYS : START */}
        <div className="div-container space-y-4 mt-10">
          {forecastDays.map((element, index) => {
            let dateI = element.date;
            return (
              <div
                key={index}
                className="flex flex-col md:w-[1200px] mx-auto justify-center"
              >
                <div className="badge badge-lg bg-white flex items-center pt-2 mb-2">
                  <h2 className="text-xl font-semibold mb-2">{dateI}</h2>
                </div>

                <div
                  className={`second-container flex overflow-x-auto bg-white p-4 rounded-md shadow-md space-x-4 ${
                    element.hour.length > 11 ? "overflow-x-auto" : ""
                  }`}
                >
                  {element.hour.map((hours, hourIndex) => (
                    <div key={hourIndex} className="flex flex-col items-center">
                      <ForecastDaysTimeLine
                        icon={hours.condition.icon}
                        time={hours.time}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {/* NEW FORECAST FOR ENTERED DAYS : END */}
      </div>
    </>
  );
}

export default Forecast;
