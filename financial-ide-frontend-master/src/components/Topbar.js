import "./Topbar.css";
import "react-datepicker/dist/react-datepicker.css";

import editicon from "../assets/editicon.svg";
import calendaricon from "../assets/calendaricon.svg";
import shareicon from "../assets/shareicon.svg";

import Select from "react-select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Topbar = () => {
  const [scenarioName, setScenarioName] = useState("Scenario 1");
  const [editScenario, toggleEditScenario] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const scenarioNameRef = useRef(null);

  const scenarios = [
    { key: "1", value: "1", label: "Scenario Placeholder" },
    { key: "2", value: "2", label: "Scenario Placeholder 2" },
  ];

  useEffect(() => {
    scenarioNameRef.current.focus();
  }, [editScenario]);

  return (
    <div className="flex  w-full">
      <div className="flex flex-shrink-0 w-1/5 h-full">
        <div
          className={
            editScenario
              ? "hidden"
              : "flex flex-shrink-0 w-2/4 lg:w-3/4 whitespace-nowrap overflow-hidden items-center justify-start"
          }
        >
          <h1 className="font-nunito font-black text-lg md:text-xl xl:text-3xl p-5">
            {scenarioName}
          </h1>
        </div>
        <div
          className={
            editScenario
              ? "flex flex-shrink-0 w-2/4 xl:w-3/4 items-center justify-start pl-1 xl:pl-5"
              : "hidden"
          }
        >
          <input
            type="text"
            value={scenarioName}
            className="h-4/5 w-full focus:outline-none border-2 border-gray-300 font-nunito font-black text-xl xl:text-4xl"
            ref={scenarioNameRef}
            onChange={(e) => setScenarioName(e.target.value)}
            onBlur={() => toggleEditScenario(!editScenario)}
          />
        </div>
        <div className="flex flex-shrink-0 min-w-0 items-center justify-start pl-2">
          <input
            className="h-4 w-4"
            type="image"
            alt=""
            src={editicon}
            onClick={() => toggleEditScenario(!editScenario)}
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 w-3/12 xl:w-1/5 h-full justify-start xl:justify-end items-center pr-4">
        <div className="flex flex-shrink-0 h-1/2 w-3/4">
          <Select
            className="h-full w-full"
            isClearable
            isSearchable
            name="Select Scenario"
            options={scenarios}
            placeholder="Select Scenario..."
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 w-2/5 h-full">
        <div className="flex flex-shrink-0 w-1/12 h-full pl-4 items-center justify-center">
            <p className="font-semibold">Start</p>
        </div>
        <div className="flex flex-shrink-0 w-3/12 xl:w-4/12 h-full items-center">
          <label className="flex flex-shrink-0 h-1/2 w-98p rounded-md items-center justify-center border-1">
            <div className="flex flex-shrink-0 w-2/6 h-full items-center pl-4">
              <img src={calendaricon} alt="" className="h-6 w-3 xl:w-6" />
            </div>
            <div className="flex flex-shrink-0 w-2/12 xl:w-4/6 h-full items-center justify-end ">
              <DatePicker
                className="focus:outline-none pl-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM, yyyy"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-shrink-0 w-1/12 h-full pl-5 items-center justify-center">
            <p className="font-semibold">End</p>
        </div>
        <div className="flex flex-shrink-0 w-4/12 h-full items-center">
          <label className="flex flex-shrink-0 h-1/2 w-98p rounded-md items-center justify-center border-1">
            <div className="flex flex-shrink-0 w-2/6 h-full items-center pl-4">
              <img src={calendaricon} alt="" className="h-6 w-6" />
            </div>
            <div className="flex flex-shrink-0 w-4/6 h-full items-center justify-end">
              <DatePicker
                className="focus:outline-none pl-2"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MMMM, yyyy"
              />
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-shrink-0 w-1/5 h-full flex-wrap">
        <div className="flex flex-shrink-0 w-1/2 h-full items-center justify-center flex-wrap">
          <button class="bg-blue-800 hover:bg-blue-500 text-white font-bold w-40 py-2 px-4 border border-blue-900 rounded font-nunito">
            Simulate
          </button>
        </div>
        <div className="flex w-1/2 h-full items-center justify-start flex-wrap">
          <button class="flex flex-row bg-transparent hover:underline text-blue-800 font-semibold w-32 py-2 px-4 border-1 rounded">
              <div className="flex flex-shrink-0 w-2/6 items-center justify-start">
                <img src={shareicon} alt="" className="h-6 w-6" />
              </div>
              <div className="flex flex-shrink-0 w-4/6 items-center justify-center">
                Share
              </div>
          </button>
        </div>
      </div>

      {/* <div className=" flex flex-wrap space-x-5">
        <button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-900 rounded font-nunito">Simulate</button>
        <button className=" flex justify-end items-center bg-gray-100 py-2 px-4 ">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 8.775C9.30854 8.775 8.899 8.92085 8.56968 9.16717L5.44336 6.90542C5.48559 6.63679 5.48559 6.36321 5.44336 6.09458L8.56968 3.83283C8.899 4.07915 9.30854 4.225 9.75 4.225C10.8396 4.225 11.725 3.3396 11.725 2.25C11.725 1.1604 10.8396 0.275 9.75 0.275C8.6604 0.275 7.775 1.1604 7.775 2.25C7.775 2.41583 7.79492 2.57586 7.8338 2.72986L4.89271 4.85945C4.41615 4.27484 3.68964 3.9 2.875 3.9C1.43852 3.9 0.275 5.06352 0.275 6.5C0.275 7.93648 1.43852 9.1 2.875 9.1C3.68964 9.1 4.41615 8.72515 4.89271 8.14055L7.83381 10.2702C7.79492 10.4245 7.775 10.5855 7.775 10.75C7.775 11.8396 8.6604 12.725 9.75 12.725C10.8396 12.725 11.725 11.8396 11.725 10.75C11.725 9.6604 10.8396 8.775 9.75 8.775ZM9.75 1.5375C10.1432 1.5375 10.4625 1.85679 10.4625 2.25C10.4625 2.64321 10.1432 2.9625 9.75 2.9625C9.35679 2.9625 9.0375 2.64321 9.0375 2.25C9.0375 1.85679 9.35679 1.5375 9.75 1.5375ZM2.875 7.775C2.17242 7.775 1.6 7.20258 1.6 6.5C1.6 5.79742 2.17242 5.225 2.875 5.225C3.57758 5.225 4.15 5.79742 4.15 6.5C4.15 7.20258 3.57758 7.775 2.875 7.775ZM9.75 11.4625C9.35679 11.4625 9.0375 11.1432 9.0375 10.75C9.0375 10.3568 9.35679 10.0375 9.75 10.0375C10.1432 10.0375 10.4625 10.3568 10.4625 10.75C10.4625 11.1432 10.1432 11.4625 9.75 11.4625Z" fill="#1D62A2" stroke="#1D62A2" stroke-width="0.2"/>
          </svg>
          <p className=" ">Share</p>
        </button>
      </div> */}
    </div>
  );
};

export default Topbar;
