/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { navIcons } from "../../../shared/data/navigation-icons";

export default function NavigationButton({ isActive, link, icon, text }) {
  return (
    <>
      <Link to={link} className={
        isActive ?
        "flex items-center bg-primaryBlue w-56 h-12 rounded-lg text-white mb-6"
        :
        "flex items-center w-56 h-12 rounded-lg text-blueGray mb-6 hover:bg-gray-100"
      }>
        {navIcons[icon]}
        <p className="ms-4 text-base">{text}</p>
      </Link>
    </>
  );
}
