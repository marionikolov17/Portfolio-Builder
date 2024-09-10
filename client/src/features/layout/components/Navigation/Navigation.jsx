import { IoCloseOutline } from "react-icons/io5";
import NavigationButton from "../NavigationButton/NavigationButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LayoutContext from "../../../../layouts/Layout/layout.context";

export default function Navigation() {
    const { setIsNavigationOpened } = useContext(LayoutContext);
    return (
        <>
            <section className="w-full sm:w-[90px] lg:w-80 h-screen shrink-0 bg-white flex flex-col items-center fixed top-0 sm:sticky z-50">
                <div className="w-full flex sm:hidden justify-end py-4 px-4">
                    <IoCloseOutline className="text-3xl" onClick={() => setIsNavigationOpened(false)}/>
                </div>
                {/* Logo */}
                <div className="flex items-center mt-4 mb-10 sm:mt-10">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h1 className="ms-4 font-bold text-2xl sm:hidden lg:inline-block">MyPortfolio</h1>
                </div>
                {/* Buttons */}
                <NavigationButton icon="home" link="/" text={"Home"} isActive={true}/>
                <NavigationButton icon="builder" link="/builder" text={"Builder"} isActive={false}/>
                <NavigationButton icon="analytics" link="/analytics" text={"Analytics"} isActive={false}/>
                <NavigationButton icon="settings" link="/settings" text={"Settings"} isActive={false}/>
                <NavigationButton icon="logout" link="" text={"Sign Out"} isActive={false}/>
                <div className="mb-4 flex sm:hidden lg:flex justify-center absolute bottom-0">
                    <p className="font-bold text-sm">Created by <Link to="https://www.marionikolovdev.com">Mario Nikolov</Link>©</p>
                </div>
            </section>
        </>
    )
}