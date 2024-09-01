/* eslint-disable no-unused-vars */
import ChooseTemplates from "../../features/builder/ChooseTemplates/ChooseTemplates";
import TopBar from "../../shared/components/TopBar/TopBar";
import StandartTheme from "../../themes/standart/StandartTheme";

export default function Builder() {
    return (
        <>
            <section className="grow min-h-full">
                <TopBar pageName="Builder"/>
                <div className="w-full">
                    {/* Templates choosing */}
                    {/* <ChooseTemplates /> */}
                    {/* Actual Theme editing */}
                    <StandartTheme />
                </div>
            </section>
        </>
    )
}