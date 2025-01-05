import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const populerItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {populerItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <button className="btn btn-outline border-0 border-b-4 flex">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopulerMenu;
