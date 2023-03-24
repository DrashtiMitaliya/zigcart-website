// import from Packeges
import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom';

// import from files
import { UpdateProfilePage } from '../../views/authentication/UpdateProfilePage';
import { ProductCard } from '../../Components/Product/ProductCard';
import { ChangePasswordPage } from '../../views/authentication/ChangePasswordPage';
import { ProductDetails } from '../../Components/Product/ProductDetails';
import { LogInPage } from '../../views/authentication/LogInPage';
import { SignUpPage } from '../../views/authentication/SignUpPage';
import { PrivateRoute } from '../../Router/PrivateRoute';
import { PageNotFound } from '../../Components/PageNotFound/PageNotFound';
import { Header } from '../../Components/HeaderSection/Header';

export const Router = () => {
  return (
    <>
    <Header />
        <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<ProductCard />} ></Route>
          <Route path='/profile' element={<UpdateProfilePage />} ></Route>
          <Route path='/products/:productId' element={<ProductDetails />}></Route>
          <Route path='/password' element={<ChangePasswordPage />}></Route>
        

        </Route>
        <Route path='/signup' element={<SignUpPage />} ></Route>
        <Route path='/login' element={<LogInPage />} ></Route>
        <Route path='/*' element={<PageNotFound/>}></Route>
        
      </Routes>
    
    </>
  
  )
}
