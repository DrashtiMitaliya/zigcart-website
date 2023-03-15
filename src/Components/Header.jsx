import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {RiLogoutBoxRFill} from 'react-icons/ri';
import {RiLockPasswordFill} from 'react-icons/ri'

export const Header = () => {
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
            <BsFillCartCheckFill size={40}/>
          <Navbar.Brand href="#home">Zig Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            
          </Nav>
          
             
                <Button variant="light d-flex align-items-center " >  <RiLogoutBoxRFill/> Log Out  </Button>
            
             
            <Button variant="light d-flex align-items-center " > <RiLockPasswordFill/> Change Password  </Button>
        </Container>
      </Navbar>
    </div>
  )
}
