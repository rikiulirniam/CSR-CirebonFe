import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import chevron from "/Icons/chevron-right-dark.svg";
import search from "/Icons/search-lg.svg";
import add from "/Icons/add.svg";
import trash from "/Icons/Trash.svg";
import Buttons from "../../../components/buttons";
import DropDown from "../../../components/dropdown";
import chevronDown from "/Icons/chevron-down.svg";
import img1 from "/images/img1.png";
import Bc from "../../../components/Breadcrumbs";
import detailIcons from "/Icons/detail.svg";
import editIcons from "/Icons/edit.svg";
import homeIcon from "/Icons/home-line.svg";
import userIcon from "/images/user.png";

import { Button } from "@material-tailwind/react";
import { baseApiUrl, useAuth, useAxios } from "../../../hooks";

const User = () => {
  const axios = useAxios();
  const auth = useAuth();

  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("/admin/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const separatorIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-right">
        <path
          id="Icon"
          d="M6 12L10 8L6 4"
          stroke="#667085"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const getButtonClasses = (index) =>
    activeButton === index
      ? "bg-color-darkBlue text-color-white"
      : "bg-color-white text-color-gray";

  return (
    <>
      <AuthGuard>
        <Navbar />
        <div className="w-full h-auto bg-color-grey px-32 py-12">
          <Bc />
          <div className="w-full justify-between items-center flex mt-3">
            <h1 className="font-semibold text-3xl">User</h1>
            <Link to={"/admin/user/create"}>
              <Buttons
                text={"Buat User Baru"}
                color={"text-color-white"}
                bgColor={"red"}
                icon={add}
              />
            </Link>
          </div>
          <div className="w-full">
            <form className="flex">
              <div className="relative flex justify-between w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:crusor pointer">
                  <img src={search} alt="" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50"
                  placeholder="Cari"
                  required
                />
              </div>
            </form>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 bg-color-white">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-color-white border-b dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Foto Profil
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, key) => {
                    return (
                      <tr
                        key={key}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4 w-[18vw]">
                          <img
                            src={
                              user.image
                                ? baseApiUrl + "storage/" + `${user.image}`
                                : userIcon
                            }
                            width={"50%"}
                            height={"50%"}
                            alt="pfp"
                          />
                        </td>
                        <td className="px-6 py-4 w-[18vw]">{user.name}</td>
                        <td className="px-6 py-4 min-w-min">{user.email}</td>
                        <td className="px-6 py-4">
                          {user.role == true ? "Admin" : "Mitra"}
                        </td>
                        <td className="px-6 py-14 flex gap-2 items-center justify-start">
                          <Link
                            to={`/admin/user/${
                              user.role == true ? "Admin" : "Mitra"
                            }_${user.id}`}
                          >
                            <img src={editIcons} alt="" />
                          </Link>
                          {user.role == false && <Link to={"/admin/user"}>
                            <img src={trash} alt="" />
                          </Link>}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr className="">
                  <td colSpan="2" className="py-3 px-4 max-w-max">
                    <div className="text-base flex w-full items-center gap-3">
                      <p className="text-sm w-full px-2">Tampilkan Data</p>
                      <form action="">
                        <div className="dropdown">
                          <select
                            id="Date"
                            className="bg-gray-50 border text-sm rounded-lg text-center p-2"
                          >
                            <option>5</option>
                            <option>10</option>
                            <option>France</option>
                            <option>Germany</option>
                          </select>
                        </div>
                      </form>
                      <p className="text-sm w-full px-1">
                        1-5 data dari 10 data.
                      </p>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Footer text={"Kembali ke halaman utama"} />
      </AuthGuard>
    </>
  );
};

export default User;
