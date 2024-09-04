import { IoSearchOutline } from "react-icons/io5";
import TemplateCard from "../TemplateCard/TemplateCard";

export default function ChooseTemplates() {
  return (
    <>
      <div className="w-full px-4 sm:px-10">
        <h1 className="mt-8 text-3xl font-bold">Choose a Template</h1>
        <form className="mt-6">
            <div className="flex items-center justify-center sm:justify-start relative bg-white max-w-lg rounded-lg shadow overflow-hidden">
                <input type="text" placeholder="Search templates..." className="ps-4 outline-none py-2 grow shrink-0" required />
                <button className="py-2 flex items-center shrink-0 px-4">
                  <IoSearchOutline className="text-primaryBlue text-xl"/>
                </button>
            </div>
        </form>
        <div className="mt-8 grow flex-wrap flex justify-center sm:justify-start sm:gap-8">
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </>
  );
}
