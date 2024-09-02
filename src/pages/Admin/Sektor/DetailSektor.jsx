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

const DetailSektor = () => {
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
                  <h1 className="text-2xl font-semibold">Sosial</h1>
                  <h1 className="text-base">
                    Eu venenatis sit elit venenatis. Pretium neque nunc urna
                    auctor lacus. Eu nulla urna in maecenas urna mi auctor et
                    velit. Diam montes tristique donec vitae maecenas at
                    vulputate. Scelerisque ultricies ullamcorper elementum
                    bibendum at enim ac. Vel sed nibh mi donec non metus ipsum.
                    Vel semper et nulla interdum pellentesque at aliquam ipsum
                    condimentum. Porta dolor sed ultrices donec mattis.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-h-screen bg-color-grey py-10 px-24">
            <h1 className="text-2xl font-bold mb-3">Program</h1>
            <div className="w-full bg-color-white p-5 flex flex-col items-center justify-center text-color-gray900">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-color-white border-b border-b-color-gray100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nama Program
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deskripsi Program
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-color-white border-b border-b-color-gray100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 w-[18vw]">Rehabilitasi sosial</td>
                    <td className="px-6 py-4 min-w-min">
                      Vestibulum mauris tincidunt ultrices donec. Egestas purus
                      duis malesuada malesuada dictum orci sapien.
                    </td>
                  </tr>
                  <tr className="bg-color-white border-b border-b-color-gray100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 w-[18vw]">Rehabilitasi sosial</td>
                    <td className="px-6 py-4 min-w-min">
                      Vestibulum mauris tincidunt ultrices donec. Egestas purus
                      duis malesuada malesuada dictum orci sapien.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    </>
  );
};

export default DetailSektor;
