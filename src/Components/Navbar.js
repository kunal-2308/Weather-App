import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MainContext from "../Context/MainContext";
function Navbar() {
  let context = useContext(MainContext);
  let {setLocation} = context;

  let data = "";

  let setInput = (e) =>{
    e.preventDefault();
    data = e.target.value;
  }

  console.log(data);

  let setData = (e)=>{
    e.preventDefault();
    setLocation(data);
  }

  
  return (
    <>
      <div className="main-container bg-white max-w-full h-16 flex justify-around px-4 md:pd-4 items-center">
        <Link to="HomePage">
          <div className="div-title text-2xl font-bold text-sky-950">
          Paus पाणी
          </div>
        </Link>
        <div className="list-items">
          <ul className="hidden md:flex font-bold text-sky-950">
            <Link to="HomePage">
              <li className="px-2">Home</li>
            </Link>
            <Link to="Forecast">
              <li className="px-2">Forecast</li>
            </Link>
            <Link to="Alerts">
              <li className="px-2">Alerts</li>
            </Link>
          </ul>
        </div>

        <div className="input-div invisible md:visible ">
          <label className="form-control w-full max-w-xs flex flex-row justify-center items-center">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={setInput}/>
            <button className="btn btn-sm h-12 mx-3" onClick={setData}>Search</button>
          </label>
        </div>

        <div className="end-div md:hidden">
          <Link to="/" className="text-4xl text-sky-950">
            &#8801;
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
