/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function Login() {
    const [isShownPassword, setIsShownPassword] = useState(false);

    return (
        <>
            <main className="w-full min-h-full absolute bg-mainBackground flex justify-center items-center font-montserrat overflow-x-hidden px-4 sm:px-0">
                <form className="w-96 bg-white rounded-lg shadow flex flex-col items-center py-6 px-8">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h4 className="mt-4 font-bold text-lg">Welcome back</h4>
                    <p className="mt-1 text-sm text-gray-400">Please enter your details to sign in</p>
                    {/* Email */}
                    <div className="mt-6 w-full">
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
                    <div className="mt-6 w-full">
                        <div className="flex items-center">
                            <div className="flex justify-start grow">
                                <label htmlFor="password" className="text-sm font-bold">Password</label>
                            </div>
                            <div className="flex justify-end grow">
                                <Link className="text-sm font-medium text-primaryBlue">Forgot password?</Link>
                            </div>
                        </div>
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
                    <button className="mt-6 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue">
                        Sign in
                    </button>
                    <p className="text-sm mt-6">Don't have an account yet? <Link className="text-primaryBlue font-medium">Sign Up</Link></p>
                </form>
            </main>
        </>
    )
}