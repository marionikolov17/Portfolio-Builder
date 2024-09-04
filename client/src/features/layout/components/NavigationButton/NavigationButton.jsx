/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { navIcons } from "../../../../shared/data/navigation-icons";

export default function NavigationButton({ isActive, link, icon, text }) {
  return (
    <>
      <Link to={link} className={
        isActive ?
        "nav-button-active"
        :
        "nav-button-inactive"
      }>
        {navIcons[icon]}
        <p className="ms-4 text-base flex sm:hidden lg:flex">{text}</p>
      </Link>
    </>
  );
}
