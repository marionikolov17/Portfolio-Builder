import { IoAnalyticsOutline, IoBuildOutline, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const className = "text-2xl ms-4";

export const navIcons = {
    'builder': <IoBuildOutline className={className}/>,
    'settings': <IoSettingsOutline className={className}/>,
    'logout': <IoLogOutOutline className={className}/>,
    'analytics': <IoAnalyticsOutline className={className}/>,
}