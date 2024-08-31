import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../features/layout/DesktopNavigation/DesktopNavigation";

export default function Layout() {
    return (
        <>
            <main className="w-full min-h-full overflow-x-hidden absolute font-montserrat flex">
                <DesktopNavigation />
                <Outlet />
            </main>
        </>
    )
}