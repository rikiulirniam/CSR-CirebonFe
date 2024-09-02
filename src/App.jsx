import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/register";
import { AuthProvider } from "./auth/Provider";
import AdminLogin from "./pages/Admin/Login";
import Home from "./pages/public/Home";
import Tentang from "./pages/public/tentang";
import Statistik from "./pages/public/statistik";
import Kegiatan from "./pages/public/kegiatan";
import DetailKegiatan from "./pages/public/DetailKegiatan";
import Laporan from "./pages/public/Laporan";
import RincianLaporan from "./pages/public/RincianLaporan";
import Mitra from "./pages/public/Mitra";
import DetailMitra from "./pages/public/DetailMitra";
import Sektor from "./pages/public/sektor";
import DetailSektor from "./pages/public/DetailSektor";
import DetailProyekSektor from "./pages/public/DetailProyek";
import KegiatanAdmin from "./pages/Admin/Kegiatan/Kegiatan";
import DetailKegiatanAdmin from "./pages/Admin/Kegiatan/DetailKegiatan";
import UbahKegiatanAdmin from "./pages/Admin/Kegiatan/UbahKegiatan";
import SektorAdmin from "./pages/Admin/Sektor/Sektor";
import UbahSektor from "./pages/Admin/Sektor/UbahSektor";
import DetailSektorAdmin from "./pages/Admin/Sektor/DetailSektor";
import MitraAdmin from "./pages/Admin/Mitra/Mitra";
import DetailMitraAdmin from "./pages/Admin/Mitra/DetailMitra";
import EditMitraAdmin from "./pages/Admin/Mitra/UbahMitra";
import EditProfileAdmin from "./pages/Admin/Profile/UbahProfile";
import LaporanAdmin from "./pages/Admin/Laporan/Laporan";
import ProyekAdmin from "./pages/Admin/Proyek/Proyek";
import NewProyek from "./pages/Admin/Proyek/ProyekBaru";
import DetailProyek from "./pages/Admin/Proyek/DetailProyek";
import DetailLaporanAdmin from "./pages/Admin/Laporan/DetailLaporan";
import Users from "./pages/Admin/Users/User";
import CreateUsers from "./pages/Admin/Users/CreateUser";

import LaporanMitra from "./pages/Mitra/Laporan/Laporan";
import CreateLaporanMitra from "./pages/Mitra/Laporan/CreateLaporan";
import DetailLaporanMitra from "./pages/Mitra/Laporan/DetailLaporan";

import Dashboard from "./pages/Dashboard";
import { Profile } from "./pages/Admin/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/mitra/login" element={<Login />} />
          <Route path="/mitra/register" element={<Register />} />

          <Route path="/admin" element={<AdminLogin />} />


          <Route path="/admin/kegiatan" element={<KegiatanAdmin />} />
          <Route path="/admin/kegiatan/edit" element={<UbahKegiatanAdmin />} />
          <Route path="/admin/kegiatan/:id" element={<DetailKegiatanAdmin />} />
          <Route path="/admin/sektor" element={<SektorAdmin />} />
          <Route path="/admin/sektor/edit" element={<UbahSektor />} />
          <Route path="/admin/sektor/detail" element={<DetailSektorAdmin />} />
          <Route path="/admin/mitra" element={<MitraAdmin />} />
          <Route path="/admin/mitra/detail" element={<DetailMitraAdmin />} />
          <Route path="/admin/mitra/edit" element={<EditMitraAdmin />} />
          <Route path="/admin/laporan" element={<LaporanAdmin />} />
          <Route path="/admin/laporan/detail" element={<DetailLaporanAdmin />} />
          <Route path="/admin/proyek" element={<ProyekAdmin />} />
          <Route path="/admin/proyek/create" element={<NewProyek />} />
          <Route path="/admin/proyek/:id" element={<DetailProyek />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<EditProfileAdmin />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/user/:id" element={<CreateUsers />} />


          <Route path="/mitra/laporan" element={<LaporanMitra />} />
          <Route path="/mitra/laporan/create" element={<CreateLaporanMitra />} />
          <Route path="/mitra/laporan/detail" element={<DetailLaporanMitra />} />

          <Route path="/dashboard/:role" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tentang" element={<Tentang />} />
          <Route path="/Statistik" element={<Statistik />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/kegiatan/:id" element={<DetailKegiatan />} />
          <Route path="/sektor" element={<Sektor />} />
          <Route path="/sektor/detail" element={<DetailSektor />} />
          <Route path="/sektor/detail/proyek" element={<DetailProyekSektor />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/laporan/rincian" element={<RincianLaporan />} />
          <Route path="/mitra" element={<Mitra />} />
          <Route path="/mitra/detail" element={<DetailMitra />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;