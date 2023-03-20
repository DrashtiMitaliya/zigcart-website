import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Button, Flex, useColorModeValue, Stack, Box, } from '@chakra-ui/react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updateProfileValidations } from '../Constants/validation'

// logic to validate firstName,LastName ,email  and password

export const UpdateProfilePage = () => {

    const navigate = useNavigate()
    const userProfileData = JSON.parse(localStorage.getItem('signUpData'));
    const currentUserData = userProfileData.find((item) => {
        return item.isActive === true

    })

    const initialValues = {
        firstName: currentUserData.firstName,
        lastName: currentUserData.lastName,
        email: currentUserData.email,
        phoneNumber: currentUserData.phoneNumber,
    }
    const onSubmit = (values) => {
        const userProfileData = JSON.parse(localStorage.getItem('signUpData'));

        let index = userProfileData.findIndex(item => item.isActive === true)

        if (userProfileData[index].email !== currentUserData) {
            if (userProfileData.some(item => item.email === values.email)) {
                toast.error('oops! this email is already exists plz enter another email')
            } else {
                userProfileData[index].email = values.email
                userProfileData[index].firstName = values.firstName
                userProfileData[index].lastName = values.lastName
                userProfileData[index].phoneNumber = values.phoneNumber
                localStorage.setItem('signUpData', JSON.stringify(userProfileData))
                toast.success('Profile Page Updated Successfully !')

            }
        }

    }

    return (
        // code of update profile page
        <Formik
            initialValues={initialValues}
            validationSchema={updateProfileValidations}
            onSubmit={onSubmit}
        >
            <Form >
                <Flex
                    minH={'80vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Profile Page</Heading>

                        </Stack>
                        <Box
                            className='text-start'
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8} >
                            <Stack spacing={4}>
                                <div className="mb-3">
                                    <label htmlFor="fname" className="form-label" ><span className="text-danger fs-5">*</span> First Name</label>
                                    <Field type="text" className="form-control" aria-describedby="emailHelp" name='firstName' id='' />

                                    <p className='text-danger'><ErrorMessage name='firstName'></ErrorMessage></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lname" className="form-label"><span className="text-danger fs-5">*</span>Last Name </label>
                                    <Field type="text" className="form-control" aria-describedby="emailHelp" name='lastName' />
                                    <p className='text-danger'><ErrorMessage name='lastName' ></ErrorMessage></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> <span className="text-danger fs-5">*</span>Email </label>
                                    <Field type="email" className="form-control" aria-describedby="emailHelp" name='email' />
                                    <p className='text-danger'> <ErrorMessage name='email'></ErrorMessage></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label"><span className="text-danger fs-5">*</span>Phone Number </label>
                                    <Field type="tel" className="form-control" aria-describedby="emailHelp" name='phoneNumber' />
                                    <p className='text-danger text-start'><ErrorMessage name='phoneNumber'></ErrorMessage></p>
                                </div>


                            </Stack>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    type='submit'
                                    loadingText="Submitting"
                                    size="md"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Update Profile Page
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </Form>
        </Formik>

    )
}
