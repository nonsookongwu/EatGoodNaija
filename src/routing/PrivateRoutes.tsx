import { Navigate, Outlet } from 'react-router-dom';
import useStorage from '../hooks/useStorage';

const PrivateRoutes = () => {

  // const { user } = useContext(UserContext);
  
 
  const { savedToken } = useStorage()
 

    // const [user, setUser] = useState(true)

    if (!savedToken) {
      return <Navigate to={"/login"} />;
    }

  return (
    <Outlet/>
  )
}

export default PrivateRoutes