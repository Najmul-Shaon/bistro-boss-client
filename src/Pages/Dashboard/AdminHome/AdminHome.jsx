import useAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBook, FaUsers } from "react-icons/fa";
import { GrStakeholder } from "react-icons/gr";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: order_stats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // console.log(data);

  // custon shape bar chart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = order_stats.map((data) => {
    return { name: data.category, value: data.revenue };
  });

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
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={order_stats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {order_stats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          {" "}
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
