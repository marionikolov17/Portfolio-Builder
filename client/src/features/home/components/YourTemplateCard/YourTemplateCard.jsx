export default function YourTemplateCard() {
  return (
    <>
      <div className="w-full sm:w-96 h-96 mb-4 overflow-hidden rounded-lg">
        {/* Image */}
        <div className="w-full h-56 flex justify-center overflow-hidden">
          <img
            src="/images/test1.png"
            className="object-cover"
            alt="template image"
          />
        </div>
        {/* Naming */}
        <div className="mt-3 flex items-center px-2">
          <div className="flex justify-start grow shrink-0">
            <h2 className="text-2xl font-bold">Standart</h2>
          </div>
          <div className="flex justify-end grow shrink-0">
            
          </div>
        </div>
        {/* Tags */}
        <div className="flex mt-3 px-2">
          <p className="bg-primaryBlue rounded-full py-1.5 px-4 text-white me-2 text-sm shadow">
            #Web
          </p>
          <p className="bg-primaryBlue rounded-full py-1.5 px-4 text-white me-2 text-sm shadow">
            #Development
          </p>
        </div>
        {/* Choose button */}
        <div className="px-2 mt-6">
          <button className="w-full flex items-center justify-center py-2 rounded-lg shadow-sm bg-gray-100 text-gray-900 font-medium text-sm hover:bg-primaryBlue hover:text-white transition duration-300">
            Choose
          </button>
        </div>
      </div>
    </>
  );
}
