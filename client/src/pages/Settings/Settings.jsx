/* eslint-disable react/no-unescaped-entities */
import { MdOutlineDangerous } from "react-icons/md";
import TopBar from "../../shared/components/TopBar/TopBar";
import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <>
            <section className="grow max-w-full min-h-full overflow-x-hidden pb-4">
                <TopBar pageName={"Settings"}/>
                <div className="w-full px-3 sm:px-10">
                    {/* General settings section */}
                    <form className="mt-8 flex flex-col">
                        <h4 className="font-bold">General Settings</h4>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                            {/* Username input */}
                            <div className="w-64 grow">
                                <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    id="username"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 w-full transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* Email input */}
                            <div className="w-80 grow">
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    id="email"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 w-full transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* First Name input */}
                            <div className="grow sm:grow-0">
                                <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="First Name"
                                    id="firstName"
                                    className="py-2 px-4 rounded-lg w-full shadow outline-none mt-1 bg-transparent border border-gray-400 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* Last Name input */}
                            <div className="grow sm:grow-0">
                                <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Last Name"
                                    id="lastName"
                                    className="py-2 px-4 rounded-lg w-full shadow outline-none mt-1 bg-transparent border border-gray-400 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                        </div>
                        <button 
                            type="button"
                            className="w-max mt-4 py-2 px-4 bg-primaryBlue text-white rounded-lg text-sm transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                        >Save</button>
                    </form>
                    <Link className="text-sm block mt-2 text-primaryBlue">I've forgotten my password</Link>
                    {/* Privacy & Security section */}
                    <h4 className="font-bold mt-8">Privacy & Security</h4>
                    <div className="mt-4 px-4 flex flex-wrap max-w-full sm:max-w-max mb-1 items-center py-2 border text-sm bg-strongRed me-2 rounded-lg text-white">
                        <MdOutlineDangerous className="me-2 text-2xl"/>
                        Danger: Be caution on this section!
                    </div>
                    <div className="flex flex-wrap gap-x-4 items-center mt-2 sm:justify-start justify-center">
                        <button className="py-2.5 px-4 rounded-lg text-sm border-2 border-strongRed text-strongRed shadow transition duration-300 focus:ring-2 focus:ring-strongRed">
                            Deactivate Account
                        </button>
                        <button className="py-2.5 px-4 rounded-lg text-sm bg-strongRed text-white shadow transition duration-300 focus:ring-2 focus:ring-strongRed">
                            Delete Account
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}