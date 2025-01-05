import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  console.log("from outsied", category);

  const initilaIndex = categories.indexOf(category);
  console.log(initilaIndex);
  const [tabIndex, setTabIndex] = useState(initilaIndex);

  const [menu] = useMenu();
  //   console.log(menu);

  const dessertItems = menu.filter((item) => item.category === "dessert");
  const souptItems = menu.filter((item) => item.category === "soup");
  const saladtItems = menu.filter((item) => item.category === "salad");
  const drinksItems = menu.filter((item) => item.category === "drinks");
  const pizzaItems = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order Now</title>
      </Helmet>
      <Cover img={orderCover} coverTitle={"order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={saladtItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={souptItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksItems}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
