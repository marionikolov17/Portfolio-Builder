import { CiEdit } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function YourTemplateCard() {
  return (
    <>
      <div className="w-full sm:w-96 h-96 mb-4 overflow-hidden rounded-lg relative">
        {/* Selecting container */}
        <div className="z-40 absolute top-0 right-0 m-4 bg-white w-6 h-6 shadow border border-primaryBlue cursor-pointer flex items-center justify-center">
            <MdDone className="text-primaryBlue text-xl"/>
        </div>
        {/* Image */}
        <div className="w-full h-56 flex justify-center overflow-hidden">
          <img
            src="/images/test1.png"
            className="object-cover"
            alt="template image"
          />
        </div>
        {/* Naming */}
        <div className="mt-3 flex items-center px-2">
          <div className="flex justify-start grow shrink-0">
            <h2 className="text-2xl font-bold">Standart</h2>
          </div>
          <div className="flex justify-end grow shrink-0">
            <Link>
                <CiEdit className="text-3xl cursor-pointer text-primaryBlue"/>
            </Link>
          </div>
        </div>
        {/* Tags */}
        <div className="flex mt-3 px-2">
          <p className="bg-primaryBlue rounded-full py-1.5 px-4 text-white me-2 text-sm shadow">
            #Web
          </p>
          <p className="bg-primaryBlue rounded-full py-1.5 px-4 text-white me-2 text-sm shadow">
            #Development
          </p>
        </div>
      </div>
    </>
  );
}
