import { MdAssignmentAdd } from "react-icons/md";
import Certificate from "./Certificate/Certificate";

export default function CertificatesSectionStandard() {
  return (
    <>
      {/* Certificates Section Header */}
      <div className="w-full flex items-center bg-white rounded-lg mt-8 shadow-sm z-20">
        <div className="grow flex justify-start px-4 py-3">
          <h2 className="sm:text-xl font-bold">Certificates Section</h2>
        </div>
        <div className="grow flex justify-end px-4 py-3">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">
              Visible
            </span>
          </label>
        </div>
      </div>
      {/* Add certificate button */}
      <button className="mt-8 flex items-center py-2 px-4 rounded-lg shadow bg-white hover:bg-gray-100 hover:text-primaryBlue">
        <MdAssignmentAdd className="me-2 text-xl"/>
        Add new certificate
      </button>
      {/* Added certificates */}
      <div className="mt-8 flex flex-col items-center">
        <h3 className="font-bold text-xl">Certificates</h3>
        <Certificate />
      </div>
    </>
  );
}
