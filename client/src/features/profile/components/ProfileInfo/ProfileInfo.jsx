export default function ProfileInfo() {
  return (
    <>
      <div className="w-full sm:w-96 h-max bg-white rounded-lg shadow">
        {/* Profile Image */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-32 flex overflow-hidden rounded-full">
            <img
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid"
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <form className="w-full flex flex-col items-center px-4 py-4">
          {/* Username */}
          <div className="mt-4 w-full">
            <label htmlFor="username" className="block text-sm font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              placeholder="Enter your username..."
              className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
          {/* Email */}
          <div className="mt-4 w-full">
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email..."
              className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
          {/* First Name */}
          <div className="mt-4 w-full">
            <label htmlFor="firstName" className="block text-sm font-bold">
              First Name
            </label>
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
            <label htmlFor="lastName" className="block text-sm font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              placeholder="e.g Doe"
              className="py-2 px-4 w-full outline-none rounded-lg border mt-1 transition duration-300 focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
          <button className="mt-4 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
