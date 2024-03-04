import CustomButton from "../../components/button";
import useStorage from "../../hooks/useStorage";

const Dashboard = () => {
  
  const {savedUser} = useStorage()
  
  const handleLogOut = () => { 
    // localStorage.removeItem("token");
    localStorage.clear()
    window.location.reload();
  }
 


  return (
    <>
      <h1>Dashboard</h1>
      <p>{savedUser?._id}</p>
      <p>{savedUser?.email}</p>
      <p>{savedUser?.first}</p>
      <p>{savedUser?.last}</p>
      <CustomButton onClick={handleLogOut}>Log out</CustomButton>
    </>
  );
};

export default Dashboard;
