import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // axios.get("https://y-rho-pied.vercel.app/reviews").then((res) => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <section className="my-24">
      <SectionTitle
        subHeading={"What our client say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center space-y-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="flex">
                <SiComma className="text-5xl font-bold"></SiComma>
                <SiComma className="text-5xl font-bold"></SiComma>
              </div>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
