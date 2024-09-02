import React from "react";
import marker from "/Icons/marker-pin-02.svg";
import phone from "/Icons/phone.svg";
import email from "/Icons/mail-01.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact bg-color-white container h-screen w-full py-6 px-32 flex">
        <div className="text flex flex-col items-start">
          <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
            <div className="w-[45px] self-stretch border-t-4 border-color-orange" />
          </div>
          <p className="text-3xl capitalize font-bold mb-3">Hubungi Kami</p>
          <p className="capitalize">
            Hubungi kami melalui formulir di samping, atau melalui kontak di
            bawah
          </p>
          <div className="h-[10vh] w-[90%] justify-start items-start gap-4 inline-flex mt-12">
            <div className="w-[10%] p-1 bg-[#ffdddc] rounded-[38px] border-8 border-[#fff1f0] justify-center items-center flex">
              <img
                src={marker}
                className="w-[40px] h-[40px] relative flex-col justify-start items-start flex"
                alt=""
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-10 pt-2.5 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#121c22] text-xl font-bold font-['Inter'] leading-[30px]">
                  Alamat
                </div>
              </div>
              <div className="self-stretch justify-center items-center inline-flex">
                <div className="grow shrink basis-0 text-color-red text-base font-semibold font-['Inter'] leading-normal">
                  Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten
                  Cirebon, Jawa Barat 45611
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10vh] w-[90%] justify-start items-start gap-4 inline-flex mt-[10vh]">
            <div className="w-[10%] p-1 bg-[#ffdddc] rounded-[38px] border-8 border-[#fff1f0] justify-center items-center flex">
              <img
                src={phone}
                className="w-[40px] h-[40px] relative flex-col justify-start items-start flex"
                alt=""
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-10 pt-2.5 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#121c22] text-xl font-bold font-['Inter'] leading-[30px]">
                  Phone
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-base text-color-red font-semibold font-['Inter'] leading-normal">
                  (0231) 321197{" "}
                  <span className="text-color-textGray">atau</span> (0231)
                  3211792
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10vh] w-[90%] justify-start items-start gap-4 inline-flex mt-[10vh]">
            <div className="w-[10%] p-1 bg-[#ffdddc] rounded-[38px] border-8 border-[#fff1f0] justify-center items-center flex">
              <img
                src={email}
                className="w-[40px] h-[40px] relative flex-col justify-start items-start flex"
                alt=""
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-10 pt-2.5 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#121c22] text-xl font-bold font-['Inter'] leading-[30px]">
                  Email
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-base text-color-red font-semibold font-['Inter'] leading-normal">
                  pemkab@cirebonkab.go.id
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="flex items-center justify-center mt-[15%] 2xl:w-[40vw] h-[50vh] ml-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.1795464519417!2d108.47645001265981!3d-6.762948575124159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e52ec39ac4b%3A0x11406d4a1fb551d1!2sJl.%20Sunan%20Kalijaga%20No.7%2C%20Sumber%2C%20Kec.%20Sumber%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat%2045611!5e0!3m2!1sid!2sid!4v1724329521925!5m2!1sid!2sid"
          width="600"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Contact;
