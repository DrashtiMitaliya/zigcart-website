import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// verify user credentials (which is already created their account) 
export const Header = () => {
  const logout=()=>{
    toast.success('log out successfully')
    let signUpData = JSON.parse(localStorage.getItem("signUpData"))
    let temp = signUpData.map((item)=>{
      item.isActive = false 
      return item
    })
    localStorage.setItem("signUpData" ,JSON.stringify(temp))
  }

  return (
    // code of Navbar which has home , user profile , logout and change password features
    <div>
      <Navbar bg="light" variant="light" className='flex-wrap flex-column'>
        <Container className='d-flex'>
          <BsFillCartCheckFill size={40} />
          <Navbar.Brand href="#home">Zig Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='mx-3'>Home </Link>
            <Link to='profile' >Profile </Link>

          </Nav>
          <Link to='/'><Button variant="light d-flex align-items-center " onClick={logout} >  <RiLogoutBoxRFill /> Log Out 
           </Button>
           </Link>
          
          <Link to='password'> <Button variant="light d-flex align-items-center " > <RiLockPasswordFill /> Change Password  </Button></Link>
        </Container>
      </Navbar>
  
   
    </div>
  )
}
