import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { AuthGuard } from "../../../auth/Guard";
import { baseApiUrl, useAuth, useAxios } from "../../../hooks";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Buttons from "../../../components/buttons";
import Bc from "../../../components/Breadcrumbs";

import search from "/Icons/search-lg.svg";
import add from "/Icons/add.svg";
import detailIcons from "/Icons/detail.svg";
import editIcons from "/Icons/edit.svg";

const Kegiatan = () => {
  const axsios = useAxios();
  const auth = useAuth();

  const [kegiatans, setKegiatan] = useState();

  useEffect(() => {
    axsios
      .get("/admin/kegiatan?pStart=2&pEnd=6&sortByDate=latest")
      .then((res) => {
          setKegiatan(res.data.kegiatan)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date
        .toLocaleDateString("en-GB", options)
        .replace(/ /g, " ")
        .replace(",", ",");
    };

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
            <h1 className="font-semibold text-3xl">Kegiatan</h1>
            <Link to={"/admin/kegiatan/edit"}>
              <Buttons
                text={"Buat Kegiatan Baru"}
                color={"text-color-white"}
                bgColor={"red"}
                icon={add}
              />
            </Link>
          </div>
          <div className="w-full justify-start items-center flex gap-3 py-3">
            <Button
              className={`border shadow-none p-3 rounded-full ${getButtonClasses(
                0
              )}`}
              onClick={() => handleClick(0)}
            >
              Semua
            </Button>
            <Button
              className={`border shadow-none p-3 rounded-full ${getButtonClasses(
                1
              )}`}
              onClick={() => handleClick(1)}
            >
              Terbit
            </Button>
            <Button
              className={`border shadow-none p-3 rounded-full ${getButtonClasses(
                2
              )}`}
              onClick={() => handleClick(2)}
            >
              Draf
            </Button>
          </div>
          <div className="w-full">
            <form className="flex">
              <div className="relative flex items-center justify-between w-full gap-3">
                <div className="dropdown">
                  <select
                    id="Date"
                    className="text-sm rounded-lg block w-full p-3 border"
                  >
                    <option>Terbaru</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50 pl-12"
                    placeholder="Cari"
                    required
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 bg-color-white">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-color-white border-b dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Foto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tgl Diterbitkan
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
                {kegiatans && 
                  kegiatans.map((kegiatan, key) => {
                      return(
                        <tr
                        key={key}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 w-[18vw]">
                              <img
                                src={
                                  kegiatan.thumbnail
                                    ? baseApiUrl + "storage/" + `${kegiatan.thumbnail}`
                                    : userIcon
                                }
                                width={"50%"}
                                height={"50%"}
                                alt="pfp"
                              />
                            </td>
                            <td className="px-6 py-4 w-[18vw]">
                              {kegiatan.judul}
                            </td>
                            <td className="px-6 py-4 w-[18vw]">
                              {kegiatan.deskripsi}
                            </td>
                            <td className="px-6 py-4 w-auto">
                              {formatDate(kegiatan.created_at)}
                            </td>
                            <td className="px-6 py-4">
                                <p className={ (kegiatan.status ? "bg-color-success50 text-color-success700" : "bg-color-warning50 text-color-warning700") +` p-2 rounded w-[4vw] font-semibold`}>{kegiatan.is_active ? "draf" : "terbit"}</p>
                            </td>
                            <td className="px-6 py-4 mt-[4vh] flex gap-2 items-center justify-center">
                              <Link>
                                <img src={editIcons} alt=""/>
                              </Link>
                              <Link to={"/admin/kegiatan/detail"}>
                                <img src={detailIcons} alt="" />
                              </Link>
                            </td>
                        </tr>
                      )
                  })}
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
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    </>
  );
};

export default Kegiatan;
