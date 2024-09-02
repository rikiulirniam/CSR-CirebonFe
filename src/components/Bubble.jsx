import React from "react";
import icon1 from "/Icons/element-1.svg";


const Bubble = ({title, text, color, icon}) => {
    return(
        <React.Fragment>
            <div className={`${color} w-[80vw] md:w-[25vw] rounded-xl flex-col justify-center items-start inline-flex`}>
                <div className={`self-stretch xl:h-[20vh] 2xl:h-[15vh] p-4 ${color} rounded-xl shadow flex-col justify-center items-start gap-2 flex`}>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className={`w-8 h-8 p-2 bg-color-white rounded-[28px] border-4 border-[#fff3ed] justify-center items-center flex`}>
                            <div className="w-4 h-4 justify-center items-center inline-flex">
                                <div className="w-4 h-4 relative">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-color-white text-sm font-medium font-['Inter'] capitalize leading-tight">{title}</div>
                    </div>
                    <div className="self-stretch h-12 p-4 bg-color-white bg-opacity-40 rounded-lg border-1 border-color-white backdrop-blur-xl flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch h-2 flex-col justify-start items-start gap-1 flex justify-center">
                            <div className="self-stretch z-1 text-md text-color-white font-bold font-['Inter']">{text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bubble