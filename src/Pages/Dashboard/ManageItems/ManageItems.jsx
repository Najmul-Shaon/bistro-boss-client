import { IoCreateOutline } from "react-icons/io5";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaTrash } from "react-icons/fa6";

const ManageItems = () => {
  const [menu] = useMenu();
  const handleDeleteItem = (item) => {
    console.log("delete item");
  };

  const handleUpdateItem = (item) => {
    console.log("update");
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleUpdateItem(item)}
                      className="btn btn-ghost btn-xs text-lg"
                    >
                      <IoCreateOutline></IoCreateOutline>
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-outline btn-xs text-lg bg-red-500 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
