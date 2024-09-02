import React from "react";
import bgHero from "/images/bgHero.png";

const Hero = () => {
    return(
        <React.Fragment>
            <div className="w-full h-auto relative">
                <div className="w-5 h-[40vh] overflow-hidden"> 
                    <img src={bgHero} alt="" className="absolute object-cover w-[100vw] h-[40vh] filter brightness-[55%]" style={{ objectPosition: "0 30%" }} />
                    <div className="absolute z-5 w-full h-[40vh] flex flex-col items-center justify-center">
                        <p className=" text-color-white text-3xl xl:text-4xl font-bold">Selamat Datang di Dashboard CSR Kabupaten Cirebon</p>
                        <p className=" text-color-white text-base xl:text-2xl pt-3 font-semibold">Lapor dan ketahui program CSR Anda</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero