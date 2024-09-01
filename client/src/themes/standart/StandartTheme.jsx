export default function StandartTheme() {
  return (
    <>
      <div className="w-full min-h-full px-10 overflow-x-hidden overflow-y-scroll no-scrollbar">
        <h1 className="mt-8 text-3xl font-bold">Edit your portfolio</h1>
        {/* Hero section */}
        <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm">
          <div className="grow flex justify-start px-4 py-3">
            <h2 className="text-xl font-bold">Hero Section</h2>
          </div>
          <div className="grow flex justify-end px-4 py-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900">
                Visible
              </span>
            </label>
          </div>
        </div>
        <div className="mt-8 max-h-max flex flex-wrap">
          <div className="relative py-1 me-4">
            <input type="text" id="firstName" className="peer placeholder:text-transparent outline-none block bg-transparent border-gray-300 shadow-sm rounded-lg py-1.5 px-4 border focus:ring-1 focus:ring-primaryBlue transition duration-300" placeholder="First"/>
            <label 
                htmlFor="firstName" 
                className="floating-label">
                    First Name
            </label>
          </div>
          <div className="relative py-1 me-4">
            <input type="text" id="lastName" className="peer placeholder:text-transparent outline-none block bg-transparent border-gray-300 shadow-sm rounded-lg py-1.5 px-4 border focus:ring-1 focus:ring-primaryBlue transition duration-300" placeholder="First"/>
            <label 
                htmlFor="lastName" 
                className="floating-label">
                    Last Name
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
