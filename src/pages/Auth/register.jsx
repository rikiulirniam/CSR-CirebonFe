import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../../hooks";

import Footer from "../../components/footer";
import logo from "/images/logoPemerintah.png";
import arrow from "/Icons/arrow.svg";
import { Alert } from "../../components/Alert";

const Register = () => {
  const axios = useAxios();
  const user = useAuth();
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [aColor, setAColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef(null);

  const [data, setData] = useState({
    email: "",
    name: "",
    nama_perusahaan: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (data.password.length < 8) {
      newErrors.password = "Kata sandi harus minimal 8 karakter.";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Kata sandi tidak cocok.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    axios
      .post("/mitra/auth/register", data)
      .then((res) => {
        setAlert(res.data.message);
        setAColor("blue");
        form.current.reset();
        // navigate("/mitra/login");
      })
      .catch((err) => {
        console.log(err);
        setAColor("red");
        setAlert(err.response.data.message);
      })
      .finally(() => {
        setShowAlert(true);
      });
  }

  return (
    <React.Fragment>
      <div className="w-[100%] h-[screen] bg-[#f2f3f6] flex flex-col bg-color-secondary">
        <div className="w-[100%] bg-color-white flex-col justify-center items-center inline-flex">
          <div className="w-[100%] h-[76px] flex-col justify-center items-center flex">
            <div className="w-[auto] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-10 flex">
                <img className="w-[124.25px] h-10" src={logo} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[auto h-screen m-16 rounded-xl border-2 border-color-textGray justify-center items-center inline-flex">
          <div className="w-[500px] self-stretch bg-white flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[303px] p-10 flex-col justify-center items-start gap-6 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="text-center text-[#98100a] text-base font-medium font-['Inter'] leading-normal">
                  Kembali ke halaman utama
                </div>
              </div>
              <div className="self-stretch h-[107px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-[#1d2838] text-4xl font-semibold font-['Inter'] capitalize leading-[43.20px]">
                  Registrasi Mitra
                </div>
                <div className="self-stretch text-[#344053] text-base font-normal font-['Inter'] leading-relaxed">
                  Silakan masukan email dan kata sandi untuk masuk ke halaman
                  dashboard Anda
                </div>
              </div>
              <div className="h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 inline-flex">
                <div>
                  <span className="text-[#344053] text-sm font-semibold font-['Inter'] leading-tight">
                    Sudah punya akun?{" "}
                  </span>
                  <Link
                    to="/mitra/login"
                    className="hover:crusor pointer text-[#98100a] text-sm font-semibold font-['Inter'] leading-tight"
                  >
                    Klik di sini
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[560px] self-stretch bg-white border-l-2 border-color-textGray flex-col justify-center items-start inline-flex">
            <form
              ref={form}
              className="space-y-4 w-full p-12"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium">
                  Email<span className="text-color-red pl-2">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                  placeholder="Masukan email anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Nama Mitra<span className="text-color-red pl-2">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                  placeholder="Masukan nama mitra"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Nama Perusahaan<span className="text-color-red pl-2">*</span>
                </label>
                <input
                  type="text"
                  name="nama_perusahaan"
                  value={data.nama_perusahaan}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                  placeholder="Masukan nama perusahaan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Kata Sandi<span className="text-color-red pl-2">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                  placeholder="Masukan kata sandi"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Konfirmasi kata Sandi
                  <span className="text-color-red pl-2">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                  placeholder="Masukan kata sandi"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              {alert && <Alert text={alert} show={showAlert} color={aColor} />}

              <div>
                <button
                  type="submit"
                  className="w-1/2 text-color-white flex justify-center py-4 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-color-primary bg-color-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Register;
