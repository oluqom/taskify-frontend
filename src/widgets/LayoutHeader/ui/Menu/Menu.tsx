import { FC } from "react";
import { Menu } from "../../model/types";
import { Link } from "react-router-dom";

const Menu: FC<Menu> = ({ links }: Menu) => {
  return (
    <>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="cursor-pointer">
            <svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_16)">
                <line y1="2" x2="40" y2="2" stroke="#202020" stroke-width="4" />
                <line
                  y1="14"
                  x2="40"
                  y2="14"
                  stroke="#202020"
                  stroke-width="4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_16">
                  <rect width="40" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-50 mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
