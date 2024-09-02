import img2 from "/images/img2.png";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, btnText, count, where }) => {
  const [cardsImage, setCardsImage] = useState([]);

  useEffect(() => {
    {
    }
    const loadImage = () => {
      <Link to={"/laporan/rincian"}>
        <div className="relative w-64 mx-auto bg-white border border-color-textGray overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={img2}
            alt="Kartu Image"
          />
          <div className="absolute top-4 left-4 date text-color-white capitalize w-32 text-center">
            <p className="p-1 bg-color-red">27 Mar, 2023</p>
          </div>
          <div className="user pl-4 pt-3 flex items-center gap-2">
            <img
              src={img2}
              className="w-6 h-6 border border-color-red rounded-[99px]"
              alt=""
            />
            <p className="text-sm text-center">Nama User</p>
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Judul Kegiatan Terbaru.</h2>
            <p className="text-sm w-[13rem] h-[4rem] text-color-textGray overflow-hidden overflow-ellipsis whitespace-normal">
              Praesent viverra sapien congue aliquet viverra maecenas sed
              bibendum. Elementum risus accu...
            </p>
          </div>
        </div>
      </Link>;
    };
    setCardsImage(cards);
    loadImage();
  }, []);

  return (
    <div className="kegiatan">
      <div className="cards w-full h-auto flex flex-col items-center justify-center mb-32">
        <div className="header flex flex-col items-center justify-center">
          <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
            <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
          </div>
          <h1 className="text-3xl w-64 text-center font-bold capitalize m-2">
            {title}
          </h1>
        </div>
        <div className="cards grid grid-cols-4 gap-x-6 gap-y-4 px-24 mb-5">
          {cardsImage}
        </div>
        <p className="capitalize font-semibold text-md mt-12 border text-color-grey700   rounded-lg p-3">
          {btnText}
        </p>
      </div>
    </div>
  );
};

export default Cards;
