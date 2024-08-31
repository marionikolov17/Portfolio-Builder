import NavigationButton from "../NavigationButton/NavigationButton";

export default function DesktopNavigation() {
    return (
        <>
            <section className="w-80 min-h-full shrink-0 bg-white flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center my-10">
                    <div className="bg-primaryBlue text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h1 className="ms-4 font-bold text-2xl">MyPortfolio</h1>
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