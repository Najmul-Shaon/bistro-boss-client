import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaSpoon } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const imgBbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgBbApiKey}`;

const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { name, category, recipe, price, _id } = useLoaderData();
  //   const item = useLoaderData();


  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Update Info"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            defaultValue={name}
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
              defaultValue={category}
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
              defaultValue={price}
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
            defaultValue={recipe}
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
          Update item <FaSpoon></FaSpoon>
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
