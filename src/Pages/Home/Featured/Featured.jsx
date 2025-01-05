import moment from "moment";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-10 my-24">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-20 py-20 px-36">
        <div className="md:w-1/2">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 md:w-1/2 text-white">
          <p>{moment().format("MMM Do YYYY")}</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            eligendi debitis a inventore sapiente nihil!
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
