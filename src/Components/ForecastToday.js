import React from "react";

function ForecastToday(props) {
  const response = props.response || {};
  const forecast = response.forecast || {};
  const forecastday = forecast.forecastday ? forecast.forecastday[0] : {};
  const day = forecastday.day || {};

  return (
    <>
      <div className="div-main flex flex-row justify-evenly">
        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-4 border-yellow-300 rounded-full font-bold text-3xl">
            {day.maxtemp_c ? day.maxtemp_c : '--'}<sup>°</sup>c
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            MAX TEMP (<sup>°</sup>C)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-4 border-yellow-300 rounded-full font-bold text-3xl">
            {day.mintemp_c ? day.mintemp_c : '--'}<sup>°</sup>c
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            MIN TEMP (<sup>°</sup>C)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-4 border-yellow-300 rounded-full font-bold text-3xl">
            {day.avghumidity ? day.avghumidity : '--'}mm
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            AVG HUMIDITY (mm)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-4 border-yellow-300 rounded-full font-bold text-3xl">
            {day.daily_will_it_rain ? "YES" : "NO"}
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            RAIN EXPECTANCE
          </p>
        </div>
      </div>
    </>
  );
}

export default ForecastToday;
