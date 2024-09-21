/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Register() {
    const [isShownPassword, setIsShownPassword] = useState(false);
    const [isShownRePassword, setIsShownRePassword] = useState(false);

    return (
        <>
            <main className="w-full min-h-full absolute bg-mainBackground flex justify-center items-center font-montserrat overflow-x-hidden px-4 sm:px-0 py-4">
                <form className="w-96 bg-white rounded-lg shadow flex flex-col items-center py-6 px-8">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h4 className="mt-4 font-bold text-lg">Welcome</h4>
                    <p className="mt-1 text-sm text-gray-400">Please enter your details to sign up</p>
                    {/* First Step inputs */}
                    <div className="w-full hidden flex-col items-center">
                        {/* Username */}
                        <div className="mt-4 w-full">
                            <label htmlFor="username" className="block text-sm font-bold">Username</label>
                            <input 
                                type="text"
                                id="username" 
                                required
                                placeholder="Enter your username..."
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            />
                        </div>
                        {/* First Name */}
                        <div className="mt-4 w-full">
                            <label htmlFor="firstName" className="block text-sm font-bold">First Name</label>
                            <input 
                                type="text"
                                id="firstName" 
                                required
                                placeholder="e.g John"
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="mt-4 w-full">
                            <label htmlFor="lastName" className="block text-sm font-bold">Last Name</label>
                            <input 
                                type="text"
                                id="lastName" 
                                required
                                placeholder="e.g John"
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            />
                        </div>
                        <button 
                            type="button"
                            className="mt-6 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue"
                        >
                            Next
                        </button>
                    </div>
                    {/* Second Step inputs */}
                    <div className="w-full hidden flex-col items-center">
                        <div className="bg-primaryBlue py-2 px-4 flex items-center mt-6 rounded-lg shadow">
                            <MdOutlineTipsAndUpdates className="me-2 text-xl text-blue-100"/>
                            <p className="text-blue-100 text-sm">Optional Section</p>
                        </div>
                        {/* Interest */}
                        <div className="mt-4 w-full">
                            <label htmlFor="interested" className="block text-sm font-bold">I'm interested in</label>
                            <select 
                                id="interested" 
                                required
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            >
                                <option value="" defaultValue="">Choose</option>
                                <option value="Front-End">Front-End Development</option>
                                <option value="Back-End">Back-End Development</option>
                                <option value="Mobile">Mobile Development</option>
                                <option value="Desktop">Desktop Development</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Employment */}
                        <div className="mt-4 w-full">
                            <label htmlFor="employment" className="block text-sm font-bold">I'm currently</label>
                            <select 
                                id="employment" 
                                required
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            >
                                <option value="" defaultValue="">Choose</option>
                                <option value="Employed">Employed</option>
                                <option value="Unemployed">Unemployed</option>
                            </select>
                        </div>
                        {/* Years of experience */}
                        <div className="mt-4 w-full">
                            <label htmlFor="experienceYears" className="block text-sm font-bold">Years of experience</label>
                            <select 
                                id="experienceYears" 
                                required
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            >
                                <option value="" defaultValue="">Choose</option>
                                <option value="0">0</option>
                                <option value="1-3">1-3</option>
                                <option value="3-5">3-5</option>
                                <option value="5-10">5-10</option>
                                <option value="10+">10+</option>
                            </select>
                        </div>
                        <p className="mt-6 text-xs font-medium">*You are not required to share this information. It is for research purposes only!</p>
                        <button 
                            type="button"
                            className="mt-6 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue"
                        >
                            Next
                        </button>
                    </div>
                    {/* Last Step inputs */}
                    <div className="w-full flex flex-col items-center">
                        {/* Email */}
                        <div className="mt-4 w-full">
                            <label htmlFor="email" className="block text-sm font-bold">Email</label>
                            <input 
                                type="email"
                                id="email" 
                                required
                                placeholder="Enter your email..."
                                className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                            />
                        </div>
                        {/* Password */}
                        <div className="mt-4 w-full">
                            <label htmlFor="password" className="text-sm font-bold">Password</label>
                            <div className="flex w-full items-center bg-white border rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-primaryBlue">
                                <input 
                                    type={isShownPassword ? "text" : "password"}
                                    id="password"
                                    required
                                    placeholder="Password..."
                                    className="py-2 px-4 grow outline-none bg-transparent"
                                />
                                {!isShownPassword && <IoMdEye className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownPassword(true)}/>}
                                {isShownPassword && <IoMdEyeOff className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownPassword(false)}/>}
                            </div>
                        </div>
                        {/* Repeat Password */}
                        <div className="mt-4 w-full">
                            <label htmlFor="rePassword" className="text-sm font-bold">Repeat Password</label>
                            <div className="flex w-full items-center bg-white border rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-primaryBlue">
                                <input 
                                    type={isShownRePassword ? "text" : "password"}
                                    id="rePassword"
                                    required
                                    placeholder="Password..."
                                    className="py-2 px-4 grow outline-none bg-transparent"
                                />
                                {!isShownRePassword && <IoMdEye className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownRePassword(true)}/>}
                                {isShownRePassword && <IoMdEyeOff className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownRePassword(false)}/>}
                            </div>
                        </div>
                        <p className="mt-6 text-xs font-medium">*By signin up you agree with our <Link className="text-primaryBlue">Terms & Conditions</Link></p>
                        <button className="mt-6 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue">
                            Sign up
                        </button>
                    </div>
                    {/* Registration Steps */}
                    <div className="mt-6 w-full flex items-center justify-center">
                        {/* Step */}
                        <div className="border border-primaryBlue bg-primaryBlue rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                            <p className="font-medium text-white">1</p>
                        </div>
                        {/* Separator */}
                        <div className="grow border"></div>
                        {/* Step */}
                        <div className="border border-primaryBlue rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                            <p className="font-medium">2</p>
                        </div>
                        {/* Separator */}
                        <div className="grow border"></div>
                        {/* Step */}
                        <div className="border border-primaryBlue rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                            <p className="font-medium">3</p>
                        </div>
                    </div>
                    <p className="text-sm mt-6">Already have an account? <Link to="/login" className="text-primaryBlue font-medium">Sign In</Link></p>
                </form>
            </main>
        </>
    )
}