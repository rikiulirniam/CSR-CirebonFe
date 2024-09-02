// import '../dist/Style.css'
import logo from "/images/logoPemerintah.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks";
import { useState } from "react";

const NavbarPublic = () => {
  const auth = useAuth();
  const [navDash, setNavDash] = useState();



  return (
    <div className="w-[100%] h-[76px] bg-white border-b border-[#eaecf0] justify-start items-center inline-flex">
      <div className="w-[100%] h-[76px] flex-col justify-center items-center flex">
        <div className="w-[90vw] justify-between items-start inline-flex">
          <div className="justify-start items-center gap-10 flex pl-16">
            <img className="w-[124.25px] h-10" src={logo} />
          </div>
          <div className="justify-center items-center flex">
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to={`/`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Home
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/tentang"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Tentang
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/kegiatan"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Kegiatan
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/statistik"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Statistik
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/sektor"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Sektor
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/laporan"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Laporan
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-9 px-4 pt-2 justify-center items-start flex">
              <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                <div className="text-[#0f1728] text-lg font-medium font-['Inter']">
                  <NavLink
                    to="/mitra"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                        : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                    }
                  >
                    Mitra
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-center pr-16">
            <button className='bg-color-red text-color-white font-["Inter"] py-2 px-3 rounded'>
              Pengajuan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPublic;
