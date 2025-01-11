import useAuth from "../../../Hooks/UseAuth";
const AdminHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h3 className="text-3xl">
        <span>
          Hi, welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h3>
    </div>
  );
};

export default AdminHome;
