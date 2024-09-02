import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Bc from "../../../components/Breadcrumbs";
import CustomDialog from "../../../components/CustomDialog";
import Footer from "../../../components/footer";


import marker from "/Icons/marker-pin-02.svg";
import phone from "/Icons/phone.svg";
import email from "/Icons/mail-01.svg";
import bgHero from "/images/bgHero.png";
import pencil from "/Icons/pencil-02.svg";
import power from "/Icons/power-01.svg";
import { Button } from "@headlessui/react";





const DetailMitra = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);


    return(
        <>
        <AuthGuard>
            <Navbar />
            <div className="w-full h-auto bg-color-grey px-28 py-12">
                <Bc />
                <div className="w-full h-screen bg-color-grey px-2 py-12">
                    <div className="w-full justify-between items-center flex mt-3">
                        <h1 className="font-semibold text-3xl">Sektor</h1>
                        <div className="flex gap-3">
                            <Link>
                                <Button className={`border border-color-red text-color-white shadow-none py-2 px-3 rounded-md flex gap-2 items-center bg-color-red`}>
                                    <img src={pencil} alt="" /> Ubah Profil
                                </Button>
                            </Link>
                            <Link>
                                <Button className={`border border-color-red text-color-red shadow-none py-2 px-3 rounded-md flex gap-2 items-center bg-color-white`} onClick={handleOpen}>
                                    <img src={power} alt="" /> Non-aktifkan mitra
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-color-white flex max-w-full px-7 py-3 mt-3">
                        <div>
                            <img src={bgHero} alt="" className="rounded-lg w-[100%]"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <h1>Nama Mitra <span className="bg-color-success50 text-color-success700 p-2 rounded-full">Terverifikasi</span></h1>
                            <h1>PT Mitra Sejahtera Bersama</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <img src={email} alt="" width={40} className="bg-color-red100 p-2 rounded-full"/> <p>info@email.com</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={phone} alt="" width={40} className="bg-color-red100 p-2 rounded-full"/> <p>0821 #### ###</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={marker} alt="" width={40} className="bg-color-red100 p-2 rounded-full"/> <p>Jl. Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <h1>Maksud pemerintah kabupaten dalam Corporate Social Responsibility (CSR) adalah untuk menciptakan sinergi yang kuat antara pemerintah, perusahaan, dan masyarakat. Tujuan utama dari upaya ini adalah untuk mendorong pembangunan berkelanjutan di wilayah kabupaten. Dengan melibatkan perusahaan dalam program CSR, diharapkan dapat tercipta solusi komprehensif bagi berbagai permasalahan sosial dan lingkungan, sehingga kesejahteraan masyarakat dapat meningkat secara signifikan.</h1>
                        </div>
                    </div>
                </div>
                <CustomDialog open={open} handleOpen={handleOpen} title={"Non-Aktifkan Mitra?"} desc={"Mitra akan dinonaktifkan sementara, anda bisa mengaktifkan kembali setelahnya"} btn={"Simpan"} txtArea={true}/>
            </div>
            <Footer text={"Kembali ke halaman utama"} where="/"/>
            </AuthGuard>
        </>
    )
}

export default DetailMitra