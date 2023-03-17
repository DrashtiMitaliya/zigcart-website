import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Text
} from '@chakra-ui/react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    password :'',
}
const validationSchema =Yup.object().shape({
    email: Yup.string()
    .email('invalid email Format')
    .required('email is required'),
    password: Yup
    .string()
    .required("please enter password")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
})
const onSubmit = (values) => {
    // console.log('Form data', values)
    localStorage.setItem("Login Data",JSON.stringify(values))
}
export const LogInPage = () => {
    return (
        <div>
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
                            <Heading fontSize={'4xl'}>Log in to your account</Heading>

                        </Stack>
                        <Box 
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Field type="email" className="form-control"  name='email' />
                                    <p className='text-danger text-start'><ErrorMessage name='email'></ErrorMessage></p>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Field type="password" className="form-control" name='password' />
                                    <p className='text-danger text-start'><ErrorMessage name='password'></ErrorMessage></p>
                                </FormControl>
                                <Stack spacing={15}>
                                   
                                    <Button
                                        type='submit'
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Log in
                                        
                                    </Button>
                                    <Stack pt={6}>
                                        <Text align={'center'}>
                                           
                                           Create New Account? <Link to='/signup' color={'blue.400'}> Sign Up</Link>
                                        </Text>
                                    </Stack>
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
