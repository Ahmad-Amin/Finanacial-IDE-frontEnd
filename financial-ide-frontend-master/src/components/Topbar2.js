import react,{useEffect, useState, Fragment} from 'react'
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";



const Topbar2 = () => {

    const [startDate, setStartDate] = useState(new Date());

    return(
        <Fragment>
            <div className="flex justify-around flex-wrap">
                <div className=" flex items-center justify-center ">
                    <h1 className=" font-nunito font-black text-2xl p-3 xl:text-3xl xl:p-5  mb-3" > Scenerio</h1>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6666 12.3334H1.33329C1.15648 12.3334 0.986907 12.4036 0.861883 12.5286C0.736858 12.6537 0.66662 12.8232 0.66662 13C0.66662 13.1769 0.736858 13.3464 0.861883 13.4715C0.986907 13.5965 1.15648 13.6667 1.33329 13.6667H10.6666C10.8434 13.6667 11.013 13.5965 11.138 13.4715C11.263 13.3464 11.3333 13.1769 11.3333 13C11.3333 12.8232 11.263 12.6537 11.138 12.5286C11.013 12.4036 10.8434 12.3334 10.6666 12.3334ZM1.33329 11H1.39329L4.17329 10.7467C4.47782 10.7164 4.76264 10.5822 4.97995 10.3667L10.98 4.36671C11.2128 4.12069 11.3387 3.79239 11.3299 3.45374C11.3212 3.11509 11.1786 2.79372 10.9333 2.56005L9.10662 0.733381C8.86821 0.509445 8.55581 0.380954 8.22884 0.372349C7.90187 0.363745 7.58314 0.475627 7.33329 0.686714L1.33329 6.68671C1.1178 6.90402 0.983623 7.18885 0.953287 7.49338L0.66662 10.2734C0.65764 10.371 0.67031 10.4695 0.703728 10.5616C0.737146 10.6538 0.790488 10.7375 0.859954 10.8067C0.922247 10.8685 0.996124 10.9174 1.07735 10.9506C1.15857 10.9837 1.24555 11.0006 1.33329 11ZM8.17995 1.66671L9.99995 3.48671L8.66662 4.78671L6.87995 3.00005L8.17995 1.66671ZM2.24662 7.60671L5.99995 3.88005L7.79995 5.68005L4.06662 9.41338L2.06662 9.60005L2.24662 7.60671Z" fill="#CDD7DF"/>
                    </svg>
                </div>
                <div className=" flex items-center justify-center space-x-5 xl:space-x-10">
                    <div className=" flex-shrink-0 ">
                        <input type="text" className=" w-full focus:outline-none border-2  mb-3 border-gray-300 font-nunito font-black text-xl"/>
                    </div>
                    <div className=" flex space-x-3 flex-wrap justify-center">
                        <div className=" flex justify-center items-center mb-3">
                            <label className="mr-2">Start:</label>
                            <div className=" flex border-2 border-gray-300 rounded p-1">
                                <svg width={25} height={25} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.285706 3.07142V8.32142C0.285706 8.69083 0.432453 9.04511 0.693664 9.30632C0.954875 9.56753 1.30915 9.71428 1.67856 9.71428H8.32142C8.69083 9.71428 9.04511 9.56753 9.30632 9.30632C9.56753 9.04511 9.71428 8.69083 9.71428 8.32142V3.07142H0.285706ZM7.25385 6.50042C7.39593 6.50042 7.53219 6.55686 7.63266 6.65733C7.73312 6.75779 7.78956 6.89405 7.78956 7.03613C7.78956 7.17821 7.73312 7.31448 7.63266 7.41494C7.53219 7.51541 7.39593 7.57185 7.25385 7.57185C7.11177 7.57185 6.97551 7.51541 6.87504 7.41494C6.77458 7.31448 6.71813 7.17821 6.71813 7.03613C6.71813 6.89405 6.77458 6.75779 6.87504 6.65733C6.97551 6.55686 7.11177 6.50042 7.25385 6.50042ZM5.00171 6.50042C5.14379 6.50042 5.28005 6.55686 5.38051 6.65733C5.48098 6.75779 5.53742 6.89405 5.53742 7.03613C5.53742 7.17821 5.48098 7.31448 5.38051 7.41494C5.28005 7.51541 5.14379 7.57185 5.00171 7.57185C4.85963 7.57185 4.72336 7.51541 4.6229 7.41494C4.52243 7.31448 4.46599 7.17821 4.46599 7.03613C4.46599 6.89405 4.52243 6.75779 4.6229 6.65733C4.72336 6.55686 4.85963 6.50042 5.00171 6.50042ZM7.25385 4.35756C7.39593 4.35756 7.53219 4.414 7.63266 4.51447C7.73312 4.61494 7.78956 4.7512 7.78956 4.89328C7.78956 5.03536 7.73312 5.17162 7.63266 5.27208C7.53219 5.37255 7.39593 5.42899 7.25385 5.42899C7.11177 5.42899 6.97551 5.37255 6.87504 5.27208C6.77458 5.17162 6.71813 5.03536 6.71813 4.89328C6.71813 4.7512 6.77458 4.61494 6.87504 4.51447C6.97551 4.414 7.11177 4.35756 7.25385 4.35756ZM5.00171 4.35756C5.14379 4.35756 5.28005 4.414 5.38051 4.51447C5.48098 4.61494 5.53742 4.7512 5.53742 4.89328C5.53742 5.03536 5.48098 5.17162 5.38051 5.27208C5.28005 5.37255 5.14379 5.42899 5.00171 5.42899C4.85963 5.42899 4.72336 5.37255 4.6229 5.27208C4.52243 5.17162 4.46599 5.03536 4.46599 4.89328C4.46599 4.7512 4.52243 4.61494 4.6229 4.51447C4.72336 4.414 4.85963 4.35756 5.00171 4.35756ZM2.74999 4.35756C2.89207 4.35756 3.02833 4.414 3.1288 4.51447C3.22926 4.61494 3.28571 4.7512 3.28571 4.89328C3.28571 5.03536 3.22926 5.17162 3.1288 5.27208C3.02833 5.37255 2.89207 5.42899 2.74999 5.42899C2.60791 5.42899 2.47165 5.37255 2.37118 5.27208C2.27072 5.17162 2.21428 5.03536 2.21428 4.89328C2.21428 4.7512 2.27072 4.61494 2.37118 4.51447C2.47165 4.414 2.60791 4.35756 2.74999 4.35756ZM1.67856 0.285706C1.30915 0.285706 0.954875 0.432453 0.693664 0.693664C0.432453 0.954875 0.285706 1.30915 0.285706 1.67856V2.42856H9.71428V1.67856C9.71428 1.30915 9.56753 0.954875 9.30632 0.693664C9.04511 0.432453 8.69083 0.285706 8.32142 0.285706H1.67856Z" fill="#CDD7DF" />
                                </svg>

                                <div className="">
                                    <DatePicker
                                        className="focus:outline-none pl-2"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="MMMM, yyyy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center mb-3 ">
                            <label className="mr-2">End:</label>
                            <div className=" flex border-2 border-gray-300 rounded p-1">
                                <svg width={25} height={25} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.285706 3.07142V8.32142C0.285706 8.69083 0.432453 9.04511 0.693664 9.30632C0.954875 9.56753 1.30915 9.71428 1.67856 9.71428H8.32142C8.69083 9.71428 9.04511 9.56753 9.30632 9.30632C9.56753 9.04511 9.71428 8.69083 9.71428 8.32142V3.07142H0.285706ZM7.25385 6.50042C7.39593 6.50042 7.53219 6.55686 7.63266 6.65733C7.73312 6.75779 7.78956 6.89405 7.78956 7.03613C7.78956 7.17821 7.73312 7.31448 7.63266 7.41494C7.53219 7.51541 7.39593 7.57185 7.25385 7.57185C7.11177 7.57185 6.97551 7.51541 6.87504 7.41494C6.77458 7.31448 6.71813 7.17821 6.71813 7.03613C6.71813 6.89405 6.77458 6.75779 6.87504 6.65733C6.97551 6.55686 7.11177 6.50042 7.25385 6.50042ZM5.00171 6.50042C5.14379 6.50042 5.28005 6.55686 5.38051 6.65733C5.48098 6.75779 5.53742 6.89405 5.53742 7.03613C5.53742 7.17821 5.48098 7.31448 5.38051 7.41494C5.28005 7.51541 5.14379 7.57185 5.00171 7.57185C4.85963 7.57185 4.72336 7.51541 4.6229 7.41494C4.52243 7.31448 4.46599 7.17821 4.46599 7.03613C4.46599 6.89405 4.52243 6.75779 4.6229 6.65733C4.72336 6.55686 4.85963 6.50042 5.00171 6.50042ZM7.25385 4.35756C7.39593 4.35756 7.53219 4.414 7.63266 4.51447C7.73312 4.61494 7.78956 4.7512 7.78956 4.89328C7.78956 5.03536 7.73312 5.17162 7.63266 5.27208C7.53219 5.37255 7.39593 5.42899 7.25385 5.42899C7.11177 5.42899 6.97551 5.37255 6.87504 5.27208C6.77458 5.17162 6.71813 5.03536 6.71813 4.89328C6.71813 4.7512 6.77458 4.61494 6.87504 4.51447C6.97551 4.414 7.11177 4.35756 7.25385 4.35756ZM5.00171 4.35756C5.14379 4.35756 5.28005 4.414 5.38051 4.51447C5.48098 4.61494 5.53742 4.7512 5.53742 4.89328C5.53742 5.03536 5.48098 5.17162 5.38051 5.27208C5.28005 5.37255 5.14379 5.42899 5.00171 5.42899C4.85963 5.42899 4.72336 5.37255 4.6229 5.27208C4.52243 5.17162 4.46599 5.03536 4.46599 4.89328C4.46599 4.7512 4.52243 4.61494 4.6229 4.51447C4.72336 4.414 4.85963 4.35756 5.00171 4.35756ZM2.74999 4.35756C2.89207 4.35756 3.02833 4.414 3.1288 4.51447C3.22926 4.61494 3.28571 4.7512 3.28571 4.89328C3.28571 5.03536 3.22926 5.17162 3.1288 5.27208C3.02833 5.37255 2.89207 5.42899 2.74999 5.42899C2.60791 5.42899 2.47165 5.37255 2.37118 5.27208C2.27072 5.17162 2.21428 5.03536 2.21428 4.89328C2.21428 4.7512 2.27072 4.61494 2.37118 4.51447C2.47165 4.414 2.60791 4.35756 2.74999 4.35756ZM1.67856 0.285706C1.30915 0.285706 0.954875 0.432453 0.693664 0.693664C0.432453 0.954875 0.285706 1.30915 0.285706 1.67856V2.42856H9.71428V1.67856C9.71428 1.30915 9.56753 0.954875 9.30632 0.693664C9.04511 0.432453 8.69083 0.285706 8.32142 0.285706H1.67856Z" fill="#CDD7DF" />
                                </svg>

                                <div className="">
                                    <DatePicker
                                        className="focus:outline-none pl-2"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="MMMM, yyyy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center mr-5 md:mr-0 space-x-2 xl:space-x-5  mb-3  ">
                    <div>
                        <button className="bg-blue-800 hover:bg-blue-500 text-white font-normal xl:font-bold px-2 py-1 2xl:py-3 2xl:px-5 border border-blue-900 rounded font-nunito">Simulate</button>
                    </div>
                    <div>
                        <button className=" flex justify-end items-center bg-gray-100 py-1 px-2 2xl:py-3 2xl:px-5 rounded ">
                            <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.75 8.775C9.30854 8.775 8.899 8.92085 8.56968 9.16717L5.44336 6.90542C5.48559 6.63679 5.48559 6.36321 5.44336 6.09458L8.56968 3.83283C8.899 4.07915 9.30854 4.225 9.75 4.225C10.8396 4.225 11.725 3.3396 11.725 2.25C11.725 1.1604 10.8396 0.275 9.75 0.275C8.6604 0.275 7.775 1.1604 7.775 2.25C7.775 2.41583 7.79492 2.57586 7.8338 2.72986L4.89271 4.85945C4.41615 4.27484 3.68964 3.9 2.875 3.9C1.43852 3.9 0.275 5.06352 0.275 6.5C0.275 7.93648 1.43852 9.1 2.875 9.1C3.68964 9.1 4.41615 8.72515 4.89271 8.14055L7.83381 10.2702C7.79492 10.4245 7.775 10.5855 7.775 10.75C7.775 11.8396 8.6604 12.725 9.75 12.725C10.8396 12.725 11.725 11.8396 11.725 10.75C11.725 9.6604 10.8396 8.775 9.75 8.775ZM9.75 1.5375C10.1432 1.5375 10.4625 1.85679 10.4625 2.25C10.4625 2.64321 10.1432 2.9625 9.75 2.9625C9.35679 2.9625 9.0375 2.64321 9.0375 2.25C9.0375 1.85679 9.35679 1.5375 9.75 1.5375ZM2.875 7.775C2.17242 7.775 1.6 7.20258 1.6 6.5C1.6 5.79742 2.17242 5.225 2.875 5.225C3.57758 5.225 4.15 5.79742 4.15 6.5C4.15 7.20258 3.57758 7.775 2.875 7.775ZM9.75 11.4625C9.35679 11.4625 9.0375 11.1432 9.0375 10.75C9.0375 10.3568 9.35679 10.0375 9.75 10.0375C10.1432 10.0375 10.4625 10.3568 10.4625 10.75C10.4625 11.1432 10.1432 11.4625 9.75 11.4625Z" fill="#1D62A2" stroke="#1D62A2" strokeWidth="0.2" />
                            </svg>
                        <p className=" ">Share</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default Topbar2;