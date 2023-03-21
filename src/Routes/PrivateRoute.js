import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = () => {

  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  return (
    (isLogin) ? <Outlet /> : <Navigate to='/login' />
  )
}


