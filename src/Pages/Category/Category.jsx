import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      //   slidesPerView={"auto"} // this is actual
      slidesPerView={5} // this from jhankar vai
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
