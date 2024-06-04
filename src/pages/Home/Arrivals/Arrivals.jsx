import img1 from "../../../assets/Images/GameCD/item.png";
import img2 from "../../../assets/Images/GameCD/item 1.png";
import img3 from "../../../assets/Images/GameCD/item 2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Arrivals.css";

// import required modules
import { Pagination } from "swiper/modules";

const Arrivals = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex justify-between mt-20 mb-3">
        <p
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            color: "var(--Text-Regular, #222222)",
          }}
        >
          New Arrivals (9)
        </p>

        <button
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21px",
            color: "var(--Text-Regular, #222222)",
            textDecoration: "underline",
          }}
        >
          View All
        </button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ border: 'none' }}
      >
        <SwiperSlide className="arrivals"><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="arrivals"><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="arrivals"><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className="arrivals"><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="arrivals"><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="arrivals"><img src={img3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Arrivals;
