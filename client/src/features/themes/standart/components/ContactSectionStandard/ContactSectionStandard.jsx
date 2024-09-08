import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail, MdDone, MdOutlinePhone } from "react-icons/md";

export default function ContactSectionStandard() {
  return (
    <>
      {/* Contact Section Header */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm z-20">
        <div className="grow flex justify-start px-4 py-3">
          <h2 className="sm:text-xl font-bold">Contact Section</h2>
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
      {/* Contacts */}
      <div className="mt-6 flex flex-col items-center sm:items-start">
        <h3 className="font-medium text-base mb-4">Your Contacts</h3>
        {/* Contact Input Container */}
        <div className="flex items-center mt-2">
          {" "}
          {/* Email */}
          <div className="flex items-center bg-white rounded-lg w-[300px] sm:w-80 overflow-x-hidden shadow-sm">
            <MdOutlineEmail  className="ms-4 text-xl" />
            <input
              type="text"
              placeholder="Enter valid email"
              name="githubSocial"
              className="py-2 px-4 outline-none grow text-sm"
            />
          </div>
          <MdDone className="ms-2 text-xl text-green-500" />{" "}
          {/* Show icons for validating link */}
        </div>
        {/* Contact Input Container */}
        <div className="flex items-center mt-2">
          {" "}
          {/* Linkedin */}
          <div className="flex items-center bg-white rounded-lg w-[300px] sm:w-80 overflow-x-hidden shadow-sm">
            <CiLinkedin className="ms-4 text-xl" />
            <input
              type="text"
              placeholder="Enter valid URL"
              name="linkedinSocial"
              className="py-2 px-4 outline-none grow text-sm"
            />
          </div>
          <MdDone className="ms-2 text-xl text-green-500" />{" "}
          {/* Show icons for validating link */}
        </div>
        {/* Contact Input Container */}
        <div className="flex items-center mt-2">
          {" "}
          {/* Phone */}
          <div className="flex items-center bg-white rounded-lg w-[300px] sm:w-80 overflow-x-hidden shadow-sm">
            <MdOutlinePhone className="ms-4 text-xl" />
            <input
              type="phone"
              placeholder="Enter valid phone"
              name="instagramSocial"
              className="py-2 px-4 outline-none grow text-sm"
            />
          </div>
          <MdDone className="ms-2 text-xl text-green-500" />{" "}
          {/* Show icons for validating link */}
        </div>
      </div>
    </>
  );
}
