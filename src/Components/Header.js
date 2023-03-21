import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// verify user credentials (which has already created their account) 
export const Header = () => {
  const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('isLogin')))
  const location = useLocation()
  const logout = () => {
    localStorage.setItem('isLogin', false)
    toast.success('log out successfully')
    let signUpData = JSON.parse(localStorage.getItem("signUpData"))
    let temp = signUpData.map((item) => {
      item.isActive = false
      return item
    })
    localStorage.setItem("signUpData", JSON.stringify(temp))

  }
  useEffect(() => {
    setIsActive(JSON.parse(localStorage.getItem('isLogin')))
  }, [location])

  return (
    
    // code of Navbar which has home , user profile , logout and change password features
    <div>
      <Navbar bg="light" variant="light" className='flex-wrap flex-column'>
        <Container className='d-flex'>
          <BsFillCartCheckFill size={40} />
          <Navbar.Brand href="#home">Zig Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='mx-3'>Home </Link>
            {
              isActive && <Link Link to='profile' >Profile </Link>
            }

          </Nav>
       {

        isActive && <Link to='/login'><Button variant="light d-flex align-items-center " onClick={logout} >  <RiLogoutBoxRFill /> Log Out
          </Button>
          </Link>
       }
          {
            isActive && <Link to='password'> <Button variant="light d-flex align-items-center " > <RiLockPasswordFill /> Change Password  </Button></Link>
          }
        </Container>
      </Navbar>


    </div >
  )
}
