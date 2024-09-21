import AboutSection from "./components/AboutSection/AboutSection";
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

export default function StandardPortfolio() {
    return (
        <>
            <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
                <DesktopNavigation />
                <MobileNavigation />
                <HeroSection />
                <AboutSection />
                <div className="fixed top-0 w-full h-full paper-bg -z-10"></div>
            </main>
        </>
    )
}