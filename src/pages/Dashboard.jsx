import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import DropDown from "../components/dropdown";
import Buttons from "../components/buttons";
import Bubble from "../components/Bubble";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import Footer from "../components/footer";

import LogoCirebon from "/images/logocirebon.png";
import chevronDown from "/Icons/chevron-down.svg";
import DownloadIcon from "/Icons/download-02.svg";
import DownloadIconRed from "/Icons/download-02-red.svg";
import search from "/Icons/search-lg.svg";
import refresh from "/Icons/refresh-ccw-04.svg";
import detailIcons from "/Icons/detail.svg";
import add from "/Icons/add.svg";
import icon1 from "/Icons/element-1.svg";
import icon2 from "/Icons/check-verified-02.svg";
import icon3 from "/Icons/check-verified-02-green.svg";
import icon4 from "/Icons/element-2.svg";

import { useAxios } from "../hooks";
import { AuthGuard } from "../auth/Guard";

const Dashboard = () => {
  const axios = useAxios();
  const [role, setRole] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(role);

  useEffect(() => {
    axios
      .get("/auth")
      .then((res) => {
        setRole(res.data.role);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center bg-opacity-10 justify-center h-screen">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange flex align-middle justify-center">
            <img src={LogoCirebon} alt="-" />
          </div>
          <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange animate-spin"></div>
        </div>
      </div>
    );
  } else {
    return (
      <AuthGuard>
        <Navbar />
        <Hero />
        <div className="bg-color-grey md:px-12 2xl:px-24">
          <section className="w-full flex flex-col ">
            <div className="flex justify-center items-center gap-3 mt-5 flex-col md:flex-row">
              <DropDown title={"2024"} icon={chevronDown} />
              <DropDown
                title={"Kuartal 2 (April, Mei, Juni)"}
                icon={chevronDown}
              />
              <DropDown title={"Semua Sektor"} icon={chevronDown} />
              <DropDown title={"Semua Mitra"} icon={chevronDown} />
              <Buttons
                text={"Terapkan filter"}
                bgColor={"red"}
                color={"text-color-white"}
              />
              <Buttons
                text={"Unduh .CSV"}
                icon={DownloadIcon}
                bgColor={"white"}
                color={"text-color-green"}
              />
              <Buttons
                text={"Unduh .PDF"}
                icon={DownloadIconRed}
                bgColor={"white"}
                color={"text-color-red"}
              />
            </div>
            <h1 className="font-bold text-2xl 2xl:text-3xl mt-4">
              Data Statistik
            </h1>
            <div className="flex justify-center items-center gap-2 my-8 flex-col md:flex-row">
              <Bubble
                title={"Total Proyek CSR"}
                color={"bg-color-freshOrange"}
                icon={icon1}
                text={"1000"}
              />
              <Bubble
                title={"Proyek terealisasi"}
                color={"bg-color-purple"}
                icon={icon2}
                text={"1000"}
              />

              {role && (
                <Bubble
                  title={"Mitra Bergabung"}
                  color={"bg-color-blue"}
                  icon={icon4}
                  text={"1000"}
                />
              )}

              <Bubble
                title={"Proyek terealisasi"}
                color={"bg-color-green"}
                icon={icon3}
                text={"Rp 10,000,000"}
              />
            </div>
          </section>
          <h1 className="text-3xl font-bold ">Realisasi Proyek CSR</h1>
          <div className="max-h-max max-w-max bg-color-white rounded p-5 mt-6 flex justify-start flex-wrap">
            <div className="flex">
              <PieChart />
              <BarChart text="Total realisasi sektor CSR" />
            </div>
            <div className="flex gap-20">
              <BarChart text="Total realisasi proyek CSR berdasarkan lokasi" />

              {role && (
                <BarChart text="Total realisasi sektor CSR" />
              )}
            </div>
          </div>
          {!role && (
              <div className="w-full h-auto bg-color-white px-32 py-12">
                  <div className="w-full justify-between items-center flex mt-3">
                      <h1 className="font-semibold text-3xl">Laporan Mitra</h1>
                      <Link to={"/mitra/laporan/create"}>
                          <Buttons text={"Buat Laporan Baru"} color={"text-color-white"} bgColor={"red"} icon={add}/>
                      </Link>
                  </div>
                  <div className="w-full">
                      <form className="flex">   
                          <div className="relative flex justify-between w-full ">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                                  <img src={search} alt="" />
                              </div>
                              <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50" placeholder="Cari" required />
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
                                  <td className="px-6 py-4 min-w-min">
                                    Kec. Karangwareng  
                                  </td>
                                  <td className="px-6 py-4">
                                    Rp.###,###,###
                                  </td>
                                  <td className="px-6 py-4">
                                    1 Juli 2024
                                  </td>
                                  <td className="px-6 py-4">
                                    16 July
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                        <p className="bg-color-warning50 p-2 rounded w-[4vw] text-color-warning700 font-semibold">Draf</p>
                                  </td>
                                  <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                      <Link to={"/admin/sektor/detail"}><img src={detailIcons} alt="" /></Link>
                                  </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td className="px-6 py-4 w-[18vw]">
                                    Pengadaan sarana keterampilan Olahan Pangan
                                  </td>
                                  <td className="px-6 py-4 min-w-min">
                                    Kec. Karangwareng  
                                  </td>
                                  <td className="px-6 py-4">
                                    Rp.###,###,###
                                  </td>
                                  <td className="px-6 py-4">
                                    1 Juli 2024
                                  </td>
                                  <td className="px-6 py-4">
                                    16 July
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                        <p className="bg-color-warning50 p-2 rounded w-[4vw] text-color-warning700 font-semibold">Draf</p>
                                  </td>
                                  <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                      <Link to={"/admin/sektor/detail"}><img src={detailIcons} alt="" /></Link>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <Link to={"/admin/sektor/edit"}>
                          <Buttons text={"Muat lebih banyak"} color={"text-color-red"} bgColor={"white"} icon={refresh}/>
                    </Link>
                  </div>
              </div>
              )}
        </div>
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    );
  }
};

export default Dashboard;
