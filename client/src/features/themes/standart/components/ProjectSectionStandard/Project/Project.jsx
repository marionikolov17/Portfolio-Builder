/* eslint-disable react/no-unescaped-entities */
import { CiCirclePlus, CiEdit, CiImageOn } from "react-icons/ci";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineDelete, MdOutlineDragIndicator } from "react-icons/md";
import { SiReact } from "react-icons/si";

export default function Project() {
    return (
        <>
            <div className="mt-8 w-full lg:w-[70%] min-h-14 bg-white rounded-lg shadow overflow-hidden">
                {/* Header info and action buttons */}
                <div className="h-14 flex items-center">
                    {/* Image and Title */}
                    <div className="grow flex justify-start items-center h-full">
                        <div className="h-full w-20 flex">
                            <img 
                                src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" 
                                className="object-cover" 
                                alt="project image" />
                        </div>
                        <h4 className="ms-2 font-bold">Fitness-Manager</h4>
                    </div>
                    {/* Buttons */}
                    <div className="grow flex justify-end items-center">
                        <CiEdit className="text-3xl mx-2 cursor-pointer text-primaryBlue"/>
                        <MdOutlineDelete className="text-3xl mx-2 cursor-pointer text-strongRed"/>
                        <MdOutlineDragIndicator className="text-3xl mx-2 cursor-pointer text-slate-400"/>
                    </div>
                </div>
                {/* Project Edit information */}
                <div className="w-full">
                    <form className="w-full px-4 pb-4">
                        {/* Project Header information */}
                        <div className="w-full flex flex-wrap gap-x-4">
                            {/* Project Name */}
                            <div className="mt-4">
                                <label htmlFor="" className="block text-base font-medium">Project Name</label>
                                <input type="text" placeholder="e.g Awesome Project" className="mt-1 outline-none border py-2 px-4 rounded-lg text-base"/>
                            </div>
                            {/* Project short description */}
                            <div className="mt-4 grow w-full">
                                <label htmlFor="" className="block text-base font-medium">Short Description</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g Incoming app that will help people." 
                                    className="mt-1 w-full outline-none border py-2 px-4 rounded-lg text-base"
                                />
                            </div>
                            {/* Project Github URL */}
                            <div className="mt-4 grow">
                                <label htmlFor="" className="block text-base font-medium">Github URL</label>
                                <input 
                                    type="text" 
                                    placeholder="You can leave it empty." 
                                    className="mt-1 w-full outline-none border py-2 px-4 rounded-lg text-base"
                                />
                            </div>
                            {/* Project Demo URL */}
                            <div className="mt-4 grow">
                                <label htmlFor="" className="block text-base font-medium">Demo URL</label>
                                <input 
                                    type="text" 
                                    placeholder="You can leave it empty." 
                                    className="mt-1 w-full outline-none border py-2 px-4 rounded-lg text-base"
                                />
                            </div>
                        </div>
                        {/* Project tech stack */}
                        <div className="w-full mt-4">
                            <h4 className="font-bold">Tech Stack</h4>
                            {/* Added field */}
                            <div className="w-full flex flex-wrap gap-y-2 items-center mt-4">
                                <input type="text" placeholder="e.g Front-End" className="outline-none py-2 px-4 border rounded-lg" />
                                <CiCirclePlus className="text-3xl ms-4 cursor-pointer hover:text-primaryBlue"/>
                                {/* Selected */}
                                {/* Technology container */}
                                <div className="relative p-4">
                                    <SiReact className="text-3xl text-[#61dbfb]" />
                                    <IoCloseOutline className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm" />
                                </div>
                                {/* Technology container */}
                                <div className="relative p-4">
                                    <SiReact className="text-3xl text-[#61dbfb]" />
                                    <IoCloseOutline className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm" />
                                </div>
                            </div>
                            {/* Add new field */}
                            <div className="w-full flex justify-center mt-2">
                                <button type="button" className="flex items-center py-2 px-4 border rounded-lg hover:bg-gray-100 hover:text-primaryBlue">
                                    <IoAddOutline className="text-xl me-2"/>
                                    Add new field
                                </button>
                            </div>
                        </div>
                        {/* Project Thumbnail */}
                        <div className="mt-4">
                            <h4 className="font-bold">Thumbnail</h4>
                            <div className="mt-2 h-32 w-32 border border-gray-900/25 border-dashed rounded-lg flex flex-col items-center justify-center">
                                <CiImageOn className="text-3xl"/>
                                <label htmlFor="" className="text-primaryBlue text-sm font-bold mt-2 cursor-pointer">Upload a file</label>
                            </div>
                        </div>
                        {/* Project Images */}
                        <div className="mt-4">
                            <h4 className="font-bold">Images</h4>
                            <p className="text-xs text-slate-400">Up to 7 images</p>
                            {/* Images container */}
                            <div className="flex flex-wrap items-center mt-4">
                                {/* Show images here */}
                                <div className="w-32 h-28 flex overflow-hidden rounded-lg me-4 relative">
                                    <img src="/images/zynkle-1.jpg" alt="" className="object-cover" />
                                    <IoCloseOutline className="absolute z-40 top-0 right-0 m-2 text-xl cursor-pointer bg-white rounded-full shadow"/>
                                </div>
                                <label htmlFor="">
                                    <CiCirclePlus className="text-4xl cursor-pointer hover:text-primaryBlue"/>
                                </label>
                            </div>
                        </div>
                        {/* Project features */}
                        <div className="mt-4">
                            <h4 className="font-bold">Features</h4>
                            {/* Features here */}
                            {/* Feature */}
                            <div className="w-full flex items-center border rounded-lg mt-2 overflow-hidden">
                                <input 
                                    className="outline-none px-4 py-2 grow bg-transparent"
                                    placeholder="e.g Complex user authentication"
                                    type="text" 
                                />
                                <div className="h-full sm:w-14 flex items-center justify-center p-2">
                                    <MdOutlineDelete className="text-strongRed cursor-pointer text-2xl"/>
                                </div>
                            </div>
                            <button 
                                type="button"
                                className="flex items-center justify-center w-full border rounded-lg py-2 mt-2 hover:bg-gray-100 hover:text-primaryBlue"
                            >
                                <IoAddOutline className="me-2 text-xl"/>
                                Add new feature
                            </button>
                        </div>
                        {/* Project what I've learned */}
                        <div className="mt-4">
                            <h4 className="font-bold">What I've learned</h4>
                            {/* skills here */}
                            {/* skill */}
                            <div className="w-full flex items-center border rounded-lg mt-2 overflow-hidden">
                                <input 
                                    className="outline-none px-4 py-2 grow bg-transparent"
                                    placeholder="e.g Polished my React skills"
                                    type="text" 
                                />
                                <div className="h-full sm:w-14 flex items-center justify-center p-2">
                                    <MdOutlineDelete className="text-strongRed cursor-pointer text-2xl"/>
                                </div>
                            </div>
                            <button 
                                type="button"
                                className="flex items-center justify-center w-full border rounded-lg py-2 mt-2 hover:bg-gray-100 hover:text-primaryBlue"
                            >
                                <IoAddOutline className="me-2 text-xl"/>
                                Add new skill
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}