import { FaCalendarAlt, FaHome, FaList } from "react-icons/fa";
import {
  FaAccusoft,
  FaBook,
  FaBorderAll,
  FaCartShopping,
  FaPhone,
  FaPlus,
  FaUsers,
} from "react-icons/fa6";
import { LuSquareMenu } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // get isadmin value from the db
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* drawer content  */}
      <div className="w-64 min-h-screen bg-orange-200">
        <ul className="menu space-y-2">
          {/* conditional navlink  */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-yellow-400 text-xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaPlus className="text-yellow-400 text-xl"></FaPlus>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList className="text-yellow-400 text-xl"></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook className="text-yellow-400 text-xl"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-yellow-400 text-xl"></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-yellow-400 text-xl"></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt className="text-yellow-400 text-xl"></FaCalendarAlt>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAccusoft className="text-yellow-400 text-xl"></FaAccusoft>
                  Rivews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping className="text-yellow-400 text-xl"></FaCartShopping>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList className="text-yellow-400 text-xl"></FaList>
                  My Boookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared navlink  */}
          <li>
            <NavLink to="/">
              <FaHome className="text-yellow-400 text-xl"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <LuSquareMenu className="text-yellow-400 text-xl"></LuSquareMenu>
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              <FaBorderAll className="text-yellow-400 text-xl"></FaBorderAll>
              Order Now
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaPhone className="text-yellow-400 text-xl"></FaPhone>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* site content  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
