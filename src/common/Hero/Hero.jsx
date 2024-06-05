import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";

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
        marginBottom: '0px'
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
                <img className="sliderImagesHero" src={banner.attachment} alt="" />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img className="sliderImagesHero" src={slider} alt="" />
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
