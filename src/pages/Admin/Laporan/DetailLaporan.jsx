import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
} from "@material-tailwind/react";

import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Bc from "../../../components/Breadcrumbs";
import CustomDialog from "../../../components/CustomDialog";
import Footer from "../../../components/footer";

import Group from "/Icons/Group.svg";
import xClose from "/Icons/x-close.svg";
import check from "/Icons/check.svg";
import pencil02 from "/Icons/pencil-02-blue.svg";
import frame from "/images/Frame.png";



const DetailLaporan = () => {
    const [openRevisi, setOpenRevisi] = React.useState(false);
    const [openTolak, setOpenTolak] = React.useState(false);
    const [openTerima, setOpenTerima] = React.useState(false);

    const handleOpenRevisi = () => setOpenRevisi(!openRevisi);
    const handleOpenTolak = () => setOpenTolak(!openTolak);
    const handleOpenTerima = () => setOpenTerima(!openTerima);


    return(
        <>
        <AuthGuard>
            <Navbar />
            <div className="w-full h-auto bg-color-grey px-28 py-12">
                <Bc />
                <div className="w-full justify-between items-center flex mt-3">
                    <h1 className="font-semibold text-3xl">Detail Laporan</h1>
                </div>
                <section>
                    <div className="max-h-full bg-color-white mt-5 p-5 rounded-md">
                        <div className="tags w-full flex gap-3 text-base">
                            <p className="bg-color-gray100 text-color-grey700 rounded-full p-2 font-semibold">Social</p>
                            <p className="bg-color-gray100 text-color-grey700 rounded-full p-2 font-semibold">Rehabilitas Sosial</p>
                        </div>
                        <div className="flex mt-5 max-w-full">
                            <img src={Group} alt="" width={55} className="bg-color-red100 p-3 rounded-full"/>
                            <div className="flex flex-col px-3">
                                <h1 className="font-semibold capitalize text-2xl">Laporan pengadaan perkakas masak untuk desa</h1>
                                <div className="flex gap-3">
                                    <p className="text-md font-semibold">PT Mitra berbakti sekali</p>
                                    <p className="text-md font-semibold">1 July 2024</p>   
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-3 justify-start items-center w-auto overflow-y-hidden">
                            <img src={frame} alt="" width={250}/>
                            <img src={frame} alt="" width={250}/>
                            <img src={frame} alt="" width={250}/>
                            <img src={frame} alt="" width={250}/>
                            <img src={frame} alt="" width={250}/>
                        </div>
                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col items-start gap-3 p-2 w-[20vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                                <p>Realisasi</p>
                                <p className="font-semibold text-md">Rp 10,000,000</p>
                            </div>
                            <div className="flex flex-col items-start gap-3 p-2 w-[30vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                                <p>Nama Proyek</p>
                                <p className="font-semibold text-md">Pengadaan sarana keterampilan Olahan Pangan</p>
                            </div>
                            <div className="flex flex-col items-start gap-3 p-2 w-[25vw] bg-color-red100 rounded-lg" style={{ boxShadow: '-5px 0 0 0 #a83434' }}>
                                <p>Kecamatan</p>
                                <p className="font-semibold text-md">Kec. Karangwareng</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <h1 className="text-base font-semibold">Rincian Laporan</h1>
                            <p>Eu venenatis sit elit venenatis. Pretium neque nunc urna auctor lacus. Eu nulla urna in maecenas urna mi auctor et velit. Diam montes tristique donec vitae maecenas at vulputate. Scelerisque ultricies ullamcorper elementum bibendum at enim ac. Vel sed nibh mi donec non metus ipsum. Vel semper et nulla interdum pellentesque at aliquam ipsum condimentum. Porta dolor sed ultrices donec mattis.
                                Sapien venenatis volutpat purus nisi. Scelerisque mauris aenean pharetra erat nibh velit elit. Arcu vitae et id volutpat in mauris enim malesuada. Bibendum magna sapien velit integer porttitor. Vel rhoncus arcu sed ultricies. Nisi placerat nisl eu vitae. Morbi lobortis ullamcorper auctor aliquam quam purus nec. Nulla nullam viverra malesuada ante neque felis in lacus. Eu risus pellentesque aliquam amet et hac. Enim ipsum morbi morbi pellentesque orci erat eget. Sed orci blandit sagittis nisl mauris nisl. Ut placerat faucibus risus dis vitae sem. Commodo quisque dignissim convallis diam urna aliquam. Ut nec erat vel varius turpis senectus purus.
                                Enim ut pellentesque sit enim. Mollis lacus justo justo at feugiat et. Enim pulvinar neque lorem tellus nunc eros id. Mattis nulla in nibh in vel auctor ac nulla diam. Arcu dolor cras nulla fermentum sed hendrerit est lorem eu. In porttitor mauris sit mauris lacinia dolor. Est faucibus turpis quisque amet. Molestie senectus pharetra turpis amet condimentum. Aenean ut nam enim amet amet sit curabitur scelerisque. Pellentesque mi phasellus mi tellus ullamcorper. Consequat nisl phasellus orci fermentum neque aliquam. Condimentum mauris vel porta fringilla in arcu mi proin mauris. Molestie tellus nullam etiam suscipit consectetur. Tempor eget duis tortor dolor montes natoque vestibulum quis. Lorem gravida non amet sed nunc urna massa.
                                Id blandit laoreet mauris nibh nunc aenean. Elementum ultricies vulputate et id vitae tristique egestas. Elementum etiam diam leo tempus ut sit mi. Proin eget eu interdum risus. Lectus aliquam nisi viverra molestie mollis. Id morbi nulla dignissim mi purus adipiscing quis. Nec eget at nulla viverra convallis urna at. A mollis pellentesque nibh pretium ornare risus arcu nisl dolor. Malesuada sed iaculis in odio pellentesque placerat eu. Gravida eu tellus sed amet condimentum eget arcu fringilla. Diam in euismod orci sit. Pellentesque nulla euismod quam eget elementum viverra. Proin dignissim maecenas ultrices justo pellentesque accumsan nisl. Porta justo maecenas neque viverra magna.
                                Urna justo arcu leo nulla velit condimentum. Ultricies neque pretium quisque sit vitae felis volutpat urna aliquet. Iaculis lacus diam sed platea morbi auctor sed cras. Habitasse lacus massa imperdiet sed nec habitant amet convallis. Commodo tristique sed faucibus netus. Volutpat lobortis at varius ac neque maecenas pellentesque.</p>
                        </div>
                        <div className="flex gap-3 items-center justify-center max-w-full mt-4 pt-10">
                            <Button className={`border border-color-red900 text-color-red900 shadow-none py-3 px-8 rounded-md flex gap-2 items-center bg-color-red100`} onClick={handleOpenTolak}>
                                <img src={xClose} alt="" /> Tolak
                            </Button>
                            <Button className={`border border-color-blue700 text-color-blue700 shadow-none py-3 px-8 rounded-md flex gap-2 items-center bg-color-blue50`} onClick={handleOpenRevisi}>
                                <img src={pencil02} alt="" /> Revisi
                            </Button>
                            <Button className={`border border-color-blue700 text-color-white shadow-none py-3 px-8 rounded-md flex gap-2 items-center bg-color-blue700`} onClick={handleOpenTerima}>
                                <img src={check} alt="" /> Terima
                            </Button>
                        </div>
                    </div>
                </section>
                <CustomDialog open={openRevisi} handleOpen={handleOpenRevisi} title={"Revisi"} desc={"Laporan akan ditolak dan pihak mitra harus mengirimkan laporan kembali"} btn={"Tolak"} txtArea={true}/>
                <CustomDialog open={openTolak} handleOpen={handleOpenTolak} title={"Tolak"} desc={"Laporan akan ditolak dan pihak mitra harus mengirimkan laporan kembali"} btn={"Tolak"} txtArea={true}/>
                <CustomDialog open={openTerima} handleOpen={handleOpenTerima} title={"Terima"} desc={"Laporan akan diterima dan data portal CSR Kabupaten Cirebon akan ter-update secara otomatis"} btn={"Terima"} txtArea={false}/>
            </div>
            <Footer text={"Kembali ke halaman utama"} where="/"/>
        </AuthGuard>
        </>
    )
}

export default DetailLaporan