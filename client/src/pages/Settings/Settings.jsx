import TopBar from "../../shared/components/TopBar/TopBar";

export default function Settings() {
    return (
        <>
            <section className="grow max-w-full min-h-full overflow-x-hidden">
                <TopBar pageName={"Settings"}/>
                <div className="w-full px-3 sm:px-10">
                    <form className="mt-8 flex flex-col">
                        <h4 className="font-bold">General Settings</h4>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                            {/* Username input */}
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    id="username"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 w-full transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* Email input */}
                            <div className="w-80">
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    id="email"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 w-full transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* First Name input */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="First Name"
                                    id="firstName"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                            {/* Last Name input */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Last Name"
                                    id="lastName"
                                    className="py-2 px-4 rounded-lg shadow outline-none mt-1 bg-transparent border border-gray-400 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                                />
                            </div>
                        </div>
                        <button 
                            type="button"
                            className="w-max mt-4 py-2 px-4 bg-primaryBlue text-white rounded-lg text-sm transition duration-300 focus:ring-2 focus:ring-primaryBlue"
                        >Save</button>
                    </form>
                    <h4 className="font-bold mt-8">Privacy & Security</h4>
                </div>
            </section>
        </>
    )
}