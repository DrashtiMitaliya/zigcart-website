import React from 'react';
import { Heading, Flex, useColorModeValue, Box, Stack, Button } from '@chakra-ui/react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { decryptedText, encryptedText } from '../utils/cipher';
import { toast } from 'react-hot-toast';
import { changePasswordValidations } from '../Constants/validation';
import { useNavigate } from 'react-router-dom';


export const ChangePasswordPage = () => {
    const initialValues = {
        password: '',
        confirmPassword: ''

    }

    const onSubmit = (values) => {

        const passwordData = JSON.parse(localStorage.getItem('signUpData'))
        const currentUserData = passwordData.find(item => item.isActive === true)
        if (decryptedText(currentUserData.password) !== values.password) {
            toast.error('Password is invalid. Please try again.')
        } else if (decryptedText(currentUserData.password) === values.confirmPassword) {
            toast.error('Old password and new password are not be the same')
        } else {
            const temp = passwordData.map(item => {
                if (item.isActive === true) {
                    item.password = encryptedText(values.password)
                    item.confirmPassword = encryptedText(values.confirmPassword)
                }
                return item
            })
            toast.success('password changed successfully')
            localStorage.setItem('signUpData', JSON.stringify(temp))
        }

    }
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={changePasswordValidations}
            onSubmit={onSubmit}
        >
            <Form >
                <Flex
                    minH={'80vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Edit Password</Heading>

                        </Stack>
                        <Box
                            className='text-start'
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <div className="mb-3">
                                    <label htmlFor="fname" className="form-label" ><span className="text-danger fs-5">*</span> Current Password</label>
                                    <Field type="password" className="form-control" name='password' />
                                    <p className='text-danger'><ErrorMessage name='password'></ErrorMessage></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lname" className="form-label"><span className="text-danger fs-5">*</span>New Password </label>
                                    <Field type="password" className="form-control" name='nPassword' />
                                    <p className='text-danger'><ErrorMessage name='nPpassword' ></ErrorMessage></p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> <span className="text-danger fs-5">*</span>Confirm New Password </label>
                                    <Field type="password" className="form-control" name='confirmPassword' />
                                    <p className='text-danger'> <ErrorMessage name='confirmPassword'></ErrorMessage></p>
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
                                    Set Password
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </Form>
        </Formik>

    )
}
