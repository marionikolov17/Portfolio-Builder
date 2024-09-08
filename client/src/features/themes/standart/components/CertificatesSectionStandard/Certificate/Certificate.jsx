import { CiEdit, CiImageOn } from "react-icons/ci";
import { MdOutlineDelete, MdOutlineDragIndicator } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

export default function Certificate() {
  return (
    <>
      <div className="mt-8 w-full lg:w-[70%] min-h-14 bg-white rounded-lg shadow overflow-hidden">
        {/* Header info and action buttons */}
        <div className="flex h-14 items-center">
          <div className="flex grow justify-start items-center h-full">
            {/* Certificate image */}
            <div className="w-20 h-full flex overflow-hidden">
              <img
                src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
                className="object-cover"
                alt="certificate image"
              />
            </div>
            {/* Certificate name */}
            <h4 className="ms-2 font-bold">ReactJS - June 2024</h4>
          </div>
          <div className="flex grow justify-end items-center h-full">
            {/* Buttons */}
            <div className="grow flex justify-end items-center">
              <CiEdit className="text-3xl mx-2 cursor-pointer text-primaryBlue" />
              <MdOutlineDelete className="text-3xl mx-2 cursor-pointer text-strongRed" />
              <MdOutlineDragIndicator className="text-3xl mx-2 cursor-pointer text-slate-400" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <form className="w-full px-4 pb-4">
            {/* Certificate image upload */}
            <h4 className="font-bold mt-4">Image</h4>
            <div className="mt-2 h-32 w-32 border border-gray-900/25 border-dashed rounded-lg flex flex-col items-center justify-center">
              <CiImageOn className="text-3xl" />
              <label
                htmlFor=""
                className="text-primaryBlue text-sm font-bold mt-2 cursor-pointer"
              >
                Upload a file
              </label>
            </div>
            {/* Certificate details */}
            <div className="w-full flex flex-wrap gap-x-4">
              {/* Certificate Name */}
              <div className="mt-4 grow">
                <label htmlFor="" className="block text-base font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="e.g ReactJS Course 2024"
                  className="mt-1 w-full outline-none border py-2 px-4 rounded-lg text-base"
                />
              </div>
              {/* Certificate Credential URL */}
              <div className="mt-4 grow">
                <label htmlFor="" className="block text-base font-medium">
                  <div className="flex items-center">
                    Credential URL
                    <GoLinkExternal className="ms-2 text-lg" />
                  </div>
                </label>
                <input
                  type="text"
                  placeholder="Link to certificate"
                  className="mt-1 w-full outline-none border py-2 px-4 rounded-lg text-base"
                />
              </div>
            </div>
            {/* Certificate card action buttons */}
            <div className="mt-4 mb-2 flex items-center justify-end">
              <button className="me-4 py-2 text-sm" type="button">
                Cancel
              </button>
              <button className="py-2 px-4 bg-primaryBlue text-white rounded-lg text-sm hover:shadow">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
