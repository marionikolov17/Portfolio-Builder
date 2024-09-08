import AboutSectionStandart from "../../features/themes/standart/components/AboutSectionStandart/AboutSectionStandart";
import CareerSectionStandard from "../../features/themes/standart/components/CareerSectionStandard/CareerSectionStandard";
import CertificatesSectionStandard from "../../features/themes/standart/components/CertificatesSectionStandard/CertificatesSectionStandard";
import ContactSectionStandard from "../../features/themes/standart/components/ContactSectionStandard/ContactSectionStandard";
import HeroSectionStandart from "../../features/themes/standart/components/HeroSectionStandart/HeroSectionStandart";
import ProjectSectionStandard from "../../features/themes/standart/components/ProjectSectionStandard/ProjectSectionStandard";
import TestimonialsSectionStandard from "../../features/themes/standart/components/TestimonialsSectionStandard/TestimonialsSectionStandard";

export default function StandartTheme() {
  return (
    <>
      <div className="w-full min-h-full px-3 sm:px-10 pb-2 overflow-x-hidden overflow-y-scroll no-scrollbar">
        <h1 className="mt-8 text-xl sm:text-3xl font-bold">Edit your portfolio</h1>
        <HeroSectionStandart />
        <AboutSectionStandart />
        <ProjectSectionStandard />
        <TestimonialsSectionStandard />
        <CareerSectionStandard />
        <CertificatesSectionStandard />
        <ContactSectionStandard />
      </div>
    </>
  );
}
