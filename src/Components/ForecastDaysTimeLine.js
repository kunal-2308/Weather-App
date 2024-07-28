import React from "react";

function ForecastDaysTimeLine(props) {
    const time = props.time.slice(11);
    console.log(time);
  return (
    <>
      <div className="main p-4 rounded">
        <img
          src={`http:${props.icon}`}
          alt="weather-img"
          className="w-12 h-12"
        />
        <p>{time}</p>
      </div>
    </>
  );
}

export default ForecastDaysTimeLine;
