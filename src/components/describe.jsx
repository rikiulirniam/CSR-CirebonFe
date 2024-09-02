import React from "react"

const Describe = ({img1, img2, img3, title, text, text2}) => {
    return(
        <React.Fragment>
            <div className='container flex h-screen w-full jusify-center items-start gap-12'>
                    <div className="pict relative w-full p-5">
                        <img src={img1} alt="" width={160} className='h-max-64 object-cover absolute top-10 left-[28%] 2xl:left-[18%] 2xl:w-[30%]'/>
                        <img src={img2} alt="" width={250} className='absolute top-0 right-2 mt-5 2xl:w-[50%]'/>
                        <img src={img3} alt="" width={260} className='absolute top-[25.5vh] left-[11%] 2xl:w-[35%] 2xl:top-[20vh] 2xl:left-[13%]'/>
                    </div>
                    <div className='inform flex flex-col w-full mr-12'>
                        <div className="header">
                            <div className="h-[31px] py-[15px] justify-start items-start inline-flex">
                                <div className="w-[35px] self-stretch border-t-4 border-color-orange" />
                            </div>
                            <p className='text-4xl 2xl:text-5xl font-bold capitalize w-64 2xl:w-full'>
                                {title}
                            </p>
                            <div className='w-auto mt-5 2xl:text-xl'>
                                <p>Corporate Social Responsibility (CSR) merupakan konsep di mana perusahaan secara sadar mengintegrasikan kepedulian sosial dan lingkungan ke dalam operasional bisnisnya. Ini melibatkan tindakan sukarela yang memberikan manfaat bagi masyarakat, seperti program pendidikan, kesehatan, dan lingkungan, serta upaya untuk mengurangi dampak negatif terhadap lingkungan. CSR tidak hanya mencerminkan tanggung jawab perusahaan terhadap masyarakat, tetapi juga dapat meningkatkan reputasi dan daya saing bisnis.</p>
                            </div>
                            <div className='w-auto mt-5 2xl:text-xl'>
                                <p>Berdasarkan Undang-Undang nomor 40 Tahun 2007 tentang Perseroan Terbatas (UUPT) pasal 1 ayat 3, pengertian Tanggung Jawab Sosial dan Lingkungan Perusahaan (TJSLP) atau Corporate Social Responsibility (CSR) adalah komitmen perseroan untuk berperan serta dalam pembangunan ekonomi berkelanjutan guna meningkatkan kualitas kehidupan dan lingkungan yang bermanfaat, baik bagi perseroan sendiri, komunitas setempat, maupun masyarakat pada umumnya.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Describe