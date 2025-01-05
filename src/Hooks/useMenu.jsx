import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, []);
  return [menu, loading];
};

export default useMenu;
