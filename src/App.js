
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { UpdateProfilePage } from './Components/UpdateProfilePage';
import { ProductCard } from './Components/ProductCard';
import { ChangePasswordPage } from './Components/ChangePasswordPage';
import { ProductDetails } from './Components/ProductDetails';
import { LogInPage } from './Components/LogInPage';
import { SignUpPage } from './Components/SignUpPage';
import { Toaster } from 'react-hot-toast';



function App() {
  

  return (
    <div className="App">
      <Toaster/>
      <Header />
      <Routes>
        <Route path='/' element={<SignUpPage/>}></Route>
        <Route path='/home' element={<ProductCard />} ></Route>
        <Route path='/profile' element={<UpdateProfilePage />} ></Route>
        <Route path='/password' element={<ChangePasswordPage />}></Route>
        {/* <Route path='/products' element={<ProductCard  />} ></Route> */}
        <Route path='/products/:productId' element={<ProductDetails />}></Route>
        <Route path='/login' element={<LogInPage/>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
