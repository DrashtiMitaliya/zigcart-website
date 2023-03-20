import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import CryptoJS from "crypto-js";
import { BsEyeFill } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'
import { toast } from 'react-hot-toast';
import { encryptedText } from '../utils/cipher';


// logic to validate firstName,LastName ,mobile Number ,email  and password
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string()
        .email('invalid email Format')
        .required('email is required'),
    phoneNumber: Yup
        .string()
        .matches(/^[0-9]+$/, "Mobile number can only contain numeric characters")
        .min(10, "Mobile number must be at least 10 digits")
        .max(12, "Mobile number cannot be more than 12 digits")
        .required("Mobile Number is required"),
    password: Yup
        .string()
        .required("please enter password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref("password"), null], "Password is not match"),
})


export const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        firstName: 'Drashti',
        lastName: 'Mitaliya',
        email: 'd@gmail.com',
        phoneNumber: '1234567890',
        password: 'Abcd123*',
        isActive: false,
        confirmPassword: 'Abcd123*'

    }
    const navigate = useNavigate()
    const onSubmit = (values) => {
        // check if local storage is empty then push data (Array of object ) into them otherwise compare local storage data with user data and allow user to sign in
        values.password = encryptedText(values.password)
        values.confirmPassword = encryptedText(values.confirmPassword)
        let signUpData = [];
        if (localStorage.getItem("signUpData") === null) {
            signUpData = []
        } else {
            signUpData = JSON.parse(localStorage.getItem("signUpData"))
        }
        if (signUpData.some(item => item.email === values.email)) {
            toast.error('oops! user is already exists')
        }
        else {
            values.isActive = true
            signUpData.push(values)
            localStorage.setItem('signUpData', JSON.stringify(signUpData))
            localStorage.setItem('isLogin', true)
            toast.success('account created successfully')
            navigate('/home')
        }



    }

    return (
        <div>
            {/* code of signup page */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}

            >
                <Form>
                    <Flex
                        minH={'80vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                            <Stack align={'center'}>
                                <Heading fontSize={'4xl'} textAlign={'center'}>
                                    Sign up
                                </Heading>

                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <HStack>
                                        <Box>
                                            <FormControl id="firstName" isRequired>
                                                <FormLabel>First Name</FormLabel>
                                                <Field type="text" name='firstName' className="form-control" />
                                                <p className='text-danger text-start'><ErrorMessage name='firstName'></ErrorMessage></p>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl id="lastName" >
                                                <FormLabel>Last Name</FormLabel>
                                                <Field type="text" name='lastName' className="form-control" />
                                                <p className='text-danger text-start'><ErrorMessage name='lastName' ></ErrorMessage></p>
                                            </FormControl>
                                        </Box>
                                    </HStack>
                                    <FormControl id="mobileNumber" isRequired>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <Field type="tel" name='phoneNumber' className="form-control" />
                                        <p className='text-danger text-start'><ErrorMessage name='phoneNumber'></ErrorMessage></p>
                                    </FormControl>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Field type="email" name='email' className="form-control" />
                                        <p className='text-danger text-start'> <ErrorMessage name='email'></ErrorMessage></p>
                                    </FormControl>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <Field type={showPassword ? 'text' : 'password'} name='password' className="form-control" />
                                            <InputRightElement h={'full'}>
                                                <Button
                                                    size={20}
                                                    variant={'ghost'}
                                                    onClick={() =>
                                                        setShowPassword((showPassword) => !showPassword)
                                                    }>
                                                    {showPassword ? <BsEyeFill /> : < BsEyeSlashFill />}
                                                </Button>
                                            </InputRightElement>

                                        </InputGroup>
                                        <p className='text-danger text-start'> <ErrorMessage name='password'></ErrorMessage></p>
                                    </FormControl>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <InputGroup>
                                            <Field type={showPassword ? 'text' : 'password'} name='confirmPassword' className="form-control" />
                                            <InputRightElement h={'full'}>
                                                <Button
                                                    size={20}
                                                    variant={'ghost'}
                                                    onClick={() =>
                                                        setShowPassword((showPassword) => !showPassword)
                                                    }>
                                                    {showPassword ? <BsEyeFill /> : < BsEyeSlashFill />}
                                                </Button>

                                            </InputRightElement>
                                        </InputGroup>
                                        <p className='text-danger text-start'> <ErrorMessage name='confirmPassword'></ErrorMessage></p>
                                    </FormControl>
                                    <Stack spacing={10} pt={2}>
                                        <Button
                                            type='submit'
                                            loadingText="Submitting"
                                            size="lg"
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Sign up
                                        </Button>
                                    </Stack>
                                    <Stack pt={6}>
                                        <Text align={'center'}>

                                            Already a user? <Link to='/login' color={'blue.400'}> Login</Link>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </Form>
            </Formik>
        </div>
    )
}