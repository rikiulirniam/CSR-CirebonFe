import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";


import HeroPublic from "../../components/HeroPublic";
import NavbarPublic from "../../components/navbarPublic";
import search from "/Icons/search-lg.svg";
import CocaCola from "/images/mitra/CocaCola.png";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

const Mitra = () => {
    const Mitra = []

    for (let i = 1; i <= 7; i++) {
        Mitra.push(
            <Card className="mt-6 w-64 rounded-none" key={i}>
                <CardHeader color="blue-gray" className="relative max-h-max rounded-none shadow-none">
                    <img src={CocaCola} alt="" className="w-full h-48 object-cover" />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-base font-bold">
                        Coca-Cola Europacific Partners Indonesia Plant Bekasi 1
                    </Typography>
                </CardBody>
            </Card>
        );
    }


    return(
        <>
            <NavbarPublic />
            <HeroPublic text={"Program CSR yang sudah berjalan di kabupaten cirebon"} title={"Mitra"}/>
            <section className="w-full flex flex-col items-center px-24">
                <div className="h-auto py-[5px] justify-center items-center inline-flex">
                    <div className="w-[5vw] self-stretch border-t-4 border-color-orange" />
                </div>
                <div className="flex gap-5 items-center w-full mt-5">
                    <div className="dropdown">
                        <select id="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-max p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                <div className="flex flex-wrap gap-2 items-start px-2">
                    {Mitra}
                </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </>
    )
}

export default Mitra