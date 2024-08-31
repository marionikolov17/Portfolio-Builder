import { IoCloseOutline } from "react-icons/io5";
import NavigationButton from "../NavigationButton/NavigationButton";

export default function Navigation() {
    return (
        <>
            <section className="w-full sm:w-[90px] lg:w-80 min-h-full shrink-0 bg-white flex flex-col items-center fixed top-0 sm:relative">
                <div className="w-full flex sm:hidden justify-end py-4 px-4">
                    <IoCloseOutline className="text-3xl"/>
                </div>
                {/* Logo */}
                <div className="flex items-center mt-4 mb-10 sm:mt-10">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h1 className="ms-4 font-bold text-2xl sm:hidden lg:inline-block">MyPortfolio</h1>
                </div>
                {/* Buttons */}
                <NavigationButton icon="builder" link="" text={"Builder"} isActive={true}/>
                <NavigationButton icon="analytics" link="" text={"Analytics"} isActive={false}/>
                <NavigationButton icon="settings" link="" text={"Settings"} isActive={false}/>
                <NavigationButton icon="logout" link="" text={"Sign Out"} isActive={false}/>
            </section>
        </>
    )
}