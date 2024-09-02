import React from "react"

import NavbarPublic from "../../components/navbarPublic"
import HeroPublic from "../../components/HeroPublic";
import Cards from "../../components/cards";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

import search from "/Icons/search-lg.svg";


const Kegiatan = () => {
    const kegiatanItems = [
        { date: "27 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
        { date: "29 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." }
    ];

    return(
        <React.Fragment>
            <NavbarPublic />
            <HeroPublic title = "Kegiatan" text = "Kegiatan terkini dari CSR Kabupaten Cirebon"/>
            <section className="mt-5">
                <div className="flex gap-5 items-center w-full px-12">
                    <div className="dropdown">
                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Terbaru</option>
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
            </section>

            <section>
                <div className="w-full justify-center mt-3">
                    <Cards items={kegiatanItems} text={"Muat Lebih banyak"} where="/kegiatan/detail"/>
                </div>
            </section>

            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </React.Fragment>
    )
}

export default Kegiatan