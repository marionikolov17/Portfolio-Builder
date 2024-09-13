import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function Login() {
    const [isShownPassword, setIsShownPassword] = useState(false);

    return (
        <>
            <main className="w-full min-h-full absolute bg-mainBackground flex justify-center items-center font-montserrat">
                <form className="w-96 bg-white rounded-lg shadow flex flex-col items-center py-4 px-8">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h4 className="mt-4 font-bold text-lg">Welcome back</h4>
                    <p className="mt-1 text-sm text-gray-400">Please enter your details to sign in</p>
                    {/* Email */}
                    <div className="mt-4 w-full">
                        <label htmlFor="email" className="block text-sm font-bold">Email</label>
                        <input 
                            type="email"
                            id="email" 
                            placeholder="Enter your email..."
                            className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                        />
                    </div>
                    {/* Password */}
                    <div className="mt-4 w-full">
                        <label htmlFor="password" className="block text-sm font-bold">Password</label>
                        <div className="flex w-full items-center bg-white border rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-primaryBlue">
                            <input 
                                type={isShownPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password..."
                                className="py-2 px-4 grow outline-none bg-transparent"
                            />
                            {!isShownPassword && <IoMdEye className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownPassword(true)}/>}
                            {isShownPassword && <IoMdEyeOff className="mx-3 text-xl cursor-pointer" onClick={() => setIsShownPassword(false)}/>}
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}