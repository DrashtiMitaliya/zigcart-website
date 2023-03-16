import React from 'react';
import { Heading } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ChangePasswordPage = () => {
    return (
        <div  className='container m-auto mt-5 p-5  bg-light w-75'>
            <Heading>Change Password </Heading>
            <Form className='w-50 m-auto '>
            <Form.Group className="my-3 text-start" controlId="formBasicEmail">
                    <Form.Label className=''>Current Password</Form.Label>
                    <Form.Control type="password"  />

                </Form.Group>
                <Form.Group className="my-3 text-start" controlId="formBasicEmail">
                    <Form.Label className=''>New Password</Form.Label>
                    <Form.Control type="password"/>

                </Form.Group>
                <Form.Group className="my-3 text-start" controlId="formBasicEmail">
                    <Form.Label className=''>Confirm Password</Form.Label>
                    <Form.Control type="password"/>

                </Form.Group>
                <Button variant="primary" type="submit" className='text-center'>
                    Submit
                </Button>
               
               
            </Form>
        </div>
    )
}
