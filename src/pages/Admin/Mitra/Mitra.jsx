import React, { useEffect, useState } from "react";
import { baseApiUrl, useAuth, useAxios } from "../../../hooks";
import { Link, useLocation } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";

import Bc from "../../../components/Breadcrumbs";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Buttons from "../../../components/buttons";

import search from "/Icons/search-lg.svg";
import userIcon from "/images/user.png";
import add from "/Icons/add.svg";
import img1 from "/images/img1.png";
import detailIcons from "/Icons/detail.svg";


const Mitra = () => {
    const axios = useAxios();
    const auth = useAuth();

    const [mitras, setMitras] = useState();

    useEffect(() => {
        axios
            .get("/admin/mitra")
            .then((res) => {
                setMitras(res.data.mitras);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return date
            .toLocaleDateString("en-GB", options)
            .replace(/ /g, " ")
            .replace(",", ",");
        };

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);


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
                    <Bc />
                    <div className="w-full justify-between items-center flex mt-3">
                        <h1 className="font-semibold text-3xl">Mitra</h1>
                        <Link to={"/admin/mitra/edit"}>
                            <Buttons text={"Buat Mitra Baru"} color={"text-color-white"} bgColor={"red"} icon={add}/>
                        </Link>
                    </div>
                    <div className="w-full">
                        <form className="flex">   
                            <div className="relative flex justify-between w-full ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                                    <img src={search} alt="" />
                                </div>
                                <input type="search" id="default-search" className="block w-[85%] p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50" placeholder="Cari" required />
                                <div className="dropdown">
                                    <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Terbaru</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
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
                                    <th scope="col" className="px-6 py-3 w-7">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama PT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Deskripsi
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tgl Terdaftar
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
                                {mitras && 
                                    mitras.map((mitra, key) => {
                                        return(
                                            <tr
                                            key={key}
                                            className="bg-color-white border-b"
                                            >
                                                <td className="px-6 py-4 w-[15%] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img src={
                                                        mitra.image
                                                        ? baseApiUrl + "storage/" + `${mitra.image}`
                                                        : userIcon
                                                    } alt="" />
                                                </td>
                                                <td className="px-6 py-4">{mitra.name}</td>
                                                <td className="px-6 py-4">{mitra.nama_perusahaan}</td>
                                                <td className="px-6 py-4 w-auto break-words">
                                                    <p>
                                                        {mitra.deskripsi}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">{formatDate(mitra.created_at)}</td>
                                                <td className="px-6 py-4">
                                                    <p className={ (mitra.is_active ? "bg-color-success50 text-color-success700" : "bg-color-red100 text-color-red900") +` p-2 rounded w-[4vw] font-semibold`}>{mitra.is_active ? "active" : "in-Active"}</p>
                                                </td>
                                                <td className="px-6 py-4 mt-14 flex gap-2 items-center justify-center">
                                                    <Link to={"/admin/mitra/detail"}><img src={detailIcons} alt="" /></Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
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

export default Mitra