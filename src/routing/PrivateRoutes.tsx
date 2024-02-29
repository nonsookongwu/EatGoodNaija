import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    const [user, setUser] = useState(false)

    if (!user) {
     return <Navigate to={"/login"}/>
 }

  return (
    <Outlet/>
  )
}

export default PrivateRoutes