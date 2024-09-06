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
            </div>
        </>
    )
}