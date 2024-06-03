import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";
import slider1 from "../../assets/Images/Slider/1.webp";
import slider2 from "../../assets/Images/Slider/2.webp";
import slider3 from "../../assets/Images/Slider/3.webp";

import "./Hero.css";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useContext, useEffect } from "react";
import { sliderContext } from "../../context/ImageContext";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const { fetchBanner, banners } = useContext(sliderContext);

  //set Slider Name..................!
  useEffect(() => {
    fetchBanner("main");
  }, [fetchBanner]);
  return (
    <div
      style={{
        display: isSmallScreen ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "80px",
        marginRight: "80px",
        border: "none",
        marginTop: "220px",
      }}
    >
      {isSmallScreen ? (
        ""
      ) : (
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
          {banners ? (
            banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <img className="sliderImages" src={banner.attachment} alt="" />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img className="sliderImages" src={slider} alt="" />
            </SwiperSlide>
          )}
          {/* <SwiperSlide>
            <img className="sliderImages" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={slider3} alt="" />
          </SwiperSlide> */}
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
