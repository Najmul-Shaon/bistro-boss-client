const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
          </figure>
          <p className="bg-slate-900 text-white absolute right-4 top-4 p-1">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
