import logo from "/images/logoPemerintah.png";
import userIcon from "/images/user.png";
import notif from "/Icons/notification.svg";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseApiUrl, useAuth, useAxios } from "../hooks";
import DropDown from "./dropdown";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar = () => {
  const axios = useAxios();
  const auth = useAuth();
  const navigate = useNavigate();

  const [ep, setEp] = useState();

  const epLogout = auth?.user?.role == true ? "admin" : "mitra";

  function handleLogout(e) {
    e.preventDefault();

    axios
      .post(`${epLogout}/auth/logout`)
      .then((res) => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {})
      .finally(() => {});
  }

  useState(() => {
    // console.log(auth.user.image);
    if (auth?.user?.role == true) {
      setEp("/admin");
    } else {
      setEp("/");
    }
  }, []);

  return (
    <div className="w-[100%] bg-white border-b border-[#eaecf0] flex-col justify-start items-start inline-flex">
      <div className="w-[100%] py-5 flex-col justify-center items-center flex">
        <div className="w-[90%] justify-between items-start inline-flex">
          <div className="justify-start items-center gap-10 flex pl-16">
            <img className="w-[124.25px] h-10" src={logo} />
          </div>
          {auth?.user?.role == true && (
            <div className="justify-center items-center flex">
              <div className="h-9 px-4 pt-2 justify-center items-start flex">
                <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                          : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="h-9 px-4 pt-2 justify-center items-start flex">
                <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/kegiatan"}
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
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/proyek"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                          : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                      }
                    >
                      Proyek
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="h-9 px-4 pt-2 justify-center items-start flex">
                <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/sektor"}
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
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/laporan"}
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
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/mitra"}
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
              <div className="h-9 px-4 pt-2 justify-center items-start flex">
                <div className="h-7 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-[#0f1728] text-md 2xl:text-lg font-medium font-inter">
                    <NavLink
                      to={ep + "/user"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500 border-b-2 text-color-red border-color-red p-1"
                          : "hover:text-color-red hover:border-b-2 hover:border-color-red p-1"
                      }
                    >
                      User
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="justify-start items-center gap-2 flex mr-4">
            <div className="flex-col justify-start items-end inline-flex w-full">
              <div className="text-right text-[#0f1728] w-32 text-base font-medium font-inter leading-normal">
                {(auth?.user?.name && auth?.user?.name) ||
                  (auth?.user?.nama_mitra && auth?.user?.nama_mitra)}
              </div>
              <div className="self-stretch text-right text-[#667084] text-base font-normal font-inter leading-tight">
                {auth?.user?.role ? "Admin" : "Mitra"}
              </div>
            </div>
            <Menu
              as="div"
              className="relative inline-block h-full w-full rounded-full text-left  border-color-textGray"
            >
              <MenuButton className="flex align-middle justify-between overflow-hidden h-12 w-12 rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-color-textGray bg-color-textGray bg-opacity-25 ">
                <img
                  src={
                    auth?.user.image
                      ? `${baseApiUrl}storage/${auth?.user?.image}`
                      : userIcon
                  }
                  className="object-cover h-full"
                  alt="-"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-color-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-color-textGray"
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        onClick={handleLogout}
                        className="block w-full text-color-red px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
            {/* <DropDown title="" icon={userIcon} /> */}
            {/* <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
            </div> */}
            <div className="justify-start items-center gap-2 relative flex">
              <div className="w-6  h-7 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={notif} alt="" />
                </div>
              </div>
              <div className="top-0 right-10px ml-2 w-4 h-4 absolute bg-[#98100a] rounded-[99px] flex-col justify-center items-center inline-flex">
                <div className="text-center text-color-white ml-0.4 text-sm font-inter capitalize leading-[25.20px]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
