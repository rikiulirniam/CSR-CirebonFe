import React from "react";
import background from "/images/backgroundUmum.png";
import Bc from "./Breadcrumbs";

const HeroPublic = ({ title, text, date }) => {
  console.log(title, text);

  return (

    <React.Fragment>
      <div className="w-full h-[auto] relative">
        <div className="h-[50vh] w-[40vw] bg-color-darkRed"></div>
        <div className="w-5 h-5 overflow-hidden">
          <img
            src={background}
            alt=""
            className="absolute object-cover m-[30px] top-0 w-[95vw] h-3/4 filter brightness-[25%]"
          />
          <div className="absolute top-[10vh] left-[10vw] flex flex-col items-start justify-center">
            <Bc PublicMode={true} />
            <p className=" text-color-white text-[3.3em]  capitalize font-bold">
              {title}
            </p>
            <p className=" text-color-white text-lg capitalize pt-1">
              {text}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HeroPublic;
