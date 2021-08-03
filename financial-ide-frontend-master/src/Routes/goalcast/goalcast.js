import "./goalcast.css";

import SideBar from "../../components/sidebar"; //This is the sidebar that will remain constant for all pages.
//You do not need to worry about the sidebar, I will maintain it and add logic as necessary
//Start from the area mentioned below and add components and logic as necessary
//Remove these comments if you like

const GoalCast = () => {
  return (
    <>
      <div className="flex flex-shrink-0 flex-row">
        <div className="sidebarcontainer">
          <SideBar />
        </div>
        <div className="flex flex-shrink-0 justify-end">
          <div className="flex flex-shrink-0 overflow-auto w-90s">
            <div className="mainwindowcontainer flex-col">
              {/* Start From Here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalCast;
