import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";
import { baseApiUrl, useAuth, useAxios } from "../../../hooks";


import Bc from "../../../components/Breadcrumbs";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Buttons from "../../../components/buttons";

import search from "/Icons/search-lg.svg";
import add from "/Icons/add.svg";

import detailIcons from "/Icons/detail.svg";
import DownloadIcon from "/Icons/download-02.svg";
import DownloadIconRed from "/Icons/download-02-red.svg";

import { Button } from "@material-tailwind/react";

const Proyek = () => {
    const axios = useAxios();
    const auth  = useAuth();

    const [proyeks, setProyek] = useState();

    useEffect(() => {
        axios
            .get("/admin/proyek")
            .then((res) => {
                setProyek(res.data.proyeks)
            })
    })

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const getButtonClasses = (index) => 
    activeButton === index 
      ? 'bg-color-darkBlue text-color-white' 
      : 'bg-color-white text-color-gray';


    return(
        <>
        <AuthGuard>
            <Navbar />
                <div className="w-full h-auto bg-color-grey px-32 py-12">
                    <Bc/>
                    <div className="w-full justify-between items-center flex mt-3">
                        <h1 className="font-semibold text-3xl">Proyek</h1>
                        <Link to={"/admin/proyek/create"}>
                            <Buttons text={"Buat Proyek Baru"} color={"text-color-white"} bgColor={"red"} icon={add}/>
                        </Link>
                    </div>
                    <div className="w-full justify-start items-center flex gap-3 py-3">
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(0)}`} onClick={() => handleClick(0)}>Semua</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(1)}`} onClick={() => handleClick(1)}>Terbit</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(2)}`} onClick={() => handleClick(2)}>Draf</Button>
                        
                    </div>
                    <div className="w-full">
                        <form >   
                            <div className="relative flex flex-col w-full">
                                <div className="flex gap-2 items-center max-w-full">
                                    <div className="dropdown max-w-max">
                                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>2024</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
                                    <div className="dropdown max-w-max">
                                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Kuartal 2 (April, Mei, Juni)</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
                                    <div className="dropdown w-1/4">
                                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Sektor</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
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
                                <div>
                                    <div className="relative inset-y-8 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                                        <img src={search} alt="" />
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50" placeholder="Cari" required />
                                </div>
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
                                        Jumlah Mitra
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tgl Mulai
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tgl Akhir
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 w-full py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Pengadaan sarana keterampilan Olahan Pangan
                                    </td>
                                    <td className="px-6 py-4 w-[12vw]">
                                        Kec. Karangwareng
                                    </td>
                                    <td className="px-6 py-4 w-[20.5vw]">
                                        2 
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4">
                                        16 Juli 2024
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <p className="bg-color-success50 p-2 rounded w-[4vw] text-color-success700 font-semibold">Terbit</p>
                                    </td>
                                    <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                        <Link to={"/admin/proyek/detail"}><img src={detailIcons} alt="" /></Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 w-1/4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Pengadaan sarana keterampilan Olahan Pangan
                                    </td>
                                    <td className="px-6 py-4 w-[18vw]">
                                        Kec. Karangwareng
                                    </td>
                                    <td className="px-6 py-4 w-[20.5vw]">
                                        2 
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4">
                                        -
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <p className="bg-color-warning50 p-2 rounded w-[4vw] text-color-warning700 font-semibold">Draf</p>
                                    </td>
                                    <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                        <Link to={"/admin/proyek/detail"}><img src={detailIcons} alt="" /></Link>
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
                                                <select id="Date" className="bg-gray-50 border text-sm rounded-lg text-center p-2">
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                </select>
                                            </div>
                                        </form>
                                        <p className="text-sm w-full px-1">1-5 data dari 10 data.</p>
                                    </div>
                                </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            <Footer text={"Kembali ke halaman utama"}/>
            </AuthGuard>
        </>
    )
}

export default Proyek