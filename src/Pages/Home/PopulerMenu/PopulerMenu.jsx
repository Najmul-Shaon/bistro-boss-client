import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const populerItems = res.data.filter(
        (item) => item.category === "popular"
      );
      setMenu(populerItems);
    });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopulerMenu;
