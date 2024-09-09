import { Link } from "react-router-dom";
import { MdDone, MdOutlineTipsAndUpdates } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import TopBar from "../../shared/components/TopBar/TopBar";
import YourTemplateCard from "../../features/home/components/YourTemplateCard/YourTemplateCard";

export default function Home() {
    return (
        <>
            <section className="grow max-w-full min-h-full overflow-x-hidden">
                <TopBar pageName={"Home"}/>
                <div className="w-full px-3 sm:px-10">
                    <div className="flex sm:justify-start justify-center">
                        <Link className="mt-8 flex items-center py-2 px-4 bg-white rounded-lg shadow w-max text-sm hover:bg-gray-100">
                            Go to portfolio
                            <GoLinkExternal className="text-lg ms-2"/>
                        </Link>
                    </div>
                    {/* Portfolio link section */}
                    <h3 className="mt-8 font-bold text-xl">Portfolio Link</h3>
                    <div className="mt-2 bg-white rounded-lg shadow max-w-full sm:w-max flex items-center overflow-hidden">
                        <div className="px-4 py-2 border-e">
                            <p className="text-sm">portfolio/</p>
                        </div>
                        <input 
                            type="text"
                            placeholder="e.g marionikolovdev" 
                            className="outline-none px-4 py-2"
                        />
                        <button className="flex shrink-0 grow items-center justify-center bg-primaryBlue h-10 w-8">
                            <MdDone className="text-xl font-bold text-white" title="Save"/>
                        </button>
                    </div>   
                    {/* Choosing portfolio template */}
                    <h3 className="mt-8 font-bold text-xl">Your Templates</h3>
                    {/* Tip container */}
                    <div className="mt-2 px-4 flex flex-wrap max-w-full sm:max-w-max mb-1 items-center py-2 border text-sm bg-primaryBlue me-2 rounded-lg text-blue-100">
                        <MdOutlineTipsAndUpdates className="me-2 text-2xl"/>
                        Tip: Choose which template to display on your page.
                    </div>
                    <div className="mt-8 flex justify-center sm:justify-start flex-wrap gap-x-4 gap-y-2">
                        <YourTemplateCard />
                    </div>
                </div>
            </section>
        </>
    )
}