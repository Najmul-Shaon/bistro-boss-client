import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaSpoon } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgBbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgBbApiKey}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //   upload to the img bb server then get a url
    const imgPath = { image: data.image[0] };
    const res = await axiosPublic.post(imgHostingApi, imgPath, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.recipe,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("done");
      }
    }
    console.log(res.data.success);
  };
  return (
    <div>
      <SectionTitle
        heading={"Add an Item"}
        subHeading={"What's New"}
      ></SectionTitle>
      {/* form cratetion  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe name here"
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex gap-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
              defaultValue="Select a Category"
              className="select select-bordered w-full"
            >
              <option disabled>Select a Category</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Recipe name here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered textarea-lg h-24"
            placeholder="Recipe details here"
          ></textarea>
        </label>
        <div className="my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <button className="btn uppercase">
          Add item <FaSpoon></FaSpoon>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
