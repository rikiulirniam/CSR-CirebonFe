import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import chevron from "/Icons/chevron-right-dark.svg";
import search from "/Icons/search-lg.svg";
import add from "/Icons/add.svg";
import Buttons from "../../../components/buttons";
import DropDown from "../../../components/dropdown";
import chevronDown from "/Icons/chevron-down.svg";
import img1 from "/images/img1.png";
import Bc from "../../../components/Breadcrumbs";
import detailIcons from "/Icons/detail.svg";
import Contact from "../../../components/contact";
import editIcons from "/Icons/edit.svg";
import homeIcon from "/Icons/home-line.svg";

import { Button } from "@material-tailwind/react";

const Kegiatan = () => {
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
          stroke-width="1.33333"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const getButtonClasses = (index) =>
    activeButton === index
      ? "bg-color-darkBlue text-color-white"
      : "bg-color-white text-color-gray";

  return (
    <>
      <AuthGuard>
        <Navbar />
        <div className="w-full h-auto bg-color-grey px-32 py-12">
          <Bc />
          <div className="w-full justify-between items-center flex mt-3">
            <h1 className="font-semibold text-3xl">Laporan Mitra</h1>
            <Link to={"/mitra/laporan/edit"}>
              <Buttons
                text={"Buat Laporan Baru"}
                color={"text-color-white"}
                bgColor={"red"}
                icon={add}
              />
            </Link>
          </div>
          {/* <div className="w-full justify-start items-center flex gap-3 py-3">
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(0)}`} onClick={() => handleClick(0)}>Semua</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(1)}`} onClick={() => handleClick(1)}>Terbit</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(2)}`} onClick={() => handleClick(2)}>Draf</Button>
                        
                    </div> */}
          <div className="w-full">
            <form className="flex">
              <div className="relative flex justify-between w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                  <img src={search} alt="" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50"
                  placeholder="Cari"
                  required
                />
                {/* <div className="dropdown">
                                    <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Terbaru</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </div> */}
              </div>
            </form>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 bg-color-white">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-color-white border-b dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Realisasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tgl Realisasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Laporan Dikirim
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 w-[18vw]">
                    Pengadaan sarana keterampilan Olahan Pangan
                  </td>
                  <td className="px-6 py-4 min-w-min">Kec. Karangwareng</td>
                  <td className="px-6 py-4">Rp.###,###,###</td>
                  <td className="px-6 py-4">1 Juli 2024</td>
                  <td className="px-6 py-4">16 July</td>
                  <td className="px-6 py-4 text-center">
                    <p className="bg-color-success50 p-2 rounded w-[4vw] text-color-success700 font-semibold">
                      Terbit
                    </p>
                  </td>
                  <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                    <Link to={"/admin/sektor/detail"}>
                      <img src={detailIcons} alt="" />
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 w-[18vw]">
                    Pengadaan sarana keterampilan Olahan Pangan
                  </td>
                  <td className="px-6 py-4 min-w-min">Kec. Karangwareng</td>
                  <td className="px-6 py-4">Rp.###,###,###</td>
                  <td className="px-6 py-4">1 Juli 2024</td>
                  <td className="px-6 py-4">16 July</td>
                  <td className="px-6 py-4 text-center">
                    <p className="bg-color-warning50 p-2 rounded w-[4vw] text-color-warning700 font-semibold">
                      Revisi
                    </p>
                  </td>
                  <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                    <Link to={"/admin/sektor/detail"}>
                      <img src={detailIcons} alt="" />
                    </Link>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="">
                  <td colspan="2" className="py-3 px-4 max-w-max">
                    <div className="text-base flex w-full items-center gap-3">
                      <p className="text-sm w-full px-2">Tampilkan Data</p>
                      <form action="">
                        <div className="dropdown">
                          <select
                            id="Date"
                            className="bg-gray-50 border text-sm rounded-lg text-center p-2"
                          >
                            <option>5</option>
                            <option>10</option>
                            <option>France</option>
                            <option>Germany</option>
                          </select>
                        </div>
                      </form>
                      <p className="text-sm w-full px-1">
                        1-5 data dari 10 data.
                      </p>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Contact />
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    </>
  );
};

export default Kegiatan;
