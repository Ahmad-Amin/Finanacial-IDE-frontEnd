import Conditions from "./Conditions";
import Drivers from "./Drivers";

const Assumption = (props) => {
  const serialNo = props.serialNo;
  return (
    <div className="flex flex-shrink-0 w-full min-h-0 bg-gray-100">
      <div className="flex flex-shrink-0 flex-col w-3/5 min-h-0 rounded-md">
        <Drivers serialNo={serialNo} />
      </div>
      <div className="flex flex-shrink-0 flex-col w-2/5 min-h-0 rounded-md">
        <Conditions />
      </div>
    </div>
  );
};

export default Assumption;
