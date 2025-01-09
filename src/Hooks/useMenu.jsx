import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [loading, setLoading] = useState(true);
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/menu").then((res) => {
  //     setMenu(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
