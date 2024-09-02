import React from "react"
import NavbarPublic from "../../components/navbarPublic.jsx"
import HeroPublic from "../../components/HeroPublic.jsx";
import DropDown from "../../components/dropdown.jsx";
import download from "/Icons/download-01.svg";
import Calendar from "/Icons/calendar.svg";
import PieChart from "../../components/PieChart.jsx";
import BarChart from "../../components/BarChart.jsx";
import Contact from "../../components/contact.jsx";
import Footer from "../../components/footer.jsx";

const Statistik = () => {
    return(
        <React.Fragment>
            <NavbarPublic />
            <HeroPublic title = "Statistik" text = "Program CSR yang sudah berjalan di kabupaten cirebon"/>
            <section className="mt-5">
                <div className="header flex flex-col items-center justify-center"> 
                    <div className="h-auto py-[5px] justify-center items-center inline-flex">
                        <div className="w-[5vw] self-stretch border-t-4 border-color-orange" />
                    </div>
                    <h1 className='text-4xl font-bold capitalize m-2'>Data Statistik</h1>
                </div>
            </section>
            <div className="flex md:flex-row flex-col gap-3 items-center justify-center w-full">
                <DropDown title={"Tahun"} icon={Calendar}/>
                <DropDown title={"Kuartal 2 (April, Mei, Juni)"} icon={Calendar}/>
                <button type="button" class="text-color-textGray bg-color-white border border-color-textGray focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 mt-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                    <img src={download} alt="" />
                    Unduh .CSV
                </button>
                <button type="button" class="text-color-textGray bg-color-white border border-color-textGray focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 mt-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                    <img src={download} alt="" />
                    Unduh PDF
                </button>
            </div>
            <section>
                <div className='data-statistik w-full h-auto flex flex-col items-center justify-center mb-32'>
                    <div className='flex w-full gap-2 justify-around px-12 mt-6'>
                        <div className='total flex flex-col border-l border-color-orange p-3'>
                            <p className='text-3xl text-color-darkRed font-bold'>124</p>
                            <p className='capitalize'>Total Proyek CSR</p>
                        </div>
                        <div className='total flex flex-col border-l border-color-orange p-3'>
                            <p className='text-3xl text-color-darkRed font-bold'>119</p>
                            <p className='capitalize'>Proyek Terealiasai</p>
                        </div>
                        <div className='total flex flex-col border-l border-color-orange p-3'>
                            <p className='text-3xl text-color-darkRed font-bold'>89</p>
                            <p className='capitalize'>Mitra Bergabung</p>
                        </div>
                        <div className='total flex flex-col border-l border-color-orange p-3'>
                            <p className='text-3xl text-color-darkRed font-bold'>Rp200T</p>
                            <p className='capitalize'>Dana realisasi CSR</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full">
                    <div className="px-24">
                        <div className="h-[31px] py-[15px] justify-start items-start inline-flex">
                            <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
                        </div>
                        <p className='text-4xl 2xl:text-5xl font-bold capitalize w-64 2xl:w-full'>
                            Realisasi proyek CSR
                        </p>
                    </div>
                    <div className="max-h-max max-w-max bg-color-white rounded p-5 mt-6 flex justify-around flex-wrap">
                        <PieChart />
                        <BarChart text={"Total realisasi sektor CSR"}/>
                        <BarChart text={"Persentase total realisasi berdasarkan PT"}/>
                        <BarChart text={"Persentase total realisasi berdasarkan Kecamatan"}/>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer text={"Masuk sebagai mitra"} where="/mitra/login"/>
        </React.Fragment>
    )
}

export default Statistik