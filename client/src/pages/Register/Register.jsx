/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Register() {
    const [isShownPassword, setIsShownPassword] = useState(false);
    const [isShownRePassword, setIsShownRePassword] = useState(false);

    return (
        <>
            <main className="w-full min-h-full absolute bg-mainBackground flex justify-center items-center font-montserrat overflow-x-hidden px-4 sm:px-0">
                <form className="w-96 bg-white rounded-lg shadow flex flex-col items-center py-6 px-8">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h4 className="mt-4 font-bold text-lg">Welcome</h4>
                    <p className="mt-1 text-sm text-gray-400">Please enter your details to sign up</p>
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
                        <div className="w-20 border"></div>
                        {/* Step */}
                        <div className="border border-primaryBlue rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                            <p className="font-medium">2</p>
                        </div>
                    </div>
                    <p className="text-sm mt-6">Already have an account? <Link className="text-primaryBlue font-medium">Sign In</Link></p>
                </form>
            </main>
        </>
    )
}