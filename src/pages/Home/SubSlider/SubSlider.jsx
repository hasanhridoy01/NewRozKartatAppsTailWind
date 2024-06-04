import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/Images/homeSlider/Banner.png";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "./SubSlider.css";

const SubSlider = () => {
  return (
    <div className="container mx-auto px-10 mt-24 mb-40">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ border: "none" }}
        >
          <SwiperSlide>
            <img className="sliderImages" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={img1} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SubSlider;
