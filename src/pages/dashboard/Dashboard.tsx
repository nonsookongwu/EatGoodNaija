import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button";
import useStorage from "../../hooks/useStorage";

const Dashboard = () => {
  const navigate = useNavigate()
  const {savedUser} = useStorage()
  
  const handleLogOut = () => { 
    // localStorage.removeItem("token");
     navigate("/login");
    localStorage.clear()
   
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
