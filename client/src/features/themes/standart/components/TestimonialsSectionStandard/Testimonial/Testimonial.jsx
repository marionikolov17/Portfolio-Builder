import { CiImageOn } from "react-icons/ci";

export default function Testimonial() {
  return (
    <>
      <div className="mt-8 w-full lg:w-[70%] bg-white rounded-lg shadow overflow-hidden py-4">
        <form className="w-full px-4">
          <h4 className="font-bold">Author Details</h4>
          <div className="w-full flex flex-wrap gap-x-4">
            {/* Author name */}
            <div className="mt-4">
              <label htmlFor="" className="block text-base font-medium">
                Author Name
              </label>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="mt-1 outline-none border py-2 px-4 rounded-lg text-base"
              />
            </div>
            {/* Author role */}
            <div className="mt-4 grow">
              <label htmlFor="" className="block text-base font-medium">
                Author Role
              </label>
              <input
                type="text"
                placeholder="e.g Senior Javascript Developer"
                className="mt-1 outline-none border py-2 px-4 rounded-lg text-base w-full"
              />
            </div>
          </div>
          {/* Author Image */}
          <div className="mt-4">
            <h4 className="font-bold">Author Image</h4>
            <div className="mt-4 h-16 w-16 border border-gray-900/25 border-dashed rounded-full flex flex-col items-center justify-center">
              <label htmlFor="" className="cursor-pointer" title="Upload file">
                <CiImageOn className="text-2xl" />
              </label>
            </div>
          </div>
          {/* Testimonial text content */}
          <div className="mt-4">
            <h4 className="font-bold">Testimonial</h4>
            <textarea
              name=""
              id=""
              className="outline-none py-2 px-4 w-full border rounded-lg mt-4"
              placeholder="e.g Good worker!"
            ></textarea>
          </div>
          {/* Testimonial action buttons */}
          <div className="mt-4 flex items-center justify-end">
            <button className="me-4 py-2 text-sm" type="button">
              Delete
            </button>
            <button className="py-2 px-4 bg-primaryBlue text-white rounded-lg text-sm hover:shadow">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
