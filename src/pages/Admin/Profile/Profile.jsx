import { Link } from "react-router-dom";
import pencil from "/Icons/pencil-02.svg";
import bgHero from "/images/bgHero.png";
import userIcon from "/images/user.png";
import Buttons from "../../../components/buttons";
import { baseApiUrl, useAuth } from "../../../hooks";
import { AuthGuard } from "../../../auth/Guard";
import Footer from "../../../components/footer";
import Bc from "../../../components/Breadcrumbs";
import Navbar from "../../../components/navbar";

export const Profile = () => {
  const auth = useAuth();
  return (
    <AuthGuard>
      <Navbar />
      <div className="w-full h-screen bg-color-grey px-32 py-12">
        <Bc />
        <div className="w-full justify-between items-center flex mt-3">
          <h1 className="font-semibold text-3xl">Profile</h1>
          <Link to={"/profile/" + auth.user.id}>
            <Buttons
              text={"Ubah profil"}
              color={"text-color-white"}
              bgColor={"red"}
              icon={pencil}
            />
          </Link>
        </div>
        <div className="bg-color-white flex justify-start align-middle gap-14 max-w-full px-7 py-3 mt-3">
          <div className=" overflow-hidden">
            <img
              src={
                auth?.user?.image
                  ? baseApiUrl + "storage/" + auth.user.image
                  : userIcon
              }
              alt="-"
              className="rounded-lg w-72 h-72 object-cover"
            />
          </div>
          <div className="py-8 flex flex-col gap-2">
            <h1 className="font-bold text-2xl">{auth.user.name}</h1>
            <h1 className="font-semibold">{auth.user.email}</h1>
            <h1>{auth.user.deskripsi}</h1>
          </div>
        </div>
      </div>
      <Footer text={"Kembali ke halaman utama"} />
    </AuthGuard>
  );
};
