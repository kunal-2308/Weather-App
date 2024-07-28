import React from "react";
import moon from "../moon.gif";
import sun from "../sun.gif";
import windI from "../wind.gif";
import humidityI from "../humidity.gif";
import preceI from "../precipitate.gif";
import chillI from "../snow.gif";
// REMOVE ONCE DONE FETCHING
import cloud from "../rainCloud.gif";

function CurrentCard(props) {
  // Destructure with default values
  const { location = {}, current = {} } = props.response || {};
  const {
    condition = {},
    is_day: isDay = 1,
    temp_c: temperature = 0,
    wind_mph: windSpeed = 0,
    humidity = 0,
    precip_mm: precipitation = 0,
    feelslike_c: windChill = 0,
  } = current;

  const date = location.localtime ? location.localtime.slice(0, 10) : "";

  return (
    <>
      <div className="p1-container md:w-[700px] bg-white rounded-lg">
        <div className="card-container">
          <div className="div-1 flex flex-row justify-between items-center p-4">
            <p className="text-center font-bold">{date}</p>
            <div className="div-C text-center mt-2">
              <p className="text-4xl font-bold text-black">{location.name}</p>
              <p className="mt-1 text-lg">{location.region}</p>
            </div>
            <img
              className="w-12 h-12"
              src={isDay ? sun : moon}
              alt="isDayLogo"
            />
          </div>
        </div>

        <div className="main-div flex items-center justify-center">
          <div className="card-2 justify-center mt-3">
            <p className="font-extrabold text-5xl">
              {temperature}
              <sup>°</sup>C
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="p2-container md:w-[700px] bg-white rounded-lg mt-7">
          <div className="card-container flex flex-col justify-center items-center">
            <img
              src={`http:${condition.icon}`}
              alt="Logo"
              className="h-[80px]"
            />
            <p className="text-xl mt-3 font-bold">Conditions</p>
            <p className="mt-1 text-lg">{condition.text}</p>
          </div>
        </div>

        <div className="divider divider-start p-4 text-black font-semibold">
          Other Details
        </div>

        {/* LOWER-PART OTHER DETAILS */}
        <div className="div-3 flex flex-row justify-around pl-3">
          <div className="p-2 flex flex-col justify-center items-center">
            <img src={windI} alt="Wind Icon" />
            <p className="font-bold mt-5 text-xl text-slate-900">
              {windSpeed} mpH
            </p>
            <p className="font-semibold">WIND</p>
          </div>

          <div className="p-3 flex flex-col justify-center items-center">
            <img src={humidityI} alt="Humidity Icon" className="h-[38px]" />
            <p className="font-bold mt-7 text-xl text-slate-900">
              {humidity} %
            </p>
            <p className="font-semibold">HUMIDITY</p>
          </div>

          <div className="p-4 flex flex-col justify-center items-center">
            <img src={preceI} alt="Precipitation Icon" />
            <p className="font-bold mt-4 text-xl text-slate-900">
              {precipitation} mm
            </p>
            <p className="font-semibold">PRECIPITATION</p>
          </div>

          <div className="p-5 flex flex-col justify-center items-center">
            <img src={chillI} alt="Wind Chill Icon" />
            <p className="font-bold mt-4 text-xl text-slate-900">
              {windChill}
              <sup>°</sup>C
            </p>
            <p className="font-semibold">WIND CHILL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCard;
