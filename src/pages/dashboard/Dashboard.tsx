import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
    const user = useContext(UserContext);
    // console.log(user.user?.last)
  return (
    <>
      <h1>Dashboard</h1>
      {/* <p>{user && user.name}</p> */}
    </>
  );
};

export default Dashboard;
