import React from "react"
import NavbarPublic from "../../components/navbarPublic"
import HeroPublic from "../../components/HeroPublic"
import chevron from "/Icons/chevron-right-dark.svg";
import Buttons from "../../components/buttons";
import detailIcons from "/Icons/eyeLight.svg";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";




const DetailSektor = () => {
    return(
        <>
            <NavbarPublic />
            <HeroPublic title={"Sosial"} text={"Program CSR yang sudah berjalan di kabupaten cirebon"}/>
            <section className="px-24">
                <div className="w-full">
                    <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
                        <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
                    </div>
                    <div className="flex gap-3">
                        <p>Volutpat iaculis varius purus proin neque. Facilisi vulputate consectetur lobortis gravida nunc tincidunt. Nulla quisque aliquet egestas maecenas nam fringilla molestie. Vitae vestibulum non a sed purus purus. Neque lectus nulla id tortor bibendum aenean scelerisque mauris eu.</p>
                        <p>Pharetra neque porttitor nisl et neque porta arcu in eget. Fames sed enim augue egestas lectus libero sit et. Pellentesque aliquet nunc in eu nibh eget. Lacus vestibulum tortor maecenas at sit turpis ut. Aliquet amet mollis pellentesque fusce sagittis suscipit dui. Fringilla molestie urna nec tristique tincidunt. Tristique quam pellentesque bibendum egestas mauris neque. Duis proin fusce cursus nunc blandit. Volutpat orci non risus enim. Est suspendisse molestie tincidunt nulla. Velit nunc viverra justo ipsum. Sed in faucibus quis amet nunc.</p>
                    </div>
                </div>
            </section>
            <section className="px-24 mt-12">
                <div className="header w-full flex flex-col gap-1 items-start justify-start"> 
                    <div className="h-auto py-[5px] justify-start items-center inline-flex">
                        <div className="w-[3vw] self-stretch border-t-4 border-color-orange" />
                    </div>
                    <h1 className='text-4xl font-bold capitalize mt-2'>Program CSR</h1>
                    <p>Bidang program CSR Kabupaten Cirebon yang tersedia</p>
                </div>
                    <div className="w-full">
                        <div className="content flex w-full h-auto mt-12">
                            <div className="category flex flex-col p-5 w-full text-lg">
                                <div className='hoverable w-2/3 border-l-4 border-color-gray200 hover:border-color-orange hover:bg-color-red50 p-3'>
                                    <div className='w-full capitalize flex flex-col items-start'>
                                        <p className="hover:font-semibold flex justify-between w-full">Rehabilitasi sosial <span><img src={chevron} width={25} alt="" /></span></p>
                                        <p>9 proyek</p>
                                    </div>
                                </div>
                                <div className='hoverable w-2/3 border-l-4 border-color-gray200 hover:border-color-orange hover:bg-color-red50 p-3'>
                                    <div className='w-full capitalize flex flex-col items-start'>
                                        <p className="hover:font-semibold flex justify-between w-full">Jaminan sosial <span><img src={chevron} width={25} alt="" /></span></p>
                                        <p>13 proyek</p>
                                    </div>
                                </div>
                                <div className='hoverable w-2/3 border-l-4 border-color-gray200 hover:border-color-orange hover:bg-color-red50 p-3'>
                                    <div className='w-full capitalize flex flex-col items-start'>
                                        <p className="hover:font-semibold flex justify-between w-full">Pemberdayaan sosial <span><img src={chevron} width={25} alt="" /></span></p>
                                        <p>1 proyek</p>
                                    </div>
                                </div>
                                <div className='hoverable w-2/3 border-l-4 border-color-gray200 hover:border-color-orange hover:bg-color-red50 p-3'>
                                    <div className='w-full capitalize flex flex-col items-start'>
                                        <p className="hover:font-semibold flex justify-between w-full">Lainnya <span><img src={chevron} width={25} alt="" /></span></p>
                                        <p>23 proyek</p>
                                    </div>
                                </div>
                            </div>
                            <div className="desc flex flex-col gap-3 items-start w-full">
                                <div className="flex w-full">
                                    <div className="w-full">
                                        <p>Pengadaan sarana keterampilan Olahan Pangan</p>
                                    </div>
                                    <div className="w-full">
                                        <p>UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon</p>
                                    </div>
                                    <div className="w-full">
                                        <Link to={"/sektor/detail/proyek"}>
                                            <Buttons text={"Lihat detail"} color={"text-color-white"} bgColor={"red"} icon={detailIcons}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-full">
                                        <p>Pengadaan sarana keterampilan Olahan Pangan</p>
                                    </div>
                                    <div className="w-full">
                                        <p>UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon</p>
                                    </div>
                                    <div className="w-full">
                                        <Link to={"/sektor/detail/proyek"}>
                                            <Buttons text={"Lihat detail"} color={"text-color-white"} bgColor={"red"} icon={detailIcons}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-full">
                                        <p>Pengadaan sarana keterampilan Olahan Pangan</p>
                                    </div>
                                    <div className="w-full">
                                        <p>UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon</p>
                                    </div>
                                    <div className="w-full">
                                        <Link to={"/sektor/detail/proyek"}>
                                            <Buttons text={"Lihat detail"} color={"text-color-white"} bgColor={"red"} icon={detailIcons}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </>
    )
}

export default DetailSektor