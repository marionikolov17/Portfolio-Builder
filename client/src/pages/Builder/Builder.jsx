/* eslint-disable no-unused-vars */
import ChooseTemplates from "../../features/builder/components/ChooseTemplates/ChooseTemplates";
import TopBar from "../../shared/components/TopBar/TopBar";
import StandartTheme from "../../themes/standart/StandartTheme";

export default function Builder() {
    return (
        <>
            <section className="grow max-w-full min-h-full pb-10 overflow-x-hidden">
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