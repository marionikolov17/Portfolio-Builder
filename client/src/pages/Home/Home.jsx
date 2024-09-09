import { MdDone } from "react-icons/md";
import TopBar from "../../shared/components/TopBar/TopBar";

export default function Home() {
    return (
        <>
            <section className="grow max-w-full min-h-full pb-10 overflow-x-hidden">
                <TopBar pageName={"Home"}/>
                <div className="w-full px-3 sm:px-10">
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
                </div>
            </section>
        </>
    )
}