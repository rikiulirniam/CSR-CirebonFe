import React from "react";
import { Link } from "react-router-dom";
import NavbarPublic from "../../components/navbarPublic";
import HeroPublic from "../../components/HeroPublic";
import { useState, useEffect } from "react";
import detailIcons from "/Icons/eyeLight.svg";
import Buttons from "../../components/buttons";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import Bc from "../../components/Breadcrumbs";

const DetailProyek = () => {
    const [Images, setImages] = useState([]);

    useEffect(()=> { {/* untuk set gambar */}
        const loadImage = () => { 
            const img = [];
            for(let i = 1; i <= 10; i++){
                img.push(`/images/img1.png`);
            }
            setImages(img);
        };
        loadImage();
    }, []);

    return(
        <>
            <NavbarPublic />
            <HeroPublic title={"Pemkab Cirebon Terima Bantuan PJU Tematik dari Bank BJB"} date={"Mulai: Jul 13,2024 . Akhir: Jul 15,2024"} text={"UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon"}/>
            <section className="mt-5">
                <div className="px-14">
                    <div className="header w-full flex flex-col gap-1 items-start justify-start"> 
                        <div className="h-auto py-[5px] justify-start items-center inline-flex">
                            <div className="w-[3vw] self-stretch border-t-4 border-color-orange" />
                        </div>
                        <h1 className='text-4xl font-bold capitalize mt-2'>Deskripsi proyek</h1>
                        <p>Volutpat iaculis varius purus proin neque. Facilisi vulputate consectetur lobortis gravida nunc tincidunt. Nulla quisque aliquet egestas maecenas nam fringilla molestie. Vitae vestibulum non a sed purus purus. Neque lectus nulla id tortor bibendum aenean scelerisque mauris eu.</p>
                    </div>
                    <div className="mt-2">
                        <h1 className="font-bold text-xl">Galeri</h1>
                        <div className="w-full h-auto flex overflow-x-auto gap-2">
                            {Images.map((image, index) => (
                                <img className='m-2' key={index} src={image} alt={`Mitra ${index + 1}`} width={200}/>
                            ))}
                        </div>
                        <h1 className="font-bold text-2xl mt-3">Mitra yang berpatisipasi</h1>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-color-white border-b dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama mitra
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Lokasi
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No. Telepon
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tgl pengajuan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        GITS Indonesia
                                    </td>
                                    <td className="px-6 py-4">
                                        info@gits.id
                                    </td>
                                    <td className="px-6 py-4">
                                        022 677 #### 
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                        <Link to={"/sektor/detail/proyek"}>
                                            <Buttons text={"Lihat detail"} color={"text-color-white"} bgColor={"red"} icon={detailIcons}/>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        GITS Indonesia
                                    </td>
                                    <td className="px-6 py-4">
                                        info@gits.id
                                    </td>
                                    <td className="px-6 py-4">
                                        022 677 #### 
                                    </td>
                                    <td className="px-6 py-4">
                                        1 Juli 2024
                                    </td>
                                    <td className="px-6 py-4 mt-[2vh] flex gap-2 items-center justify-center">
                                        <Link to={"/sektor/detail/proyek"}>
                                            <Buttons text={"Lihat detail"} color={"text-color-white"} bgColor={"red"} icon={detailIcons}/>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </>
    )
}

export default DetailProyek