import UseAuth from "../../../Hooks/UseAuth";

const UserHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h3 className="text-3xl">
        Hi, welcome {user?.displayName ? user?.displayName : "back"}
      </h3>
    </div>
  );
};

export default UserHome;
