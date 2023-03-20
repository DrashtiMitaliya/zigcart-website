import React from 'react';
import { Heading ,Flex,useColorModeValue,Box,Stack,Button} from '@chakra-ui/react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';


export const ChangePasswordPage = () => {
    const initialValues = {
        password :'',
        confirmPassword : ''

    }
    const validationSchema = Yup.object().shape({
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
    const onSubmit = (values)=>{
        
        const passwordData = JSON.parse(localStorage.getItem('signUpData'))
     
     
    }
    return (
       
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                                        <Field type="text" className="form-control" name='password' />
                                        <p className='text-danger'><ErrorMessage name='password'></ErrorMessage></p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lname" className="form-label"><span className="text-danger fs-5">*</span>New Password </label>
                                        <Field type="text" className="form-control"name='nPassword' />
                                        <p className='text-danger'><ErrorMessage name='nPpassword' ></ErrorMessage></p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"> <span className="text-danger fs-5">*</span>Confirm New Password </label>
                                        <Field type="email" className="form-control" name='confirmPassword' />
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
