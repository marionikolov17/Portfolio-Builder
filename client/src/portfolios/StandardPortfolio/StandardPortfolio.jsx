import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";

export default function StandardPortfolio() {
    return (
        <>
            <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
                <DesktopNavigation />
                <div className="fixed top-0 w-full h-full paper-bg -z-10"></div>
            </main>
        </>
    )
}