import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper p-20"
        >

            <SwiperSlide className='  '>
                <div className='relative  w-full h-[350px]'>
                    <p className='absolute inset-0 flex  justify-center items-end pb-14 bg-gray-700 bg-opacity-20 text-gray-100 z-20 text-4xl '>Salads</p>
                    <img src={img1} className=' w-full ' alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide className=' border'>
                <div className='relative  w-full h-[350px]'>
                    <p className='absolute inset-0 flex  justify-center items-end pb-14 bg-gray-700 bg-opacity-20 text-gray-100 z-20 text-4xl '>Pizza</p>
                    <img src={img2} className=' w-full ' alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide className=' border'>
                <div className='relative  w-full h-[350px]'>
                    <p className='absolute inset-0 flex  justify-center items-end pb-14 bg-gray-700 bg-opacity-20 text-gray-100 z-20 text-4xl '>Soup</p>
                    <img src={img3} className=' w-full ' alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide className=' border'>
                <div className='relative  w-full h-[350px]'>
                    <p className='absolute inset-0 flex  justify-center items-end pb-14 bg-gray-700 bg-opacity-20 text-gray-100 z-20 text-4xl '>Desert</p>
                    <img src={img4} className=' w-full ' alt="" />

                </div>
            </SwiperSlide>
            <SwiperSlide className=' border'>
                <div className='relative  w-full h-[350px]'>
                    <p className='absolute inset-0 flex  justify-center items-end pb-14 bg-gray-700 bg-opacity-20 text-gray-100 z-20 text-4xl '>Salad</p>
                    <img src={img5} className='   swiper-slide img' alt="" />

                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Category;