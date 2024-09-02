import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import bgHero from "/images/bgHero.png";
import homeIcon from "/Icons/home-line-light.svg";
import pencil from "/Icons/pencil-02.svg";

const separatorIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chevron-right">
      <path
        id="Icon"
        d="M9 18L15 12L9 6"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Detail = () => {
  console.log("rendered");
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <AuthGuard>
        <Navbar />
        <section>
          <div className="w-full h-auto relative">
            <div className="max-w-full h-[70vh] overflow-hidden">
              <img
                src={bgHero}
                alt=""
                className="absolute object-cover w-[100vw] max-h-full filter brightness-[55%]"
                style={{ objectPosition: "0 30%" }}
              />
              <div className="absolute z-5 w-full h-auto p-14 flex flex-col">
                <div className="flex items-center justify-between">
                  <Breadcrumbs separator={separatorIcon}>
                    <Link to="/" className="opacity-60">
                      <img src={homeIcon} alt="" />
                    </Link>
                    {pathnames.map((name, index) => {
                      const routeTo = `/${pathnames
                        .slice(0, index + 1)
                        .join("/")}`;
                      const isLast = index === pathnames.length - 1;
                      return isLast ? (
                        <span
                          key={name}
                          className="text-color-red900 font-semibold text-base bg-color-red100 p-2 rounded-lg"
                        >
                          {name}
                        </span>
                      ) : (
                        <Link
                          key={name}
                          to={routeTo}
                          className="text-color-white font-semibold text-base"
                        >
                          {name}
                        </Link>
                      );
                    })}
                  </Breadcrumbs>
                  <button
                    type="submit"
                    className="w-auto flex items-center gap-2 px-4 py-2 text-white bg-color-red900 text-color-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    <img src={pencil} alt="" />
                    Terbitkan Kegiatan
                  </button>
                </div>
                <div className="text-color-white mt-40 max-w-full">
                  <h1 className="text-3xl font-semibold">
                    Pemkab Cirebon Terima Bantuan PJU Tematik dari Bank BJB
                  </h1>
                  <h1 className="text-xl font-semibold">July 12, 2024</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-h-full bg-color-grey py-10 px-24">
            <div className="w-full bg-color-white p-5 flex flex-col items-center justify-center text-color-gray900">
              <h1>
                KABUPATEN CIREBON — Pemerintah Kabupaten Cirebon menerima
                bantuan Corporate Social Responsibility (CSR) dari Bank BJB,
                berupa lampu penerangan jalan umum (PJU) tematik. Penyerahan
                bantuan ini dihadiri langsung oleh Penjabat (Pj) Bupati Cirebon,
                Drs H Wahyu Mijaya SH MSi di Pendopo Bupati Cirebon, Jumat
                (12/7/2024). “Kami berterima kasih kepada Bank BJB yang telah
                memberikan PJU untuk dipasang di beberapa titik di wilayah
                Sumber, Kabupaten Cirebon,” ujar Wahyu. Ia menjelaskan, bahwa
                pemasangan PJU di kawasan Sumber, yang dekat dengan kantor
                pemerintahan, tidak hanya akan memperindah lingkungan, tetapi
                juga dapat meningkatkan keselamatan masyarakat. Langkah ini,
                menurut Wahyu, merupakan bagian dari upaya untuk menciptakan
                ruang publik yang lebih aman dan nyaman. Dengan penerangan yang
                baik, warga dapat beraktivitas dengan tenang, terutama di malam
                hari.
              </h1>
              <img src={bgHero} alt="" className="py-5" />
              <h1>
                “Inisiatif ini menjadi langkah strategis bagi Kabupaten Cirebon,
                dalam meningkatkan kualitas infrastruktur dan pelayanan publik,”
                tambahnya. Pemasangan PJU tematik ini ditargetkan mulai
                dilaksanakan pada Agustus 2024. Wahyu berharap, fasilitas
                tersebut memberikan dampak positif bagi masyarakat. “Kami sudah
                berkomitmen dalam menciptakan lingkungan yang lebih aman dan
                nyaman bagi masyarakat,” katanya. Kepala Dinas Perhubungan
                Kabupaten Cirebon, Hilman Firmansyah ST menjelaskan, bahwa PJU
                artistik ini akan dipasang di 33 titik setelah dilakukan survei
                dan pengecekan. Ia mengungkapkan, bahwa saat ini, Kabupaten
                Cirebon masih kekurangan PJU. Dari total kebutuhan sekitar 32
                ribu titik, baru 16 ribu titik yang terpasang. Hilman menekankan
                pentingnya upaya terus-menerus untuk memenuhi kebutuhan ini,
                termasuk mengajak instansi lain, baik dari pemerintah maupun
                pihak swasta, untuk menyediakan CSR. “Kalau lihat eksisting
                jalan itu kurang lebih 32 ribu titik, kekurangannya masih
                banyak. Idealnya melakukan kolaborasi seperti itu,” ujar Hilman.
                (DISKOMINFO)
              </h1>
              <div className="tags flex items-center justify-center text-base gap-3 mt-3">
                <p>Tags:</p>
                <p className="p-2 bg-color-grey rounded-full">Bank BJB</p>
                <p className="p-2 bg-color-grey rounded-full">Cirebon</p>
              </div>
            </div>
          </div>
        </section>
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    </>
  );
};

export default Detail;
