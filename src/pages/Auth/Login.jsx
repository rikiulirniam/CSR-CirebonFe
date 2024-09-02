import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../../hooks";
import { useState } from "react";

import Footer from "../../components/footer";
import { Alert } from "../../components/Alert";

import logo from "/images/logoPemerintah.png";
import arrow from "/Icons/arrow.svg";

const Login = () => {
  const axios = useAxios();
  const user = useAuth({});
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/mitra/auth/login", data)
      .then((res) => {
        user.setUser(res.data.user);
        localStorage.setItem("token", res.data.user.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setAlert(err.response.data.message);
        setShowAlert(true);

        // Hide alert after 3 seconds
        setTimeout(() => setShowAlert(false), 1000);
      });
  }

  return (
    <div className="w-[100%] h-screen bg-[#f2f3f6] flex flex-col bg-color-secondary">
      {/* Header */}
      <div className="w-[100%] bg-color-white flex-col justify-center items-center inline-flex">
        <div className="w-[100%] h-[76px] flex-col justify-center items-center flex">
          <div className="w-[auto] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-10 flex">
              <img className="w-full h-10" src={logo} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[auto] h-screen m-16 rounded-xl border-2 border-color-textGray justify-center items-center inline-flex">
        <div className="w-[500px] self-stretch bg-white flex-col justify-center items-start inline-flex">
          <div className="self-stretch h-[303px] p-10 flex-col justify-center items-start gap-6 flex">
            <Link
              to={"/"}
              className="justify-start items-center gap-2 inline-flex"
            >
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="text-center text-[#98100a] text-base font-medium font-['Inter'] leading-normal">
                Kembali ke halaman utama
              </div>
            </Link>
            <div className="self-stretch h-[107px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-[#1d2838] text-4xl font-semibold font-['Inter'] capitalize leading-[43.20px]">
                Selamat datang
              </div>
              <div className="self-stretch text-[#344053] text-base font-normal font-['Inter'] leading-relaxed">
                Silakan masukan email dan kata sandi untuk masuk ke halaman
                dashboard Anda
              </div>
            </div>
            <div className="h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 inline-flex">
              <div>
                <span className="text-[#344053] text-sm font-semibold font-['Inter'] leading-tight">
                  Belum punya akun mitra?{" "}
                </span>
                <Link
                  to="/mitra/register"
                  className="hover:crusor pointer text-[#98100a] text-sm font-semibold font-['Inter'] leading-tight"
                >
                  Registrasi di sini
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[560px] self-stretch bg-white border-l-2 border-color-textGray flex-col justify-center items-start inline-flex">
          <form
            className="space-y-4 w-full h-full p-12 flex flex-col align-center justify-center"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="parent-form flex flex-col w-full h-full gap-2">
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
              </div>
            </div>

            <div className="w-full">
            {alert && <Alert text={alert} show={showAlert} />}
              <button
                type="submit"
                className="w-1/2 self-end text-color-white flex justify-center py-4 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-color-primary bg-color-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer text={"Kembali ke Beranda"} />
    </div>
  );
};

export default Login;
