import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBgImg from "../../../assets/menu/banner3.jpg";
import desssertBgImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBgImg from "../../../assets/menu/pizza-bg.jpg";
import saladBgImg from "../../../assets/menu/salad-bg.jpg";
import soupBgImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const souptItems = menu.filter((item) => item.category === "soup");
  const saladtItems = menu.filter((item) => item.category === "salad");
  const offeredItems = menu.filter((item) => item.category === "offered");
  const pizzaItems = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      {/* main cover  */}
      <Cover img={menuBgImg} coverTitle={"OUR MENU"}></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offeredItems}></MenuCategory>

      {/* dessert menu items  */}
      <MenuCategory
        items={dessertItems}
        title={"Desserts"}
        coverImg={desssertBgImg}
      ></MenuCategory>
      {/* pizza menu items  */}
      <MenuCategory
        items={pizzaItems}
        title={"Pizza"}
        coverImg={pizzaBgImg}
      ></MenuCategory>
      {/* Salad menu items  */}
      <MenuCategory
        items={saladtItems}
        title={"Salad's"}
        coverImg={saladBgImg}
      ></MenuCategory>
      {/* Soup menu items  */}
      <MenuCategory
        items={souptItems}
        title={"Soup"}
        coverImg={soupBgImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
