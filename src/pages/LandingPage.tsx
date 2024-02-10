import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default LandingPage