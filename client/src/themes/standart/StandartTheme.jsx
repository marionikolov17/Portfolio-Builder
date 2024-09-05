import AboutSectionStandart from "../../features/themes/standart/components/AboutSectionStandart";
import HeroSectionStandart from "../../features/themes/standart/components/HeroSectionStandart";

export default function StandartTheme() {
  return (
    <>
      <div className="w-full min-h-full px-2 sm:px-10 pb-2 overflow-x-hidden overflow-y-scroll no-scrollbar">
        <h1 className="mt-8 text-3xl font-bold">Edit your portfolio</h1>
        <HeroSectionStandart />
        <AboutSectionStandart />
      </div>
    </>
  );
}
