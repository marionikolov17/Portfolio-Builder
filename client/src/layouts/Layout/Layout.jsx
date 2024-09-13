import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../features/layout/components/Navigation/Navigation";
import LayoutContext from "./layout.context";

export default function Layout() {
    const [isNavigationOpened, setIsNavigationOpened] = useState(screen.width > 640);

    return (
        <LayoutContext.Provider
            value={{
                setIsNavigationOpened
            }}
        >
            <main className="w-full min-h-full absolute font-montserrat flex bg-mainBackground">
                {isNavigationOpened && <Navigation />}
                <Outlet />
            </main>
        </LayoutContext.Provider>
    )
}