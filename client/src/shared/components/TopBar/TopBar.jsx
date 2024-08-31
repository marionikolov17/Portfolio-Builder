/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { IoMenuOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";

export default function TopBar({ pageName }) {
    return (
        <>
            <div className="w-full h-20 sm:h-[120px] bg-white flex items-center relative">
                <div className="shrink grow hidden sm:flex justify-start items-center">
                    <h1 className="ms-8 font-bold text-3xl">{pageName}</h1>
                </div>
                {/* <div className="shrink-0 grow flex items-center justify-center">
                    <div className="flex w-full items-center bg-primaryGray rounded-lg shadow-sm">
                        <IoSearchOutline className="text-2xl ms-6 text-primaryBlue"/>
                        <input type="text" className="w-full h-14 py-2 ps-2 bg-transparent outline-none" placeholder="Search templates..."/>
                    </div>
                </div> */}
                <div className="shrink-0 grow flex items-center justify-center sm:justify-end sm:px-8">
                    {/* Notifications */}
                    <div className="flex flex-col items-center h-full relative">
                        <div className="relative p-3 bg-secondaryYellow hover:bg-gray-100 rounded-lg cursor-pointer">
                            <div className="absolute right-0 top-0 m-2 w-2 h-2 bg-strongRed rounded-full"></div>
                            <IoNotificationsOutline className="text-supportingYellow text-2xl"/>
                        </div>
                        <div className="hidden absolute -bottom-10 left-0 sm:left-auto w-52 min-h-8 bg-gray-100 rounded-lg shadow-sm">
                            <div className="flex min-h-8 items-center justify-center">
                                <p className="text-sm font-bold">You've got new visitors!</p>
                            </div>
                        </div>
                    </div>
                    {/* Profile */}
                    <div className="flex mx-8">
                        <div className="w-12 h-12 overflow-hidden rounded-lg flex justify-center items-center">
                            <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid" className="object-cover" alt="" />
                        </div>
                        <div className="ms-4 flex flex-col justify-center">
                            <h3 className="font-bold">Mario Nikolov</h3>
                            <p className="text-sm text-slate-400"><span className="text-primaryBlue">@</span>marionikolov</p>
                        </div>
                    </div>
                    <IoMenuOutline className="flex sm:hidden text-3xl"/>
                </div>
            </div>
        </>
    )
}