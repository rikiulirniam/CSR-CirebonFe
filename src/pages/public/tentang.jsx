import React from "react";

import HeroPublic from "../../components/HeroPublic";
import NavbarPublic from "../../components/navbarPublic";
import Describe from "../../components/describe";
import Cards from "../../components/cards";
import Bupati from "../../components/Information";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

import img1 from "/images/1d78fe4141d84b0676314b831ca160b0.png";
import img2 from "/images/b5e09282f046a467067f804e3c5f6bd0.png";
import img3 from "/images/71b5bb0876c3e4a3cc7fd561d493cd7a.png";
import img4 from "/images/b1e47b48e82fbfa74b4691fa9fabdb37.png";

const Tentang = () => {
  const kegiatanItems = [
    { date: "27 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "28 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." },
    { date: "29 Mar, 2023", title: "Judul Kegiatan Terbaru", description: "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu..." }
];


  console.log("page Tentang randered");
  return (
    <React.Fragment>
      <NavbarPublic />
      <HeroPublic title="Tentang" text="Tentang CSR Kabupaten Cirebon" />
      <div className="h-[450px] px-[100px] pt-16 pb-24 flex-col justify-start items-center gap-10 inline-flex">
        <div className="self-stretch h-[290px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[290px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-[198px] pb-5 flex-col justify-center items-start flex">
              <div className="flex-col justify-start items-start flex">
                <div className="self-stretch py-[15px] justify-center items-start inline-flex">
                  <div className="w-11 h-1 border-t-4 border-[#ff5d56]" />
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-24 justify-start items-start flex">
                  <div className="w-[307px] text-[#121c22] text-[40px] font-bold font-['Inter'] capitalize">
                    Apa itu kegiatan CSR?
                  </div>
                </div>
                <div className="h-36 justify-start items-start flex">
                  <div className="grow shrink basis-0 text-[#7a7a7a] text-base 2xl:text-xl font-normal font-['Inter'] leading-normal">
                    Corporate Social Responsibility (CSR) merupakan konsep di
                    mana perusahaan secara sadar mengintegrasikan kepedulian
                    sosial dan lingkungan ke dalam operasional bisnisnya. Ini
                    melibatkan tindakan sukarela yang memberikan manfaat bagi
                    masyarakat, seperti program pendidikan, kesehatan, dan
                    lingkungan, serta upaya untuk mengurangi dampak negatif
                    terhadap lingkungan. CSR tidak hanya mencerminkan tanggung
                    jawab perusahaan terhadap masyarakat, tetapi juga dapat
                    meningkatkan reputasi dan daya saing bisnis.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 justify-start items-start gap-6 inline-flex 2xl:mb-4">
              <div className="grow shrink basis-0 h-[72px] justify-start items-start flex">
                <div className="grow shrink basis-0 text-[#7a7a7a] text-base 2xl:text-xl font-normal font-['Inter'] leading-normal">
                  Berdasarkan Undang-Undang nomor 40  Tahun 2007 tentang
                  Perseroan Terbatas (UUPT) pasal 1 ayat 3, pengertian Tanggung
                  Jawab Sosial dan Lingkungan Perusahaan (TJSLP) atau Corporate
                  Social Responsibility (CSR) adalah komitmen perseroan untuk
                  berperan serta dalam pembangunan ekonomi berkelanjutan guna
                  meningkatkan kualitas kehidupan dan lingkungan yang
                  bermanfaat, baik bagi perseroan sendiri, komunitas setempat,
                  maupun masyarakat pada umumnya.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Describe
        img1={img1}
        img2={img2}
        img3={img3}
        title={"Tujuan"}
        text={
          "Maksud pemerintah kabupaten dalam Corporate Social Responsibility (CSR) adalah untuk menciptakan sinergi yang kuat antara pemerintah, perusahaan, dan masyarakat. Tujuan utama dari upaya ini adalah untuk mendorong pembangunan berkelanjutan di wilayah kabupaten. Dengan melibatkan perusahaan dalam program CSR, diharapkan dapat tercipta solusi komprehensif bagi berbagai permasalahan sosial dan lingkungan, sehingga kesejahteraan masyarakat dapat meningkat secara signifikan."
        }
      />
      <section>
        <div className="h-[692px] px-[100px] pt-[10px] pb-[50px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch justify-start items-center gap-24 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch h-[102px] pb-5 flex-col justify-center items-start flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch py-[15px] justify-center items-start inline-flex">
                    <div className="w-11 h-1 border-t-4 border-[#ff5d56]" />
                  </div>
                </div>
                <div className="self-stretch h-12 flex-col justify-start items-start flex">
                  <div className="self-stretch h-12 flex-col justify-start items-start flex">
                    <div className="w-[383px] text-[#121c22] text-[40px] font-bold font-['Inter'] capitalize 2xl:">
                      Manfaat
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[168px] px-3 flex-col justify-start items-start gap-3.5 flex">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-[#7a7a7a] md:text-base 2xl:text-xl font-normal font-['Inter'] leading-normal">
                    Pemerintah kabupaten memperoleh banyak manfaat dari
                    pelaksanaan CSR. Salah satu manfaat utama adalah percepatan
                    pembangunan di berbagai sektor. Dengan adanya dukungan dana
                    dan sumber daya dari perusahaan, pemerintah dapat lebih
                    cepat mewujudkan program-program pembangunan yang telah
                    direncanakan, seperti pembangunan infrastruktur, peningkatan
                    kualitas pendidikan dan kesehatan, serta pengembangan
                    ekonomi masyarakat.
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-end items-center flex">
              <div className="w-[90%] self-stretch pl-[123px] pt-[82.89px] bg-[#f2f3f6] justify-end items-center inline-flex">
                <img className="w-full h-[50vh]" src={img4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cards items={kegiatanItems} text={"Muat lebih banyak"}/>
      <Bupati />
      <section>
        <div className="w-full h-screen bg-color-darkBlue p-12 text-color-white flex flex-col items-center justify-start">
          <div className="header flex flex-col items-center justify-center text-color-white">
            <div className="h-auto py-[5px] justify-center items-center inline-flex">
              <div className="w-[5vw] self-stretch border-t-4 border-color-orange" />
            </div>
            <h1 className="text-4xl  font-bold capitalize m-2">Panduan</h1>
            <p className="text-base">Bagaimana proses CSR berlangsung</p>
          </div>
          <div className="h-[30vh] mt-12 justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-center gap-4 inline-flex ">
              <div className="w-10 h-10 p-1.5 bg-[#98100a] rounded-xl justify-center items-center inline-flex">
                <div className="w-7 h-7 text-center text-white text-2xl font-semibold font-['Inter']">
                  1
                </div>
              </div>
              <div className="self-stretch h-[20vh] pt-2 flex-col justify-start items-center gap-0.5 flex">
                <div className="self-stretch text-center text-white text-lg font-semibold font-['Inter'] leading-normal">
                  Penyerahan Proposal CSR
                </div>
                <div className="self-stretch text-center text-white text-sm 2xl:text-xl font-normal font-['Inter'] leading-normal">
                  Pihak penerima menyerahkan proposal terkait CSR kepada
                  Perusahaan yang akan di tuju. Jika perusahaan meminta
                  rekomendasi Bupati Cirebon maka pihak penerima perlu membuat
                  surat permohonan penerbitan surat rekomendasi CSR kepada
                  Bupati dengan melampirkan dokumen proposal kegiatan.
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 inline-flex ">
              <div className="w-10 h-10 p-1.5 bg-[#98100a] rounded-xl justify-center items-center inline-flex">
                <div className="w-7 h-7 text-center text-white text-2xl font-semibold font-['Inter']">
                  2
                </div>
              </div>
              <div className="self-stretch h-[20vh] pt-2 flex-col justify-start items-center gap-0.5 flex">
                <div className="self-stretch text-center text-white text-lg font-semibold font-['Inter'] leading-normal">
                  Permohonan Penerbitan Surat CSR
                </div>
                <div className="self-stretch text-center text-white text-sm 2xl:text-xl font-normal font-['Inter'] leading-normal">
                  Permohonan penerbitan surat rekomendasi CSR yang sudah masuk
                  akan di disposisikan kepada Bagian Perekonomian dan SDA untuk
                  di tindak lanjuti.Setelah Surat rekomendasi CSR di
                  tandatangani Bupati maka pihak penerima perlu mengambil surat
                  tersebut dan menyerahkan nya kepada perusahaan.
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 inline-flex ">
              <div className="w-10 h-10 p-1.5 bg-[#98100a] rounded-xl justify-center items-center inline-flex">
                <div className="w-7 h-7 text-center text-white text-2xl font-semibold font-['Inter']">
                  3
                </div>
              </div>
              <div className="self-stretch h-[20vh] pt-2 flex-col justify-start items-center gap-0.5 flex">
                <div className="self-stretch text-center text-white text-lg 2xl:text-2xl   font-semibold font-['Inter'] leading-normal">
                  Laporan CSR
                </div>
                <div className="self-stretch text-center text-white text-sm 2xl:text-xl font-normal font-['Inter'] leading-normal">
                  Setelah perusahaan menerima surat rekomendasi CSR maka
                  selanjutnya pihak perusahaan berhubungan langsung dengan pihak
                  penerima tanpa ada intervensi dari pemda, di akhir tahun
                  berjalan perusahaan yang mengeluarkan CSR perlu melaporkan
                  penyaluran CSR tersebut kepada Pemda sebagai laporan kepada
                  Bupati.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base font-bold mt-12">
              Permohonan Penerbitan Surat CSR
            </p>
            <div className="h-[10vh] px-[1.8vw] mt-5 py-2.5 bg-[#98100a] rounded-lg shadow justify-center items-center gap-2 inline-flex">
              <div className="text-white text-md font-semibold font-['Inter'] leading-normal">
                Ajukan surat rekomendasi CSR
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer text="Masuk Sebagai Mitra" where="/mitra/login" />
    </React.Fragment>
  );
};

export default Tentang;
