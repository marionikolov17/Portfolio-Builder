import { IoAdd, IoWarning } from "react-icons/io5";
import { MdDelete, MdDone } from "react-icons/md";

export default function AboutSectionStandart() {
  return (
    <>
      {/* About Section Header */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm z-20">
        <div className="grow flex justify-start px-4 py-3">
          <h2 className="sm:text-xl font-bold">About Section</h2>
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
      {/* Info */}
      <div className="mt-4 px-4 flex flex-wrap max-w-full sm:max-w-max mb-1 items-center py-2 border text-sm bg-secondaryYellow me-2 rounded-lg text-supportingYellow">
        <IoWarning className="me-2 text-2xl"/>
        Warning: Add the most important info about you!
      </div>
      {/* Add-ons */}
      <div className="mt-8 flex flex-col items-center">
        <h3 className="font-medium">Add sections</h3>
        {/* Add button */}
        <button className="mt-4 w-[280px] sm:w-96 py-2 shadow rounded-lg bg-white flex items-center justify-center hover:bg-gray-100 hover:text-primaryBlue">
          <IoAdd className="text-2xl"/>
        </button>
        {/* Sections choice */}
        <div className="flex justify-center flex-wrap mt-4">
          {/* Choice */}
          <div className="flex items-center py-2 px-4 border border-gray-700 rounded-lg text-sm mx-2 font-bold hover:bg-white cursor-pointer mb-2">
            Bold Text
          </div>
          <div className="flex items-center py-2 px-4 border border-gray-700 rounded-lg text-sm mx-2 hover:bg-white cursor-pointer mb-2">
            Normal Text
          </div>
          <div className="flex items-center py-2 px-4 border border-gray-700 rounded-lg text-sm mx-2 hover:bg-white cursor-pointer mb-2">
            <MdDone className="me-2 text-green-500 text-xl"/>
            Choices
          </div>
        </div>
        {/* Different sections */}
        {/* Bold Text Section */}
        <div className="w-full sm:w-[70%] flex mt-4 bg-white rounded-lg overflow-hidden">
          <textarea name="" id="" placeholder="Type..." className="grow outline-none px-4 py-2 font-bold resize-none"></textarea>
          <div className="min-h-full flex items-start justify-center p-4">
            <MdDelete className="text-2xl text-strongRed cursor-pointer"/>
          </div>
        </div>
        {/* Normal Text Section */}
        <div className="w-full sm:w-[70%] flex mt-4 bg-white rounded-lg overflow-hidden">
          <textarea name="" id="" placeholder="Type..." className="grow outline-none px-4 py-2 resize-none"></textarea>
          <div className="min-h-full flex items-start justify-center p-4">
            <MdDelete className="text-2xl text-strongRed cursor-pointer"/>
          </div>
        </div>
        {/* Choice Section */}
        <div className="mt-4 w-full sm:w-[70%] flex flex-col bg-white overflow-hidden rounded-lg">
          {/* Choice container */}
          <div className="w-full flex items-center border-b">
            <MdDone className="ms-2 text-green-500 text-xl"/>
            <input type="text" className="grow bg-transparent outline-none px-2 py-2" placeholder="Type..." />
            <div className="min-h-full flex items-start justify-center p-4">
              <MdDelete className="text-2xl text-strongRed cursor-pointer"/>
            </div>
          </div>
          {/* Choice container */}
          <div className="w-full flex items-center border-b">
            <MdDone className="ms-2 text-green-500 text-xl"/>
            <input type="text" className="grow bg-transparent outline-none px-2 py-2" placeholder="Type..." />
            <div className="min-h-full flex items-start justify-center p-4">
              <MdDelete className="text-2xl text-strongRed cursor-pointer"/>
            </div>
          </div>
          {/* Add Choice */}
          <div className="w-full flex items-center justify-center py-2">
            <IoAdd className="text-2xl hover:text-primaryBlue cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
}
