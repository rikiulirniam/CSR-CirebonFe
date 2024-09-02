import React, { useEffect, useState } from "react";
import { AuthGuard } from "../../../auth/Guard";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Bc from "../../../components/Breadcrumbs";
import save from "/Icons/Save.svg";
import send from "/Icons/send-01.svg";
import upload from "/Icons/upload-cloud-01.svg";
import { useParams } from "react-router-dom";
import { baseApiUrl, useAxios } from "../../../hooks";

const CreateUser = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const param = useParams();
  const axios = useAxios();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: false, // Default role set to "user"
    address: "",
    image: null,
  });

  const id = param.id;
  const isCreate = id === "create";
  const [user, setUser] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setFormData({
        ...formData,
        image: imageFile,
      });
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input Changed - Name:", name, "Value:", value); // Debugging line

    if (name === "role") {
      setFormData({
        ...formData,
        role: value === "admin",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    axios
      .post("/admin/users", form)
      .then((res) => {
        console.log("Admin user created:", res.data);
      })
      .catch((err) => {
        console.log("Error creating admin user:", err);
      });
  };

  const handleMitraSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    axios
      .put(`/mitra/users/${1}`, form) // Update endpoint if necessary
      .then((res) => {
        console.log("Mitra user created:", res.data);
      })
      .catch((err) => {
        console.log("Error creating mitra user:", err);
      });
  };

  const handleSubmit = (e) => {
    4;
    console.log(e);
    e.preventDefault(); // Prevent default behavior of form submission
    if (formData.role) {
      handleAdminSubmit(e);
    } else {
      handleMitraSubmit(e);
    }
  };

  useEffect(() => {
    if (!isCreate) {
      console.log(id.split("_"));
      let userParam = id.split("_");
      let role = userParam[0];
      let userId = userParam[1];

      let url = `/admin/users/${role}/${userId}`;

      axios
        .get(url)
        .then((res) => {
          setUser(res.data.user);
          setFormData({
            name: res.data.user.name,
            email: res.data.user.email,
            phone: res.data.user.phone,
            role: res.data.user.role === "admin", // Update role properly
            address: res.data.user.address,
            image: res.data.user.image,
          });
          if (res.data.user.image) {
            setSelectedImage(baseApiUrl + `storage/` + res.data.user.image);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <div className="w-full h-auto bg-color-grey px-32 py-12">
        <Bc />
        <div className="w-full justify-between items-center flex mt-3">
          <h1 className="font-semibold text-3xl">User</h1>
        </div>
        <div className="bg-color-white p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-2 items-end">
              {!isCreate && formData.image && (
                <img
                  src={baseApiUrl + `storage/` + formData.image}
                  className="w-72 h-72 rounded"
                  alt=""
                />
              )}
              <div className="flex flex-col items-start justify-center w-full">
                <p className="font-semibold text-base 2xl:text-2xl text-center p-3">
                  Foto<span className="text-color-red p-3">*</span>
                </p>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center overflow-hidden justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-screen h-full object-cover rounded-lg"
                      />
                    ) : (
                      <>
                        <img src={upload} alt="" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            Klik untuk unggah
                          </span>{" "}
                          atau seret dan lepas kesini
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <div className="w-full">
                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">
                  Nama{" "}
                  <span className="text-color-red p-3 font-bold text-base">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nama Pengguna"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">
                  Email{" "}
                  <span className="text-color-red p-3 font-bold text-base">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Email Pengguna"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-full">
                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">
                  No Telepon{" "}
                  <span className="text-color-red p-3 font-bold text-base">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="No Telepon"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Role{" "}
                  <span className="text-color-red p-3 font-bold text-base">
                    *
                  </span>
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role ? "admin" : "user"}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="user">Mitra</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-base font-medium text-gray-700 dark:text-gray-200">
                Alamat{" "}
                <span className="text-color-red p-3 font-bold text-base">
                  *
                </span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Alamat Pengguna"
                rows="4"
              ></textarea>
            </div>

            <section className="w-full flex items-center justify-end gap-3">
              <button
                type="submit"
                className="w-auto flex items-center gap-2 px-4 py-2 text-white bg-color-white font-semibold rounded-md border border-color-gray300 hover:bg-blue-700 "
              >
                <img src={save} alt="" />
                Kembali
              </button>

              <button
                type="submit"
                className="w-auto flex items-center gap-2 px-4 py-2 text-white bg-color-red900 text-color-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                <img src={send} alt="" />
                Simpan
              </button>
            </section>
          </form>
        </div>
      </div>
      <Footer text={"Kembali ke Halaman Utama"} where="/dashboard" />
    </AuthGuard>
  );
};

export default CreateUser;
