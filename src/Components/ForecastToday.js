import React from "react";

function ForecastToday() {
  return (
    <>
      <div className="div-main flex flex-row justify-evenly">
        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-8 border-yellow-300 rounded-full font-bold text-3xl">
            38.6<sup>°</sup>c
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            MAX TEMP (<sup>°</sup>C)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-8 border-yellow-300 rounded-full font-bold text-3xl">
            38.6<sup>°</sup>c
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            MIN TEMP (<sup>°</sup>C)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-8 border-yellow-300 rounded-full font-bold text-3xl">
            32mm
          </p>
          <p className="text-lg font-semibold text-white mt-3">
            AVG HUMIDITY (mm)
          </p>
        </div>

        <div className="div-containers flex flex-col items-center">
          <p className="inline-flex items-center justify-center w-32 h-32 border-8 border-yellow-300 rounded-full font-bold text-3xl">
            {/* YES //CHANGES TO BE MADE */}
            YES
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
