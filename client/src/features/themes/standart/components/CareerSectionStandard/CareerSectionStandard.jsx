import { IoAdd } from "react-icons/io5";
import TimeItem from "./TimeItem/TimeItem";

export default function CareerSectionStandard() {
  return (
    <>
      {/* Career Section Header */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm z-20">
        <div className="grow flex justify-start px-4 py-3">
          <h2 className="sm:text-xl font-bold">Career Section</h2>
        </div>
        <div className="grow flex justify-end px-4 py-3">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">
              Visible
            </span>
          </label>
        </div>
      </div>
      <h3 className="font-bold text-xl text-center my-8">Timeline</h3>
      {/* Career timeline editor */}
      <div className="flex flex-col items-center px-4">
        <ol className="relative border-s-4 border-gray-700 dark:border-gray-700 sm:w-[600px] max-w-[800px]">
            {/* Time Item */}
            <TimeItem />
        </ol>
        {/* Add new item button */}
        <button className="mt-4 py-2 px-4 text-sm flex items-center bg-white rounded-lg shadow hover:text-primaryBlue hover:bg-gray-100">
            <IoAdd className="text-lg me-2"/>
            Add new item
        </button>
      </div>
    </>
  );
}