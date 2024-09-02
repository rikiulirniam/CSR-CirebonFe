import { Link } from "react-router-dom";
import img2 from "/images/img2.png";

import React from "react"

const Cards = ({ items, text, title, where }) => {
    return (
        <div className="kegiatan">
            <div className='cards w-full h-auto flex flex-col items-center justify-center mb-32'>
                <div className="flex flex-wrap justify-start px-20">
                    {items.map((item, index) => (
                        <Link to={where}>
                            <div key={index} className="cards flex gap-4 items-center justify-center p-2 mb-5">
                                <div className="relative w-64 mx-auto bg-white border border-color-textGray overflow-hidden">
                                    <img className="w-full h-48 object-cover" src={img2} alt="Kartu Image" />
                                    <div className="absolute top-4 left-4 date text-color-white capitalize w-32 text-center">
                                        <p className="p-2 bg-color-red">{item.date}</p>
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                                        <p className="text-sm w-[13rem] h-[4rem] text-color-textGray overflow-hidden overflow-ellipsis whitespace-normal">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <p className="capitalize font-bold text-md mt-12 border rounded-lg p-3">{text}</p>
            </div>
        </div>
    );
}

export default Cards;