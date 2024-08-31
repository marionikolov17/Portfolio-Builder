import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <main className="w-full min-h-full overflow-x-hidden absolute font-montserrat flex">
                <Outlet />
            </main>
        </>
    )
}