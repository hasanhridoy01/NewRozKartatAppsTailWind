import { Grid } from "@mui/material";
import img1 from "../../../assets/Images/homeSlider/Screenshot_2.png";
import img2 from "../../../assets/Images/homeSlider/item.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SubCarousel.css";

// import required modules
import { Pagination } from "swiper/modules";

const SubCarousel = () => {
  return (
    <div className="container mx-auto px-10 mt-10">
      <>
        <Grid container alignItems="center" justifyContent="center">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ border: "none" }}
          >
            <SwiperSlide className="subCarousel">
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="subCarousel">
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="subCarousel">
              <img src={img1} alt="" />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </>
    </div>
  );
};

export default SubCarousel;
