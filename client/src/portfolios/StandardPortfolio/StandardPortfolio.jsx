import AboutSection from "./components/AboutSection/AboutSection";
import CareerSection from "./components/CareerSection/CareerSection";
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Testimonials from "./components/Testimonials/Testimonials";

export default function StandardPortfolio() {
    return (
        <>
            <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
                <DesktopNavigation />
                <MobileNavigation />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <Testimonials />
                <CareerSection />
                <div className="fixed top-0 w-full h-full paper-bg -z-10"></div>
            </main>
        </>
    )
}