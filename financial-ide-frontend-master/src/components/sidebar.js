import "./sidebar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import overviewicon from "../assets/overviewicon.svg";
import graphicon from "../assets/graphicon.svg";
import burnicon from "../assets/burnicon.svg";
import raiseicon from "../assets/raiseicon.svg";
import analyzeicon from "../assets/analyzeicon.svg";
import usericon from "../assets/usericon.svg";

const SideBar = () => {
  const [analyzeButtons, toggleAnalyzeButtons] = useState(true);

  return (
    
    <div className="sidebarcontainer ">
      
      {/*Logo*/}
      <h1 className=" text-white font-extrabold text-xs lg:text-2xl 2xl:text-4xl text-center pt-4 pr-1 h-1/6 flex-shrink-0">
        ZEROES
      </h1>

      {/*Buttons or Links*/}
      <div className="flex-shrink-0 h-4/6 flex-col">
        {/*Overview Button*/}
        <div className="flex flex-shrink-0 h-14">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={overviewicon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button className=" flex-shrink-0 hover:underline text-blue-custom">
              Overview
            </button>
          </div>
        </div>

        {/*Grow Button*/}
        <div className="flex flex-shrink-0 h-14">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={graphicon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button className=" flex-shrink-0 hover:underline text-blue-custom">
              Grow
            </button>
          </div>
        </div>

        {/*Burn Button*/}
        <div className="flex flex-shrink-0 h-14">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={burnicon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button className=" flex-shrink-0 hover:underline text-blue-custom">
              Burn
            </button>
          </div>
        </div>

        {/*Raise Button*/}
        <div className="flex flex-shrink-0 h-14">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={raiseicon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button className=" flex-shrink-0 hover:underline text-blue-custom">
              Raise
            </button>
          </div>
        </div>

        {/*Analyze*/}
        <div className="flex flex-shrink-0 h-14">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={analyzeicon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button
              className="flex-shrink-0 hover:underline text-blue-custom"
              onClick={() => toggleAnalyzeButtons(!analyzeButtons)}
            >
              Analyze
            </button>
          </div>
        </div>

        {/*Forecasting Goalcasting*/}
        <div
          className={
            analyzeButtons
              ? "flex flex-shrink-0 h-24 justify-end items-center"
              : "hidden"
          }
        >
          <div className="flex flex-col flex-shrink-0 h-24 w-3/4 border-l-2 justify-end border-blue-custom">
            <div className="flex flex-col flex-shrink-0 items-center h-12 w-4/6 pl-2 ">
              <Link
                to="/"
                className=" flex-shrink-0 hover:underline text-blue-custom pt-2"
              >
                Forecast
              </Link>
            </div>
            <div className="flex flex-col flex-shrink-0 items-center h-12 w-4/6 pl-2 pt-2">
              <Link
                to="/goalcast"
                className=" flex-shrink-0 hover:underline text-blue-custom"
              >
                Goalcast
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Profile*/}
      <div className="flex flex-shrink-0 h-1/6 justify-center items-end">
        <div className="flex flex-shrink-0 h-2/6 w-full border-t-2 border-blue-custom">
          <div className="flex flex-shrink-0 h-14 w-2/6 m-0 p-0 justify-end items-center pr-2">
            <img src={usericon} alt="" className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex flex-shrink-0 items-center h-14 w-4/6 pl-2 ">
            <button className=" flex-shrink-0 hover:underline text-blue-custom">
              MeliodasX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
