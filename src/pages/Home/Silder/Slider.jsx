import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation"

import image from '../../../assets/slide.jpg'

const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="sliderSwiper"
                >
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src="https://thumbs.dfs.ivi.ru/storage23/contents/c/c/f5d288cdcba5afbc210f27d5d39623.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src="https://thumbs.dfs.ivi.ru/storage23/contents/d/9/d9b81301a8f304c9c6ee1470bc859d.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src="https://thumbs.dfs.ivi.ru/storage37/contents/5/e/a797cd0fc366b4398a858d889e8ac1.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src="	https://thumbs.dfs.ivi.ru/storage5/contents/3/5/7a52809d0ae6fa6fafdf6d6d15223b.png/1216x370/?q=60" alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Slider;