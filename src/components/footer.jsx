import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

const Footer = ({ text, where = "/" }) => {
  const auth = useAuth();

  return (
    <div className="bottom-0 w-[100%] h-[auto] px-[100px] py-8 bg-[#101828] justify-between items-center inline-flex">
      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
        <div className="text-color-white text-sm font-normal font-['Inter'] leading-[25.20px]">
          © 2024 Corporate Social Responsibility Kabupaten Cirebon
        </div>
        <div className="text-color-white text-sm font-normal font-['Inter'] leading-[25.20px]">
          Pemkab Kabupaten Cirebon, Badan Pendapatan Daerah (Bapenda) Kabupaten
          Cirebon.
        </div>
      </div>
      <div className="crusor-pointer px-[18px] py-2.5 rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 flex">
        <Link
          to={where}
          className="crusor-pointer text-color-white text-base font-semibold font-['Inter'] leading-normal capitalize"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
