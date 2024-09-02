// import React from "react";
// import { Link } from "react-router-dom";
// import { AuthGuard } from "../../../auth/Guard";

// import Navbar from "../../../components/navbar";
// import Bc from "../../../components/Breadcrumbs";
// import Buttons from "../../../components/buttons";
// import pencil from "/Icons/pencil-02.svg";
// import bgHero from "/images/bgHero.png";
// import Footer from "../../../components/footer";





// const Profile = () => {
//     return(
//         <>
//         <AuthGuard>
//             <Navbar />
//             <div className="w-full h-screen bg-color-grey px-32 py-12">
//                 <Bc />
//                 <div className="w-full justify-between items-center flex mt-3">
//                     <h1 className="font-semibold text-3xl">Sektor</h1>
//                     <Link to={"/mitra/profile/edit"}>
//                         <Buttons text={"Ubah profil"} color={"text-color-white"} bgColor={"red"} icon={pencil}/>
//                     </Link>
//                 </div>
//                 <div className="bg-color-white flex max-w-full px-7 py-3 mt-3">
//                     <div>
//                         <img src={bgHero} width={550} height={150} alt="" className="rounded-lg"/>
//                     </div>
//                     <div className="p-4 flex flex-col gap-2">
//                         <h1 className="font-bold">Ardhiya Febrian Rachman</h1>
//                         <h1 className="font-semibold">info@email.com</h1>
//                         <h1>Malesuada massa aliquam in viverra nec a non. Ut ac tellus ultricies nam ut. Purus sed pulvinar in gravida. Tincidunt consequat cum eu nunc duis ac aenean. Curabitur vestibulum donec scelerisque orci augue.</h1>
//                     </div>
//                 </div>
//             </div>
//             <Footer text={"Kembali ke halaman utama"}/>
//             </AuthGuard>
//         </>
//     )
// }

// export default Profile