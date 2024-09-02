import React from "react";
import { useState } from "react";
import { AuthGuard } from "../../../auth/Guard";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Bc from "../../../components/Breadcrumbs";

import save from "/Icons/Save.svg";
import send from "/Icons/send-01.svg";
import upload from "/Icons/upload-cloud-01.svg";
import img1 from "/images/img1.png";



const UbahMitra = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
        const imageFile = e.target.files[0];
        setSelectedImage(URL.createObjectURL(imageFile));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Selected Image:', selectedImage);
    };

    return (
        <>
        <AuthGuard>
            <Navbar />
                <div className="w-full h-auto bg-color-grey px-32 py-12">
                    <Bc />
                    <div className="w-full justify-between items-center flex mt-3">
                        <h1 className="font-semibold text-3xl">Ubah Profile Mitra</h1>
                    </div>
                    <div className="bg-color-white p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex gap-2 items-end">
                            <img src={img1} className="w-[40%] h-[30%] rounded" alt="" />
                            <div className="flex flex-col items-start justify-center w-full">
                                <p className="font-semibold text-base 2xl:text-2xl text-center p-3">Foto thumbnail<span className="text-color-red p-3">*</span></p>
                                <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center overflow-hidden justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {selectedImage ? (
                                    <img src={selectedImage} alt="Preview" className="w-screen h-full object-cover rounded-lg" />
                                    ) : (
                                    <>
                                        <img src={upload} alt="" />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Klik untuk unggah</span> atau seret dan lepas kesini
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG up to 10MB</p>
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
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">Nama Mitra <span className="text-color-red p-3 font-bold text-base">*</span></label>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Nama Mitra"
                                required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">Nama PT <span className="text-color-red p-3 font-bold text-base">*</span></label>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Nama PT"
                                required
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="w-full">
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">No Telepon <span className="text-color-red p-3 font-bold text-base">*</span></label>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="No Telepon"
                                required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-base font-medium text-gray-700 dark:text-gray-200">Email <span className="text-color-red p-3 font-bold text-base">*</span></label>
                                <input
                                type="email"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Email"
                                required
                                />
                            </div>
                        </div>
                                

                        <div className="flex gap-3 w-full">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Alamat</label>
                                <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Alamat"
                                rows="4"
                                required
                                ></textarea>
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Deskripsi</label>
                                <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Deskripsi"
                                rows="4"
                                required
                                ></textarea>
                            </div>

                        </div>

                        <section className="w-full flex items-center justify-end gap-3">
                            <button
                                type="submit"
                                className="w-auto flex items-center gap-2 px-4 py-2 text-white bg-color-white font-semibold rounded-md border border-color-gray300 hover:bg-blue-700 "
                            >
                                <img src={save} alt="" />Kembali
                            </button>

                            <button
                                type="submit"
                                className="w-auto flex items-center gap-2 px-4 py-2 text-white bg-color-red900 text-color-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            >
                                <img src={send} alt="" />Simpan
                            </button>
                        </section>
                        </form>
                    </div>
                </div>
            <Footer text={"Kembali ke halaman utama"}/>
        </AuthGuard>
        </>
    );
}

export default UbahMitra