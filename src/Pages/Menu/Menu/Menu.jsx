import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBgImg from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuBgImg} coverTitle={"OUR MENU"}></Cover>
      
    </div>
  );
};

export default Menu;
