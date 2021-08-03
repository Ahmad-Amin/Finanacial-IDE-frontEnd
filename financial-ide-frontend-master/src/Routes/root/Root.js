import "./Root.css";

import { useState } from "react";

import SideBar from "../../components/sidebar";
import Topbar from "../../components/Topbar";
import uparrowicon from "../../assets/uparrow.svg";
import addicon from "../../assets/addicon.svg";
import Assumption from "../../components/Assumption";

const Root = () => {
  const [serialNo, setSerialNo] = useState(2);
  const [inputButton, toggleInputButton] = useState(true);
  const [outputButton, toggleOutputButton] = useState(true);
  const [assumptionList, setAssumptionList] = useState([
    <Assumption key={0} serialNo={1} />,
  ]);

  const addAssumption = (event) => {
    setSerialNo(serialNo + 1);
    setAssumptionList(
      assumptionList.concat(
        <Assumption key={assumptionList.length} serialNo={serialNo} />
      )
    );
  };

  return (
    <>
      <div className="flex flex-shrink-0 flex-row">
        <div className="sidebarcontainer">
          <SideBar />
        </div>
        <div className="flex flex-shrink-0 justify-end">
          <div className="flex flex-shrink-0 overflow-auto w-90s">
            <div className="mainwindowcontainer flex-col">
              <div className="flex flex-shrink-0 h-8p border-b-2">
                <Topbar />
              </div>
              <div className="flex flex-shrink-0 justify-center items-center min-h-20p border-b-2">
                <div className="flex flex-shrink-0 flex-col w-98p min-h-90p rounded-md my-4 bg-gray-100">
                  <div className="flex flex-shrink-0 w-full min-h-0 border-b-2 rounded-md border-gray-300">
                    <div className="flex flex-shrink-0 w-3/5 h-full items-center rounded-md">
                      <h1 className="font-nunito font-bold p-5">
                        Business Model Driver
                      </h1>
                    </div>
                    <div className="flex flex-shrink-0 w-2/5 h-full items-center rounded-md">
                      <h1 className="font-nunito font-bold p-5">Conditions</h1>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-full min-h-0 rounded-md">
                    {assumptionList}
                  </div>
                  <div className="flex flex-shrink-0 h-12 w-3/5 justify-start items-center">
                    <div className="flex flex-shrink-0 h-full pl-4 justify-start items-center">
                      <input
                        className="h-6 w-6"
                        type="image"
                        alt=""
                        src={addicon}
                        onClick={addAssumption}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 flex-col min-h-0 border-b-2">
                <div className="flex flex-shrink-0 w-full m-3 items-center justify-center">
                  <div className="flex flex-shrink-0 h-5/6 w-98p">
                    <div className="flex flex-shrink-0 h-full w-16 items-center justify-center">
                      <div className="flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center bg-gray-100">
                        <div className="flex flex-shrink-0 w-7 h-7 rounded-full items-center justify-center bg-white">
                          <input
                            className="h-4 w-4"
                            type="image"
                            alt=""
                            onClick={() => toggleInputButton(!inputButton)}
                            src={uparrowicon}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 h-full w-full items-center justify-start">
                      <h1 className="font-nunito font-bold text-xl">Input</h1>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    inputButton
                      ? "flex flex-shrink-0 min-h-0 w-98p ml-4 border-t-2"
                      : "hidden"
                  }
                >
                  <div className="flex flex-shrink-0 min-h-10s w-98p my-4 ml-2">
                    {/* Input Fields Go Here */}
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 flex-col min-h-0 border-b-2">
                <div className="flex flex-shrink-0 w-full m-3 items-center justify-center">
                  <div className="flex flex-shrink-0 h-5/6 w-98p">
                    <div className="flex flex-shrink-0 h-full w-16 items-center justify-center">
                      <div className="flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center bg-gray-100">
                        <div className="flex flex-shrink-0 w-7 h-7 rounded-full items-center justify-center bg-white">
                          <input
                            className="h-4 w-4"
                            type="image"
                            alt=""
                            onClick={() => toggleOutputButton(!outputButton)}
                            src={uparrowicon}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 h-full w-full items-center justify-start">
                      <h1 className="font-nunito font-bold text-xl">Output</h1>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    outputButton
                      ? "flex flex-shrink-0 min-h-0 w-98p ml-4 border-t-2"
                      : "hidden"
                  }
                >
                  <div className="flex flex-shrink-0 min-h-35s w-98p my-4 ml-2">
                    {/* Output Graphs Go Here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
