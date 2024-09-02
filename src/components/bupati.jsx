import React from "react";
import img5 from "/images/img5.png";

const Bupati = () => {
  return (
    <React.Fragment>
      <section>
        <div className="h-screen bg-white pt-12 pl-12 pb-12 gap-[4rem] mb-12 flex">
          <div className="text w-full h-auto pb-5">
            <div className="header mb-3">
              <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
                <div className="w-[45px] self-stretch border-t-4 border-color-orange" />
              </div>
              <p className="text-5xl capitalize font-bold mb-3 w-full">
                Sambutan Bupati Kabupaten Cirebon
              </p>
            </div>
            <div className="desc flex flex-col justify-between mx-2">
              <div className="py-5 w-full 2xl:text-base">
                <p className="pb-4">
                  Elit sit vitae nulla porttitor nulla platea lectus ultrices
                  cursus. Proin mi nisi mi sed amet. Aliquam sit sed turpis ut
                  sociis consequat nibh enim malesuada. Eget vestibulum volutpat
                  cursus enim. Urna maecenas at sed dignissim augue aliquam. In
                  diam condimentum ultricies sit proin egestas. Nunc eget
                  quisque vestibulum vestibulum quisque ipsum gravida malesuada.
                  Tempor quis arcu sociis non ut praesent mi id sit. Platea
                  cursus diam sit vitae enim aliquet aliquam arcu.
                </p>
                <p>
                  Posuere malesuada vehicula nunc adipiscing senectus. Leo
                  sodales placerat enim at porttitor lacinia. Sagittis viverra
                  eu nunc velit. Euismod aliquet ullamcorper felis et ante
                  egestas. Venenatis faucibus ultrices morbi id tempus morbi.
                  Lacus at quis tempus at nunc sed aliquam. Scelerisque id fames
                  pellentesque euismod. Mollis egestas mi tristique ipsum.
                </p>
              </div>
              <p className="text-2xl font-bold mb-1 2xl:text-3xl">
                Drs. H. Imron Rosyadi, Lc., M.Ag., M.M.
              </p>
              <p className="text-base 2xl:text-2xl">Bupati Kabupaten Cirebon</p>
            </div>
          </div>
          <div className="img w-full">
            <div className="h-[66vh] bg-color-grey"></div>
            <img
              src={img5}
              alt=""
              className="w-[90%] relative top-[-59vh] right-[-10%]"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Bupati;
