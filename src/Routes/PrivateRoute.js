import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = () => {

  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  // let isActive = false ;

  // if (localStorage.getItem('isLogin') === null || localStorage.getItem('signUpData') === null) {
  //     localStorage.setItem('isLogin', false);
  //   } else {
  //     isLogin = JSON.parse(localStorage.getItem('isLogin'))
  //     isActive = (JSON.parse(localStorage.getItem('signUpData'))).some(item => item.isActive)
  //   }


  return (
    (isLogin) ? <Outlet /> : <Navigate to='/login' />
  )
}


