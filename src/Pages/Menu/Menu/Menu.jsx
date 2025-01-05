import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBgImg from "../../../assets/menu/banner3.jpg";
import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuBgImg} coverTitle={"OUR MENU"}></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuBgImg} coverTitle={"OUR MENU"}></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuBgImg} coverTitle={"OUR MENU"}></Cover>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;
