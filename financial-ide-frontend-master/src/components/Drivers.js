import { useState } from "react";
import Select from "react-select";

const Drivers = (props) => {
  const serialNo = props.serialNo;
  const atomicValues = [
    { key: "1", value: "1", label: "Price Tiers" },
    { key: "2", value: "2", label: "Facebook" },
  ];
  const [fieldValue,setFieldValue] = useState(0);  
  return (
    <div className="flex flex-shrink-0 w-full min-h-10p py-6 bg-gray-100">
      <div className="flex flex-shrink-0 w-5p items-center justify-center">
        <div className="flex flex-shrink-0 w-6 h-6 rounded-full items-center justify-center font-nunito bg-green-custom">
            {serialNo}
        </div>
      </div>
      <div className="flex flex-shrink-0 w-20p items-center h-full">
            <Select
                className="h-full w-full"
                isClearable
                isSearchable
                name="Select Value"
                options={atomicValues}
                placeholder="Select..."
            />
        </div>
        <div className="flex flex-shrink-0 w-10p items-center justify-center h-full">
            <div className="flex flex-shrink-0 w-1/3 h-5/6 rounded-sm justify-center items-center font-nunito border-1 bg-white border-gray-300">
                <h6 className="font-bold">=</h6>
            </div>
        </div>
        <div className="flex flex-shrink-0 w-20p items-center justify-center h-full">
        <input
            type="text"
            value={fieldValue}
            className="h-full w-full focus:outline-none pl-2 border-1 border-gray-300 font-nunito"
            onChange={(e) => setFieldValue(e.target.value)}
            onBlur={fieldValue}
          />
        </div>

    </div>
  );
};

export default Drivers;
