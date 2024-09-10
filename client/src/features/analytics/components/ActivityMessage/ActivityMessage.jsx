import { IoEyeOutline } from "react-icons/io5";

export default function ActivityMessage() {
    return (
        <>
            <div className="mt-4 w-full flex items-center">
                {/* Icon Container */}
                <IoEyeOutline className="text-4xl shrink-0"/>
                <div className="grow mx-4">
                    <p className="text-base sm:text-lg">Someone viewed your portfolio from Sofia, Bulgaria for 1m 02s</p>
                    <p className="text-slate-400 text-xs sm:text-sm">2024-08-29 at 7:43PM</p>
                </div>
            </div>
        </>
    )
}