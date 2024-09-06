import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete, MdOutlineDragIndicator } from "react-icons/md";

export default function Project() {
    return (
        <>
            <div className="mt-8 w-full sm:w-[70%] min-h-14 bg-white rounded-lg shadow overflow-hidden">
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
                        <div className="w-full flex flex-wrap">
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
                            <div className="mt-4 ms-4 grow">
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}