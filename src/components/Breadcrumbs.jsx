import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

import homeIcon from "/Icons/home-line.svg";

const Bc = ({ PublicMode }) => {
  const separatorIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-right">
        <path
          id="Icon"
          d="M6 12L10 8L6 4"
          stroke="#667085"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <Breadcrumbs
        separator={
          PublicMode ? (
            <span className="text-color-white font-medium">/</span>
          ) : (
            separatorIcon
          )
        }
      >
        <Link to="/" className="opacity-60">
          {PublicMode ? (
            <p className="text-[#E66445] text-lg">Beranda</p>
          ) : (
            <img src={homeIcon} alt="Home Icon" />
          )}
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span
              key={name}
              className={
                PublicMode
                  ? "text-color-white text-lg rounded-lg"
                  : "text-color-red900 font-semibold text-lg bg-color-red100 p-2 rounded-lg"
              }
            >
              {name}
            </span>
          ) : (
            <Link
              key={name}
              to={routeTo}
              className={
                PublicMode
                  ? "text-[#E66445] text-lg"
                  : "text-color-gray500 font-semibold text-lg"
              }
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default Bc;
