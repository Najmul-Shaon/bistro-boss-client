import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/menu").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, []);
  return [menu, loading];
};

export default useMenu;
