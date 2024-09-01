import ChooseTemplates from "../../features/builder/ChooseTemplates/ChooseTemplates";
import TopBar from "../../shared/components/TopBar/TopBar";

export default function Builder() {
    return (
        <>
            <section className="grow min-h-full">
                <TopBar pageName="Builder"/>
                <div className="w-full">
                    {/* Templates choosing */}
                    <ChooseTemplates />
                </div>
            </section>
        </>
    )
}