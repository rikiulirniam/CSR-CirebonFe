import { Link } from "react-router-dom";
import img2 from "/images/img2.png";

import React from "react";
import { baseApiUrl } from "../../../hooks";

const KegiatanCard = ({ text, title, description, created, where, image }) => {
  return (
    <Link to={where}>
      <div className="cards flex gap-4 items-center justify-center p-2 mb-5">
        <div className="relative w-64 mx-auto bg-white border border-color-textGray overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={image ? baseApiUrl + "storage/" + image : img2}
            alt="Kartu Image"
          />
          <div className="absolute top-4 left-4 date text-color-white capitalize w-32 text-center">
            <p className="p-2 bg-color-red">{created}</p>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm w-[13rem] h-[4rem] text-color-textGray overflow-hidden overflow-ellipsis whitespace-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default KegiatanCard;
