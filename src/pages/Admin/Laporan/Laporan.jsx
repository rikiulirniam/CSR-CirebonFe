import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { AuthGuard } from "../../../auth/Guard";
import { baseApiUrl, useAuth, useAxios } from "../../../hooks";


import Navbar from "../../../components/navbar";
import Bc from "../../../components/Breadcrumbs";
import Buttons from "../../../components/buttons";
import Footer from "../../../components/footer";

import search from "/Icons/search-lg.svg";
import detailIcons from "/Icons/detail.svg";
import DownloadIcon from "/Icons/download-02.svg";
import DownloadIconRed from "/Icons/download-02-red.svg";




const Laporan = () => {
    const axios = useAxios();
    const auth = useAuth();

    const [laporan, setLaporan] = useState();

    const [activeButton, setActiveButton] = useState(null);

    useEffect(()=> {
        axios
            .get("/admin/laporan")
            .then((res) => {
                setLaporan(res.data.laporan);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return date
            .toLocaleDateString("en-GB", options)
            .replace(/ /g, " ")
            .replace(",", ",");
        };


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
            <div className="w-full h-auto bg-color-grey px-28 py-12">
                <Bc />
                <div className="w-full justify-between items-center flex mt-3">
                        <h1 className="font-semibold text-3xl">Laporan Mitra</h1>
                </div>
                <div className="w-full justify-start items-center flex gap-3 py-3">
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(0)}`} onClick={() => handleClick(0)}>Semua</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(1)}`} onClick={() => handleClick(1)}>Revisi</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(2)}`} onClick={() => handleClick(2)}>Diterima</Button>
                        <Button className={`border shadow-none p-3 rounded-full ${getButtonClasses(3)}`} onClick={() => handleClick(3)}>Ditolak</Button>
                </div>
                <div className="w-full">
                        <form >   
                            <div className="relative flex flex-col w-full">
                                <div className="flex items-center justify-around max-w-full">
                                    <div className="dropdown w-1/4">
                                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Terbaru</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
                                    <div className="dropdown w-1/4">
                                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Terbaru</option>
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
                                    <th scope="col" className="px-6 py-3 w-5">
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
                                    {laporan && 
                                        laporan.map((laporans, key) => {
                                            return(
                                                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="px-6 py-4 w-auto text-gray-900 whitespace-nowrap">
                                                        <p>{laporans.judul}</p>
                                                    </td>
                                                    <td className="px-6 py-4 w-auto text-gray-900">
                                                        <p>Kec. {laporans.kecamatan.nama}</p>
                                                    </td>
                                                    <td className="px-6 py-4 w-auto text-gray-900">
                                                        <p>Rp. {laporans.dana_realisasi}</p>
                                                    </td>
                                                    <td className="px-6 py-4 w-auto text-gray-900">
                                                        <p>{formatDate(laporans.tgl_realisasi)}</p>
                                                    </td>
                                                    <td className="px-6 py-4 w-auto text-gray-900">
                                                        <p>{formatDate(laporans.created_at)}</p>
                                                    </td>
                                                    <td className="py-4 w-auto text-gray-900 pr-5">
                                                        <p className={
                                                            "text-center p-2 rounded-full " + (
                                                                laporans.status === "draf" ? "text-color-gray700 bg-color-gray100" : 
                                                                laporans.status === "diterima" ? "text-color-success700 bg-color-success50" :
                                                                laporans.status === "ditolak" ? "text-color-red bg-color-red50" :
                                                                laporans.status === "revisi" ? "text-color-warning700 bg-color-warning50" : ""
                                                            )
                                                        }>
                                                            {laporans.status}
                                                        </p>
                                                    </td>
                                                    <td className="py-4 inline-flex mt-3 px-6 items-center justify-center">
                                                        <Link to={"/admin/laporan/detail"}><img src={detailIcons} alt="" className="w-5"/></Link>
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

export default Laporan