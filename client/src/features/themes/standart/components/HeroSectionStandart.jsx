import { MdOutlineWorkOutline } from "react-icons/md";

export default function HeroSectionStandart() {
  return (
    <>
      {/* Hero section */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm">
        <div className="grow flex justify-start px-4 py-3">
          <h2 className="text-xl font-bold">Hero Section</h2>
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
      {/* First and Last names */}
      <div className="mt-8 max-h-max flex flex-wrap">
        <div className="relative py-1 me-4">
          <input
            type="text"
            id="firstName"
            className="peer placeholder:text-transparent outline-none block bg-transparent border-gray-300 shadow-sm rounded-lg py-1.5 px-4 border focus:ring-1 focus:ring-primaryBlue transition duration-300"
            placeholder="First"
          />
          <label htmlFor="firstName" className="floating-label">
            First Name
          </label>
        </div>
        <div className="relative py-1 me-4">
          <input
            type="text"
            id="lastName"
            className="peer placeholder:text-transparent outline-none block bg-transparent border-gray-300 shadow-sm rounded-lg py-1.5 px-4 border focus:ring-1 focus:ring-primaryBlue transition duration-300"
            placeholder="First"
          />
          <label htmlFor="lastName" className="floating-label">
            Last Name
          </label>
        </div>
      </div>
      {/* Role */}
      <div className="mt-4">
        <label htmlFor="" className="font-medium">
          Your Role
        </label>
        <div className="relative flex items-center flex-wrap mt-2">
          <div className="absolute top-0 h-full flex items-center">
            <MdOutlineWorkOutline className="text-xl ms-3" />
          </div>
          <input
            type="text"
            placeholder="e.g Javascript Web Developer"
            className="w-80 py-2 ps-10 pe-2 rounded-lg shadow-sm outline-none"
          />
          <p className="text-base ms-4 underline underline-offset-2 font-medium">
            It is not necessary to be your job, type what you love!
          </p>
        </div>
      </div>
      {/* Tech Stack */}
    </>
  );
}
