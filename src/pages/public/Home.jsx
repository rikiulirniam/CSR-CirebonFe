import React, { useState, useEffect } from "react";

import Footer from "../../components/footer";
import NavbarPublic from "../../components/navbarPublic";
import Information from "../../components/Information";
import Cards from "../../components/cards";
import CardsUser from "../../components/cardsUser";
import Contact from "../../components/contact";

import background from "/images/backgroundUmum.png";
import chevron from "/Icons/chevron-right.svg";
import img1 from "/images/img1.png";
import img2 from "/images/img2.png";
import img3 from "/images/img3.png";
import img4 from "/images/cdc89d6627b08fb5dbd4e678aaae5c38.jpeg";
import { baseApiUrl, useAxios } from "../../hooks";
import KegiatanCard from "../Admin/Kegiatan/KegiatanCard";
import { Link } from "react-router-dom";

const Home = () => {
  // Variables init
  const axios = useAxios();
  const [kegiatanItems, setKegiatan] = useState([]);
  const [mitraImage, setMitraImage] = useState([]);
  const [mitras, setMitra] = useState();

  const [sektors, setSektors] = useState([]);
  const [programs, setPrograms] = useState({});

  // Format Date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date
      .toLocaleDateString("en-GB", options)
      .replace(/ /g, " ")
      .replace(",", ",");
  };

  // Load resource
  useEffect(() => {
    const loadImage = () => {
      const images = [];
      for (let i = 1; i <= 10; i++) {
        images.push(`/images/mitra/mitra${i}.png`);
      }
      setMitraImage(images);
    };
    loadImage();

    // Sektor
    axios
      .get("/public/sektor")
      .then((res) => {
        setSektors(res.data.sektors);
        setSektor(res.data.sektors[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    // Program
    axios
      .get("/public/sektor/1")  
      .then((res) => {
        console.log(res.data.programs);
        setPrograms(res.data.programs);
      })
      .catch((err) => {
        console.log(err);
      })

    // Kegiatan
    axios
      .get("/public/kegiatan?pStart=1&pEnd=4")
      .then((res) => {
        console.log(res.data.kegiatan);
        setKegiatan(res.data.kegiatan);
      })
      .catch((err) => {
        console.error(err);
      });

    // Mitra
    axios
      .get("/public/mitra")
      .then((res) => {
        setMitra(res.data.mitras);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [selected, setSelected] = useState('q1');

  return (
    <React.Fragment>
      <NavbarPublic />
      <div>
        <div className="mb-12">
          <div className="relative md:w-full h-full">
            <div className="w-[25.23vw] md:w-[35vw] h-[115vh] max-w-full bg-color-darkRed"></div>
            <div className="absolute top-0 m-[40px] md:w-[95%]">
              <img
                src={background}
                alt="bg"
                className="h-screen w-[90%] filter mx-[1em] brightness-50"
              />
              <div className="absolute top-[30%] flex flex-col xl:w-[35vw] w-[500px] 2xl:ml-[10vw] ml-[50px] border-b-2 border-color-white pb-5">
                <div className="title">
                  <h1 className=" text-[55px] 2xl:text-[70px] w-full text-color-white font-bold leading-tight capitalize">
                    Selamat Datang di portal CSR Kab. Cirebon
                  </h1>
                </div>
                <div className="title">
                  <h1 className="text-xl md:text-1xl text-color-white font-semibold">
                    Ketahui dan kenali customer social responsibility terhadap
                    Kabupaten Cirebon dari para Mitra.
                  </h1>
                </div>
              </div>
            </div>
            <div className="absolute top-[50%] right-16 z-1">
              <div className="news w-[45vw]  bg-color-darkBlue/90 backdrop-blur-md p-[48px] flex flex-col">
                <p className="text-2xl 2xl:text-3xl text-color-white font-bold">
                  Pemkab Cirebon Terima Bantuan PJU Tematik dari Bank BJB
                </p>
                <p className="date font-inter md:text-1xl text-sm font-semibold bg-color-red w-[170px] px-2 py-2 mt-2 text-color-white text-center">
                  Jum’at, 12 Jul 2024
                </p>
                <div className="text-color-white mt-2 w-auto h-auto xl:text-1xl  text-base overflow-hidden text-ellipsis whitespace leading-[25.20px]">
                  Penyerahan bantuan ini dihadiri langsung oleh Penjabat (Pj)
                  Bupati Cirebon, Drs H Wahyu Mijaya SH MSi di Pendopo Bupati
                  Cirebon, Jumat (12/7/2024). “Kami berterima kasih kepada Bank
                  BJB yang telah memberikan PJU untuk dipasang di beberapa titik
                  di wilayah Sumber, Kabupaten Cirebon,” ujar Wahyu. Ia
                  menjelaskan, bahwa pemasangan PJU di kawasan Sumber, yang
                  dekat dengan kantor pe...
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="mitra w-full h-auto flex flex-col p-12 bg-color-white px-24 mb-12">
            <div className="h-[31px] py-[15px] justify-start items-start inline-flex">
              <div className="2xl:w-[60px] w-[35px] self-stretch 2xl:border-t-5 border-t-4 border-color-orange" />
            </div>
            <div className="bg-color-white text-3xl 2xl:text-5xl font-bold">
              <p>Mitra CSR </p>
              <p>Kabupaten Cirebon</p>
              <div className="mitra-logos w-full mt-8 p-5">
                <div className="grid grid-cols-5 gap-4 items-center justify-center">
                  {mitraImage.map((image, index) => (
                    <img
                      className="m-2"
                      key={index}
                      src={image}
                      alt={`Mitra ${index + 1}`}
                      width={168}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="data-statistik w-full h-auto flex flex-col items-center justify-center mb-32">
            <div className="header flex flex-col items-center justify-center">
              {" "}
              <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
                <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
              </div>
              <h1 className="text-3xl font-bold capitalize m-2">
                Data statistik
              </h1>
            </div>
            <div className="flex w-full gap-2 justify-around px-12 mt-6">
              <div className="total flex flex-col border-l border-color-orange p-3">
                <p className="text-3xl text-color-darkRed font-bold">124</p>
                <p className="capitalize">Total Proyek CSR</p>
              </div>
              <div className="total flex flex-col border-l border-color-orange p-3">
                <p className="text-3xl text-color-darkRed font-bold">119</p>
                <p className="capitalize">Proyek Terealiasai</p>
              </div>
              <div className="total flex flex-col border-l border-color-orange p-3">
                <p className="text-3xl text-color-darkRed font-bold">
                  {mitras ? Object.values(mitras).length : 0}
                </p>
                <p className="capitalize">Mitra Bergabung</p>
              </div>
              <div className="total flex flex-col border-l border-color-orange p-3">
                <p className="text-3xl text-color-darkRed font-bold">Rp200T</p>
                <p className="capitalize">Dana realisasi CSR</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container flex h-screen w-full jusify-center items-start gap-12">
            <div className="pict flex justify-center align-top gap-3 w-[70%] p-5">
              <div className="flex flex-col align-bottom gap-3 justify-end">
                <img src={img1} alt="" className="w-36 ml-12" />
                <img src={img3} alt="" className="w-48" />
              </div>
              <div className="flex flex-col align-bottom ">
                <img src={img2} alt="" className="w-48" />
              </div>
            </div>
            <div className="inform flex flex-col w-full mr-12">
              <div className="header">
                <div className="h-[31px] py-[15px] justify-start items-start inline-flex">
                  <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
                </div>
                <p className="text-4xl 2xl:text-5xl font-bold capitalize w-64 2xl:w-full">
                  Apa itu Kegiatan CSR?
                </p>
                <div className="w-auto mt-5  text-lg">
                  <p>
                    Corporate Social Responsibility (CSR) merupakan konsep di
                    mana perusahaan secara sadar mengintegrasikan kepedulian
                    sosial dan lingkungan ke dalam operasional bisnisnya. Ini
                    melibatkan tindakan sukarela yang memberikan manfaat bagi
                    masyarakat, seperti program pendidikan, kesehatan, dan
                    lingkungan, serta upaya untuk mengurangi dampak negatif
                    terhadap lingkungan. CSR tidak hanya mencerminkan tanggung
                    jawab perusahaan terhadap masyarakat, tetapi juga dapat
                    meningkatkan reputasi dan daya saing bisnis.
                  </p>
                </div>
                <div className="w-auto mt-5 text-lg">
                  <p>
                    Berdasarkan Undang-Undang nomor 40 Tahun 2007 tentang
                    Perseroan Terbatas (UUPT) pasal 1 ayat 3,
                    pengertian Tanggung Jawab Sosial dan Lingkungan Perusahaan
                    (TJSLP) atau Corporate Social Responsibility (CSR) adalah
                    komitmen perseroan untuk berperan serta dalam pembangunan
                    ekonomi berkelanjutan guna meningkatkan kualitas kehidupan
                    dan lingkungan yang bermanfaat, baik bagi perseroan sendiri,
                    komunitas setempat, maupun masyarakat pada umumnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-[110vh] bg-color-darkBlue">
          <div className="flex ">
            <div className="sektor container h-screen w-full bg-color-darkBlue py-[96px] px-[100px] flex flex-col">
              <div className="header">
                <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
                  <div className="w-[45px] self-stretch border-t-4 border-color-orange" />
                </div>
                <p className="text-5xl capitalize font-bold text-color-white mb-3">
                  Sektor CSR
                </p>
                <p className="capitalize text-color-white">
                  Bidang sektor CSR Kabupaten Cirebon yang tersedia
                </p>
              </div>
              <div className="content flex gap-12 w-full h-auto justify-start">
                <div className="category flex flex-col p-5 text-color-white w-full">
                  {sektors &&
                    sektors.map((item, i) => {
                      return (
                        <div className="hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 border-color-grey hover:border-color-darkRed flex items-center text-xl">
                          <p className="w-full capitalize p-3">{item.name}</p>
                          <span>
                            <img src={chevron} alt=">" />
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="desc flex flex-col items-start justify-center w-full text-color-white">
              <div className="img w-[45%] h-[30%] ">
                <div className="w-[16vw] h-[35vh] 2xl:h-[30vh] bg-color-darkRed"></div>
                <img
                  src={img4}
                  alt=""
                  className="w-full relative top-[-35vh] 2xl:top-[-30vh] left-5"
                />
              </div>
              <div className="desc-text w-auto text-md  mt-[50px] xl:w-[100%] 2xl:w-[95%]">
                <p>
                  CSR dalam lingkup sosial merupakan komitmen perusahaan untuk
                  memberikan kontribusi positif bagi masyarakat di sekitarnya.
                  Ini melibatkan berbagai kegiatan yang bertujuan meningkatkan
                  kualitas hidup masyarakat, seperti program pendidikan,
                  kesehatan, pemberdayaan ekonomi, dan pengentasan kemiskinan.
                  Melalui CSR sosial, perusahaan tidak hanya memenuhi tanggung
                  jawab sosialnya, tetapi juga membangun hubungan yang baik
                  dengan masyarakat, meningkatkan reputasi perusahaan, dan
                  menciptakan dampak sosial yang berkelanjutan. Kegiatan CSR
                  sosial dapat berupa bantuan langsung, seperti donasi, atau
                  program jangka panjang yang melibatkan partisipasi aktif
                  masyarakat, seperti pelatihan keterampilan dan pengembangan
                  komunitas.
                </p>
              </div>
              <div className="buttons flex gap-3 text-color-white mt-12">
                <p className="p-3 bg-color-red rounded-lg">
                  Lihat program tersedia
                </p>
                <p className="p-3 border rounded-lg">Lihat realisasi program</p>
              </div>
            </div>
          </div>
        </section>
        <Information />

        <section>
          <div className="header flex flex-col items-center justify-center">
            <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
              <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
            </div>
            <h1 className="text-3xl font-bold capitalize m-2">
              Kegiatan Terbaru
            </h1>
          </div>
          <div className="kegiatan w-full flex items-center justify-center my-10">
            <div className="cards w-full h-auto flex flex-col items-center justify-center mb-32">
              <div className="flex gap-5 justify-start">
                {kegiatanItems &&
                  kegiatanItems.map((kegiatan, key) => {
                    return (
                      <Link
                        to={`/kegiatan/${kegiatan.id}`}
                        key={key}
                        className="w-full"
                      >
                        <div className="cards flex gap-4 items-center justify-center mb-5">
                          <div className="relative w-72 h-96 bg-white border border-color-textGray overflow-hidden">
                            <img
                              className="w-full h-48 object-cover"
                              src={
                                kegiatan.thumbnail
                                  ? baseApiUrl + "storage/" + kegiatan.thumbnail
                                  : img2
                              }
                              alt="Kartu Image"
                            />
                            <div className="absolute top-4 left-4 date text-color-white capitalize w-32 text-center">
                              <p className="p-2 bg-color-red">
                                {formatDate(kegiatan.created_at)}
                              </p>
                            </div>
                            <div className="p-6">
                              <h2 className="text-lg font-bold mb-2">
                                {kegiatan.judul}
                              </h2>
                              <p className="text-sm w-[13rem] h-[4rem] text-color-textGray overflow-hidden overflow-ellipsis whitespace-normal">
                                {kegiatan.deskripsi}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="header flex flex-col items-center justify-center">
            <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
              <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
            </div>
            <h1 className="text-3xl font-bold capitalize m-2">
              Laporan Program Terbaru
            </h1>
          </div>
          <div className="kegiatan w-full flex items-center justify-center my-10">
            <div className="cards w-full h-auto flex flex-col items-center justify-center mb-32">
              <div className="flex gap-5 justify-start">
                {kegiatanItems &&
                  kegiatanItems.map((kegiatan, key) => {
                    return (
                      <Link
                        to={`/kegiatan/${kegiatan.id}`}
                        key={key}
                        className="w-full"
                      >
                        <div className="cards flex gap-4 items-center justify-center mb-5">
                          <div className="relative w-72 h-96 bg-white border border-color-textGray overflow-hidden">
                            <img
                              className="w-full h-48 object-cover"
                              src={
                                kegiatan.thumbnail
                                  ? baseApiUrl + "storage/" + kegiatan.thumbnail
                                  : img2
                              }
                              alt="Kartu Image"
                            />
                            <div className="absolute top-4 left-4 date text-color-white capitalize w-32 text-center">
                              <p className="p-2 bg-color-red">
                                {formatDate(kegiatan.created_at)}
                              </p>
                            </div>
                            <div className="p-6">
                              <h2 className="text-lg font-bold mb-2">
                                {kegiatan.judul}
                              </h2>
                              <p className="text-sm w-[13rem] h-[4rem] text-color-textGray overflow-hidden overflow-ellipsis whitespace-normal">
                                {kegiatan.deskripsi}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-color-darkBlue">
          <div className="sektor container h-auto w-full bg-color-darkBlue py-[96px] px-[100px] flex flex-col">
            <div className="header">
              <div className="h-[31px] py-[15px] justify-center items-center inline-flex">
                <div className="w-[45px] self-stretch border-t-4 border-color-orange" />
              </div>
              <p className="text-3xl capitalize font-bold text-color-white mb-3">
                Frequently Asked Question (FAQ)
              </p>
              <p className="capitalize text-color-white">
                Pertanyaan yang sering muncul
              </p>
            </div>
            <div className="content flex gap-12 w-full h-auto mt-12">
              <div className="category flex flex-col p-5 text-color-white w-full text-md">
                <div 
                onClick={() => setSelected("q1")}
                className={`hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 ${
                  selected === 'q1' ? 'border-color-orange' : 'border-color-grey'
                } flex items-center cursor-pointer`}
                >
                  <p className="w-full capitalize p-3">Apa itu CSR?</p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                </div>

                <div 
                onClick={() => setSelected("q2")}
                className={`hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 ${
                  selected === 'q2' ? 'border-color-orange' : 'border-color-grey'
                } flex items-center cursor-pointer`}>
                  <p className="w-full capitalize p-3">
                    Mengapa CSR penting di Kabupaten Cirebon?
                  </p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                </div>

                <div
                onClick={() => setSelected("q3")}
                className={`hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 ${
                  selected === 'q3' ? 'border-color-orange' : 'border-color-grey'
                } flex items-center cursor-pointer`}
                >
                  <p className="w-full  capitalize p-3">
                    Bagaimana cara perusahaan di Kabupaten Cirebon menjalankan program CSR?
                  </p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                </div>

                <div 
                onClick={() => setSelected("q4")}
                className={`hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 ${
                  selected === 'q4' ? 'border-color-orange' : 'border-color-grey'
                } flex items-center cursor-pointer`}
                >
                  <p className="w-full  capitalize p-3">
                    Apa saja contoh program CSR di Kabupaten Cirebon?
                  </p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                </div>

                <div
                onClick={() => setSelected("q5")}
                className={`hover:brightness-150 bg-color-darkBlue hoverable w-full border-l-4 ${
                  selected === 'q5' ? 'border-color-orange' : 'border-color-grey'
                } flex items-center cursor-pointer`}>
                  <p className="w-full capitalize p-3">
                    Bagaimana pemerintah Kabupaten Cirebon mendukung program CSR?
                  </p>
                  <span>
                    <img src={chevron} alt="" />
                  </span>
                </div>
              </div>
              <div className="desc flex flex-col items-start w-full text-color-white">
                <div className="desc-text mt-2 2xl:text-xl xl:text-base ml-[10%] w-full">
                  {selected === "q1" && (
                    <p>
                      CSR atau Corporate Social Responsibility adalah komitmen
                      perusahaan untuk berkontribusi dalam pembangunan
                      berkelanjutan dengan cara memberikan dampak positif bagi
                      masyarakat dan lingkungan sekitar. Di Kabupaten Cirebon, CSR
                      dapat diwujudkan melalui berbagai program seperti
                      pendidikan, kesehatan, lingkungan, dan pemberdayaan
                      masyarakat.
                    </p>
                  )}
                  {selected === "q2" && (
                    <p>
                      CSR penting di Kabupaten Cirebon karena membantu meningkatkan
                      kesejahteraan masyarakat lokal, mendukung pembangunan infrastruktur
                      yang berkelanjutan, serta menjaga kelestarian lingkungan. Program
                      CSR juga memperkuat hubungan antara perusahaan dan masyarakat,
                      menciptakan citra positif, dan meningkatkan kepercayaan publik
                      terhadap perusahaan.
                    </p>
                  )}
                  {selected === "q3" && (
                    <p>
                      Perusahaan di Kabupaten Cirebon dapat menjalankan program CSR
                      melalui berbagai cara, seperti bekerja sama dengan pemerintah
                      setempat, LSM, atau komunitas lokal untuk mengidentifikasi dan
                      memenuhi kebutuhan masyarakat. Program dapat mencakup pelatihan
                      keterampilan, pendidikan, layanan kesehatan, pengembangan
                      infrastruktur, dan upaya pelestarian lingkungan. Perusahaan juga
                      dapat menyediakan dana, sumber daya, atau keahlian teknis untuk
                      mendukung proyek-proyek ini.
                    </p>
                  )}
                  {selected === "q4" && (
                    <p>
                      Contoh program CSR di Kabupaten Cirebon meliputi pembangunan
                      fasilitas pendidikan seperti sekolah atau perpustakaan, layanan
                      kesehatan gratis atau subsidi untuk masyarakat kurang mampu,
                      program penghijauan atau konservasi lingkungan, serta pemberdayaan
                      ekonomi bagi komunitas lokal melalui pelatihan dan pengembangan
                      usaha kecil. Program lain mungkin termasuk dukungan untuk kegiatan
                      budaya dan olahraga di komunitas.
                    </p>
                  )}
                  {selected === "q5" && (
                    <p>
                      Pemerintah Kabupaten Cirebon mendukung program CSR dengan
                      menyediakan regulasi yang jelas, menciptakan kemitraan strategis
                      antara perusahaan dan pemerintah, serta memfasilitasi dialog antara
                      perusahaan dan masyarakat untuk memastikan bahwa program CSR sesuai
                      dengan kebutuhan lokal. Pemerintah juga memberikan insentif bagi
                      perusahaan yang aktif dalam kegiatan CSR dan mendorong partisipasi
                      sektor swasta dalam pembangunan berkelanjutan.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Contact />
        </section>
        <Footer text={"Masuk sebagai mitra"} where="/mitra/login" />
      </div>
    </React.Fragment>
  );
};

export default Home;