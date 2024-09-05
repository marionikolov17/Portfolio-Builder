import { MdDone, MdOutlineWorkOutline, MdAddAPhoto } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { SiReact } from "react-icons/si";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function HeroSectionStandart() {
  return (
    <>
      {/* Hero section */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm z-20">
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
      {/* Picture */}
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="w-48 h-48 sm:w-60 sm:h-60 overflow-hidden relative flex justify-center bg-white shadow-sm rounded-full">
        </div>
        <button className="mt-8 py-2 px-4 bg-white rounded-lg shadow-sm hover:bg-gray-100 flex items-center">
          Change Picture 
          <MdAddAPhoto className="ms-2 text-xl"/>
        </button>
      </div>
      {/* First and Last names */}
      <div className="mt-8 max-h-max flex sm:justify-start justify-center flex-wrap">
        <div className="relative py-1 me-4">
          <input
            type="text"
            id="firstName"
            className="peer placeholder:text-transparent outline-none block bg-transparent border-gray-300 shadow-sm rounded-lg py-1.5 px-4 border focus:ring-1 focus:ring-primaryBlue transition duration-300"
            placeholder="First"
          />
          <label htmlFor="firstName" className="floating-label z-10">
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
          <label htmlFor="lastName" className="floating-label z-10">
            Last Name
          </label>
        </div>
      </div>
      {/* Role */}
      <div className="mt-4">
        <label htmlFor="" className="font-medium">
          Your Role
        </label>
        <div className="flex sm:flex-row flex-col items-center flex-wrap mt-2">
          <div className="bg-white w-full sm:w-auto rounded-lg shadow-sm flex items-center">
            <div className="flex h-full items-center">
              <MdOutlineWorkOutline className="text-xl ms-3" />
            </div>
            <input
              type="text"
              placeholder="e.g Javascript Web Developer"
              className="w-full sm:w-80 py-2 px-4 outline-none bg-transparent"
            />
          </div>
          {/* <p className="text-base ms-4 underline underline-offset-2 font-medium">
            It is not necessary to be your job, type what you love!
          </p> */}
        </div>
      </div>
      {/* Tech Stack */}
      <div className="mt-6">
        <h3 className="font-medium text-base">Tech Stack</h3>
        {/* Selected technologies */}
        <div className="flex items-center flex-wrap mt-4">
          {/* Technology container */}
          <div className="relative p-4 me-2">
            <SiReact className="text-3xl text-[#61dbfb]" />
            <IoCloseOutline className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm" />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex mt-4 bg-white max-w-max items-center px-4 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Type to view options..."
              className="py-3 bg-transparent outline-none text-sm"
            />
            <button>
              <CiCirclePlus className="text-xl" />
            </button>
          </div>
          {/* Options */}
          <div className="w-[220px] min-h-10 bg-white mt-1 rounded-lg overflow-x-hidden">
            {/* Option Item */}
            <div className="w-full flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <SiReact className="text-2xl text-[#61dbfb]" />
              <p className="ms-2 font-bold text-sm">React</p>
            </div>
            <div className="w-full flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <SiReact className="text-2xl text-[#61dbfb]" />
              <p className="ms-2 font-bold text-sm">React</p>
            </div>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className="mt-6 flex flex-col items-center sm:items-start">
            <h3 className="font-medium text-base mb-4">Your Socials</h3>
            {/* Social Media Container */}
            <div className="flex items-center mt-2"> {/* Github */}
              <div className="flex items-center bg-white rounded-lg w-80 overflow-x-hidden shadow-sm">
                <FaGithub className="ms-4 text-xl"/>
                <input type="text" placeholder="Enter valid URL" name="githubSocial" className="py-2 px-4 outline-none grow text-sm" />
              </div>
              <MdDone className="ms-2 text-xl text-green-500"/> {/* Show icons for validating link */}
            </div>
            {/* Social Media Container */}
            <div className="flex items-center mt-2"> {/* Linkedin */}
              <div className="flex items-center bg-white rounded-lg w-80 overflow-x-hidden shadow-sm">
                <FaLinkedin className="ms-4 text-xl"/>
                <input type="text" placeholder="Enter valid URL" name="linkedinSocial" className="py-2 px-4 outline-none grow text-sm" />
              </div>
              <MdDone className="ms-2 text-xl text-green-500"/> {/* Show icons for validating link */}
            </div>
            {/* Social Media Container */}
            <div className="flex items-center mt-2"> {/* Instagram */}
              <div className="flex items-center bg-white rounded-lg w-80 overflow-x-hidden shadow-sm">
                <FaInstagram className="ms-4 text-xl"/>
                <input type="text" placeholder="Enter valid URL" name="instagramSocial" className="py-2 px-4 outline-none grow text-sm" />
              </div>
              <MdDone className="ms-2 text-xl text-green-500"/> {/* Show icons for validating link */}
            </div>
            {/* Social Media Container */}
            <div className="flex items-center mt-2"> {/* Facebook */}
              <div className="flex items-center bg-white rounded-lg w-80 overflow-x-hidden shadow-sm">
                <FaFacebook className="ms-4 text-xl"/>
                <input type="text" placeholder="Enter valid URL" name="facebookSocial" className="py-2 px-4 outline-none grow text-sm" />
              </div>
              <MdDone className="ms-2 text-xl text-green-500"/> {/* Show icons for validating link */}
            </div>
      </div>
    </>
  );
}
