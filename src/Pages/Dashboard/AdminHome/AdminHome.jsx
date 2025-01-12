import useAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBook, FaUsers } from "react-icons/fa";
import { GrStakeholder } from "react-icons/gr";
const AdminHome = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // console.log(data);
  return (
    <div>
      <h3 className="text-3xl">
        <span>
          Hi, welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h3>
      <div className="stats shadow flex my-8 justify-center">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BsGraphUpArrow></BsGraphUpArrow>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <GrStakeholder></GrStakeholder>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
