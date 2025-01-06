import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { user } = UseAuth();
  const { image, name, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const handleFoodCardClick = (item) => {
    console.log(item, user?.email);
    if (user && user?.email) {
      console.log("yes");
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(`${name} Added to cart.`);
        }
      });
    } else {
      console.log("no");
      toast.error("Please login first.");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-4 top-4 p-1">
        {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleFoodCardClick(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
