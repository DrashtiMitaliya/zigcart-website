
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Components/Header';
import { UpdateProfilePage } from './Components/UpdateProfilePage';
import { ProductCard } from './Components/ProductCard';
import { ChangePasswordPage } from './Components/ChangePasswordPage';
import { ProductDetails } from './Components/ProductDetails';
import { LogInPage } from './Components/LogInPage';
import { SignUpPage } from './Components/SignUpPage';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './Routes/PrivateRoute';



function App() {


  return (
    <div className="App">
      <Toaster />
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
      </Routes>

    </div>
  );
}

export default App;
