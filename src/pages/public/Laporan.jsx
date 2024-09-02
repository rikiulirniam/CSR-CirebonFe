import React from "react";
import HeroPublic from "../../components/HeroPublic";
import NavbarPublic from "../../components/navbarPublic";
import search from "/Icons/search-lg.svg";
import CardsUser from "../../components/cardsUser"
import Contact from "../../components/contact";
import Footer from "../../components/footer";


const Laporan = () => {
    return(
        <>
            <NavbarPublic />
            <HeroPublic text={"Program CSR yang sudah berjalan di kabupaten cirebon"} title={"Laporan"}/>
            <section className="px-14 mt-5 flex flex-col h-auto">
                <div className="flex gap-5 items-center w-full">
                    <div className="dropdown">
                        <select id="Date" className="bg-gray-50 border text-color-gray900 text-sm rounded-lg block max-w-max p-3">
                            <option>Terbaru</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className="dropdown max-w-full">
                        <select id="Date" className="bg-gray-50 border text-color-gray900 text-sm rounded-lg block max-w-max p-3">
                            <option>Semua Mitra</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <form className="w-full">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img src={search} alt="" />
                            </div>
                            <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari kegiatan.." required />
                        </div>
                    </form>
                </div>
                <div className="max-w-full">
                    <CardsUser btnText={"Muat lebih banyak"} where="/mitra/login"/>
                </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"}/>
        </>
    )
}

export default Laporan