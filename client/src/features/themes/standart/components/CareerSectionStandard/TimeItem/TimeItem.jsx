import { IoAdd, IoCaretDown } from "react-icons/io5";
import { MdDelete, MdDone } from "react-icons/md";

export default function TimeItem() {
  return (
    <>
      <li className="mb-4 ms-4">
        <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <input
          type="text"
          placeholder="Type time..."
          name="time"
          className="outline-none bg-transparent mb-1 text-sm font-normal leading-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Type title..."
          className="block outline-none bg-transparent text-lg font-semibold text-gray-900"
        />
        {/* Text input */}
        <textarea
          name="textContent"
          placeholder="Type text..."
          className="w-full outline-none bg-transparent text-base font-normal text-gray-500"
        ></textarea>
        {/* Bold Text input */}
        <textarea
          name="textContentBold"
          placeholder="Type text..."
          className="w-full outline-none bg-transparent text-base font-bold"
        ></textarea>
        {/* List Item input */}
        <div className="flex items-center">
          <MdDone className="text-xl text-green-500" />
          <input
            type="text"
            name="listItem"
            placeholder="Type text..."
            className="py-2 px-2 bg-transparent outline-none"
          />
        </div>
        {/* Options for item content */}
        <div className="flex flex-wrap items-center my-3">
          <button className="flex items-center text-sm py-2 px-4 border border-gray-700 rounded-lg me-2 hover:bg-white hover:text-primaryBlue">
            <IoAdd className="text-xl me-2" />
            Text
          </button>
          <button className="flex items-center text-sm py-2 px-4 border border-gray-700 rounded-lg me-2 font-bold hover:bg-white hover:text-primaryBlue">
            <IoAdd className="text-xl me-2" />
            Bold Text
          </button>
          <button className="flex items-center text-sm py-2 px-4 border border-gray-700 rounded-lg me-2 hover:bg-white hover:text-primaryBlue">
            <IoAdd className="text-xl me-2" />
            List Item
          </button>
        </div>
        {/* Status */}
        <div className="flex mt-2">
          <button className="flex py-2 px-4 border border-gray-700 rounded-lg items-center text-sm">
            Status
            <IoCaretDown className="ms-2" />
          </button>
          {/* Status options */}
          <div className="hidden w-32 min-h-10 bg-white absolute z-30 -bottom-20 translate-y-1 rounded-lg">
            <button className="w-full flex h-10 items-center justify-start hover:bg-gray-100">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-4"></div>
              <p className="text-sm">Success</p>
            </button>
            <button className="w-full flex h-10 items-center justify-start hover:bg-gray-100">
              <div className="w-3 h-3 bg-strongRed rounded-full mx-4"></div>
              <p className="text-sm">Important</p>
            </button>
            <button className="w-full flex h-10 items-center justify-start hover:bg-gray-100">
              <div className="w-3 h-3 bg-gray-700 rounded-full mx-4"></div>
              <p className="text-sm">Normal</p>
            </button>
          </div>
        </div>
        {/* Delete Button */}
        <button className="py-2 px-4 flex items-center bg-strongRed text-white rounded-lg text-sm mt-4 hover:bg-red-700">
          Delete
          <MdDelete className="ms-2 text-xl" />
        </button>
      </li>
    </>
  );
}
