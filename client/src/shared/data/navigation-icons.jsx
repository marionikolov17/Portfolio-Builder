import { IoAnalyticsOutline, IoBuildOutline, IoLogOutOutline, IoSettingsOutline, IoHomeOutline  } from "react-icons/io5";

const className = "text-2xl ms-4 sm:ms-0 lg:ms-4";

export const navIcons = {
    'builder': <IoBuildOutline className={className}/>,
    'settings': <IoSettingsOutline className={className}/>,
    'logout': <IoLogOutOutline className={className}/>,
    'analytics': <IoAnalyticsOutline className={className}/>,
    'home': <IoHomeOutline className={className}/>,
}