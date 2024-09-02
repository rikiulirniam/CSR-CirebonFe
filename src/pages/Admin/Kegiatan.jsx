import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import homeIcon from "/Icons/home-line.svg";
import chevron from "/Icons/chevron-right-dark.svg";
import search from "/Icons/search-lg.svg";
import add from "/Icons/add.svg";
import Buttons from "../../components/buttons";
import DropDown from "../../components/dropdown";
import chevronDown from "/Icons/chevron-down.svg";
import img1 from "/images/img1.png";
import detailIcons from "/Icons/detail.svg";
import editIcons from "/Icons/edit.svg";

import { Link } from "react-router-dom";
import { AuthGuard } from "../../auth/Guard";
import { useAuth, useAxios } from "../../hooks";

const Kegiatan = () => {
  const auth = useAuth();
  const axios = useAxios();
  const [kegiatan, setKegiatan] = useState(null);

  useEffect(() => {
    axios
      .get("/kegiatan")
      .then((response) => {
        setKegiatan(response.data.kegiatan);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-color-grey px-32 py-12">
        <div className="path flex  gap-4">
          <img src={homeIcon} className="w-[2%]" alt="" />
          <img src={chevron} className="w-[2%]" alt="" />
          <p className="text-color-red text-base font-semibold bg-color-pink p-1 rounded">
            Kegiatan
          </p>
        </div>
        <div className="w-full justify-between items-center flex mt-3">
          <h1 className="font-semibold text-3xl">Kegiatan</h1>
          <Buttons
            text={"Buat Kegiatan Baru"}
            color={"text-color-white"}
            bgColor={"red"}
            icon={add}
          />
        </div>
        <div className="w-full justify-start items-center flex">
          <Buttons
            text={"Semua"}
            color={""}
            focus={"bg-color-blue"}
            focusText={"text-color-white"}
            bgColor={"lightGray"}
          />
          <Buttons
            text={"Terbit"}
            color={""}
            focus={"bg-color-blue"}
            focusText={"text-color-white"}
            bgColor={"lightGray"}
          />
          <Buttons
            text={"Draf"}
            color={""}
            focus={"bg-color-blue"}
            focusText={"text-color-white"}
            bgColor={"lightGray"}
          />
        </div>
        <div className="w-full">
          <form className="flex">
            {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
            <div className="relative flex justify-between w-full ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                <img src={search} alt="" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[85%] p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50"
                placeholder="Cari"
                required
              />
              <div className="dropdown">
                <select
                  id="Date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 w-[15%] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={img1} className="rounded-lg" alt="" />
                </td>
                <td className="px-6 py-4 w-[18vw]">
                  Pengadaan sarana keterampilan Olahan Pangan
                </td>
                <td className="px-6 py-4 w-[20.5vw]">
                  Vestibulum mauris tincidunt ultrices donec. Egestas purus duis
                  malesuada malesuada dictum orci sapien.
                </td>
                <td className="px-6 py-4">16 Juli 2024</td>
                <td className="px-6 py-4 text-center">
                  <p className="bg-color-green bg-opacity-40 p-1 rounded">
                    Terbit
                  </p>
                </td>
                <td className="px-6 py-4 mt-[6vh] flex gap-2 items-center justify-center">
                  <Link>
                    <img src={editIcons} alt="" />
                  </Link>
                  <Link>
                    <img src={detailIcons} alt="" />
                  </Link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="text-base h-[10vh]">
                <td colspan="2" className="px-6">
                  <div className="text-base flex w-full items-center gap-3">
                    <p className="w-full">Tampilkan Data</p>
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
                    <p className="text-base">1-5 data dari 10 data.</p>
                  </div>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          {kegiatan ? (
            <div>
              <h1>{kegiatan.judul}</h1>
              {/* Tampilkan gambar */}
              <img
                src={`http://localhost:8000/${kegiatan.thumbnail}`}
                alt={kegiatan.judul}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer text={"Kembali ke halaman utama"} />
    </>
  );
};

export default Kegiatan;
