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
    <div className="flex flex-shrink-0 h-full w-full">
      <div className="flex flex-shrink-0 w-1/5 h-full">
        <div
          className={
            editScenario
              ? "hidden"
              : "flex flex-shrink-0 w-3/4 whitespace-nowrap overflow-hidden items-center justify-start"
          }
        >
          <h1 className="font-nunito font-black text-4xl p-5">
            {scenarioName}
          </h1>
        </div>
        <div
          className={
            editScenario
              ? "flex flex-shrink-0 w-3/4 items-center justify-start pl-5"
              : "hidden"
          }
        >
          <input
            type="text"
            value={scenarioName}
            className="h-4/5 w-full focus:outline-none border-b-2 border-gray-300 font-nunito font-black text-4xl"
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
      <div className="flex flex-shrink-0 w-1/5 h-full justify-end items-center pr-4">
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
        <div className="flex flex-shrink-0 w-4/12 h-full items-center">
          <label className="flex flex-shrink-0 h-1/2 w-98p rounded-md items-center justify-center border-1">
            <div className="flex flex-shrink-0 w-2/6 h-full items-center pl-4">
              <img src={calendaricon} alt="" className="h-6 w-6" />
            </div>
            <div className="flex flex-shrink-0 w-4/6 h-full items-center justify-end">
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
      <div className="flex flex-shrink-0 w-1/5 h-full">
        <div className="flex flex-shrink-0 w-1/2 h-full items-center justify-center">
          <button class="bg-blue-800 hover:bg-blue-500 text-white font-bold w-40 py-2 px-4 border border-blue-900 rounded font-nunito">
            Simulate
          </button>
        </div>
        <div className="flex flex-shrink-0 w-1/2 h-full items-center justify-start">
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
    </div>
  );
};

export default Topbar;
