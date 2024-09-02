import React, { useEffect, useState } from "react";
import NavbarPublic from "../../components/navbarPublic";
import HeroPublic from "../../components/HeroPublic";
import Cards from "../../components/cards";
import img2 from "/images/img2.png";
import search from "/Icons/search-lg.svg";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import marker from "/Icons/marker-pin-02-grey.svg";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useAuth, useAxios } from "../../hooks";

const Sektor = () => {
  const Cards = [];
  const Proyek = [];

  const axios = useAxios();
  const auth = useAuth();

  const [sektor, setSektor] = useState();

  useEffect(() => {
    axios
      .get("/public/sektor?pStart=1&pEnd=6")
      .then((res) => {
        console.log(res.data.sektors);
        setSektor(res.data.sektors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  for (let i = 1; i <= 7; i++) {
    Cards.push(
      <Card className="mt-6 w-64 2xl:w-80 rounded-none" key={i}>
        <CardHeader
          color="blue-gray"
          className="relative max-h-max rounded-none shadow-none"
        >
          <img src={img2} alt="" className="w-full h-96  object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Sosial
          </Typography>
          <Typography
            color="blue-gray"
            className="bg-color-grey text-base max-w-max"
          >
            Tersedia : 10
          </Typography>
          <Link to={"/sektor/detail"}>
            <Button className="mt-1 p-2 w-full shadow-none bg-color-red text-color-white font-semibold">
              Lihat Detail
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  }

  for (let i = 1; i <= 8; i++) {
    Proyek.push(
      <Card className="mt-6 w-1/5 rounded-none" key={i}>
        <CardHeader
          color="blue-gray"
          className="relative max-h-max rounded-none shadow-none"
        >
          <img src={img2} alt="" className="w-full h-48 object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Judul Proyek Terbaru.
          </Typography>
          <Typography
            color="blue-gray"
            className="bg-color-grey text-sm max-w-max flex items-start gap-1 p-1 font-semibold text-color-darkGrey"
          >
            <img src={marker} alt="" />
            Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon,
            Jawa Barat 45611
          </Typography>
          <Typography
            color="blue-gray"
            className="bg-color-grey text-sm w-full mt-2 p-1 font-semibold text-color-darkGrey"
          >
            Sektor
          </Typography>
          <Typography
            color="blue-gray"
            className="bg-color-grey text-sm w-full mt-2 p-1 font-semibold text-color-darkGrey"
          >
            Tgl. Berakhir: Jul 15,2024
          </Typography>
        </CardBody>
      </Card>
    );
  }

  return (
    <React.Fragment>
      <NavbarPublic />
      <HeroPublic
        title="Sektor"
        text="Program CSR yang sudah berjalan di kabupaten cirebon"
      />
      <section className="max-w-full mt-5">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
            <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
          </div>
          <p className="text-4xl 2xl:text-5xl font-bold capitalize max-w-max 2xl:w-full">
            Sektor CSR
          </p>
          <p>Bidang program CSR Kabupaten Cirebon yang tersedia</p>
        </div>
      </section>
      <section>
        <div className="p-12 w-full flex gap-8 flex-wrap mt-5 items-center justify-start">
          {/* {Cards} */}

          {sektor &&
            sektor.map((item, key) => {
              return (
                <Card className="mt-6 w-64 2xl:w-80 rounded-none" key={item.id}>
                  <CardHeader
                    color="blue-gray"
                    className="relative max-h-max rounded-none shadow-none"
                  >
                    <img
                      src={`http://localhost:8000/storage${item.image}`}
                      alt=""
                      className="w-full h-64 object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Sosial
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="bg-color-grey text-base max-w-max"
                    >
                      Tersedia : {item.programs_count}
                    </Typography>
                    <Link to={"/sektor/detail"}>
                      <Button className="mt-1 p-2 w-full shadow-none bg-color-red text-color-white font-semibold">
                        Lihat Detail
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              );
            })}
          <Card className="mt-6 w-64 rounded-none">
            <CardHeader
              color="blue-gray"
              className="relative max-h-max rounded-none shadow-none"
            >
              <img src={img2} alt="" className="w-full h-48 object-cover" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Lainnya
              </Typography>
              <Typography
                color="blue-gray"
                className="bg-color-grey text-base max-w-max"
              >
                Tersedia : 10
              </Typography>
              <Button className="mt-1 p-2 w-full shadow-none bg-color-red text-color-white font-semibold">
                Lihat Detail
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
      <section>
        <div className="w-full flex flex-col px-24 py-12 max-h-max mt-6 gap-5 items-center">
          <div className="header w-full items-center justify-start">
            <div className="h-auto py-[5px] justify-center items-center inline-flex">
              <div className="w-[5vw] self-stretch border-t-4 border-color-orange" />
            </div>
            <h1 className="text-4xl font-bold capitalize mt-2">
              Proyek Tersedia
            </h1>
          </div>
          <div className="w-full">
            <form className="flex">
              <div className="relative flex items-center justify-between w-full gap-3">
                <div className="dropdown">
                  <select
                    id="Date"
                    className="text-sm rounded-lg block w-full p-3 border"
                  >
                    <option>Terbaru</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-lightGray rounded-lg bg-gray-50 pl-12"
                    placeholder="Cari"
                    required
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
            {Proyek}
          </div>
          <Button className="m-3 p-2 max-w-max border shadow-none font-semibold text-sm">
            Muat lebih banyak
          </Button>
        </div>
      </section>
      <Contact />
      <Footer text={"Masuk sebagai mitra"} />
    </React.Fragment>
  );
};

export default Sektor;
