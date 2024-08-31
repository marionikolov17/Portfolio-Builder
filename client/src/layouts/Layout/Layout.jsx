import { Outlet } from "react-router-dom";
import Navigation from "../../features/layout/Navigation/Navigation";

export default function Layout() {
    return (
        <>
            <main className="w-full min-h-full overflow-x-hidden absolute font-montserrat flex bg-mainBackground">
                <Navigation />
                <Outlet />
            </main>
        </>
    )
}