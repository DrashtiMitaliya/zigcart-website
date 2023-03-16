import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


export const Header = () => {


  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <BsFillCartCheckFill size={40} />
          <Navbar.Brand href="#home">Zig Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='mx-3'>Home </Link>
            <Link to='profile' >Profile </Link>

          </Nav>
          <Link to='/'><Button variant="light d-flex align-items-center " >  <RiLogoutBoxRFill /> Log Out  </Button></Link>
          <Link to='password'> <Button variant="light d-flex align-items-center " > <RiLockPasswordFill /> Change Password  </Button></Link>
        </Container>
      </Navbar>
  
   
    </div>
  )
}
