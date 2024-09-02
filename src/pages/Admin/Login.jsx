import logo from "/images/logoPemerintah.png";
import arrow from "/Icons/arrow.svg";
import Footer from "../../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../../hooks";
import { useState } from "react";
import { Alert } from "../../components/Alert";

const AdminLogin = () => {
  const axios = useAxios();
  const user = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/admin/auth/login", data)
      .then((res) => {
        user.setUser(res.data.user);
        console.log(user);
        localStorage.setItem("token", res.data.user.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setAlert(err.response.data.message);
      });
  }

  return (
    <div className="w-[100%] h-screen bg-[#f2f3f6] flex flex-col bg-color-secondary">
      <div className="w-[100%] bg-color-white flex-col justify-center items-center inline-flex">
        <div className="w-[100%] h-[76px] flex-col justify-center items-center flex">
          <div className="w-[auto] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-10 flex">
              <img className="w-[124.25px] h-10" src={logo} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[auto] h-screen m-16 rounded-xl border-2 border-color-textGray justify-center items-center inline-flex">
        <div className="w-[500px] self-stretch bg-white flex-col justify-center items-start inline-flex">
          <div className="self-stretch h-[303px] p-10 flex-col justify-center items-start gap-6 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="text-center text-[#98100a] text-base font-medium font-['Inter'] leading-normal">
                <Link to={"/"}>Kembali ke halaman utama</Link>
              </div>
            </div>
            <div className="self-stretch h-[107px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-[#1d2838] text-4xl font-semibold font-['Inter'] capitalize leading-[43.20px]">
                Selamat datang
              </div>
              <div className="self-stretch text-[#344053] text-base font-normal font-['Inter'] leading-relaxed">
                Silakan masukan email dan kata sandi untuk masuk ke halaman
                dashboard Anda
              </div>
            </div>
          </div>
        </div>
        <div className="w-[560px] self-stretch bg-white border-l-2 border-color-textGray flex-col justify-center items-start inline-flex">
          <form
            className="space-y-4 w-full p-12"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              
            </div>
            <div>
              <label className="block text-sm font-medium">
                Email<span className="text-color-red pl-2">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
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
                required
                value={data.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 rounded-md focus:outline-none focus:ring-color-red focus:border-color-red sm:text-sm"
                placeholder="Masukan kata sandi"
              />
            </div>
            {alert && <Alert text={alert + " nih"} />}
            <div>
              <button
                type="submit"
                className="w-1/2 text-color-white flex justify-center py-4 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-color-primary bg-color-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default AdminLogin;
