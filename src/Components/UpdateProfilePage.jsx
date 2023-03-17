import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Button ,Flex,useColorModeValue,Stack,Box,} from '@chakra-ui/react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
}
const validationSchema = Yup.object({
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

})


const onSubmit = (values) => {
    localStorage.setItem("Form Data", JSON.stringify(values))

}

export const UpdateProfilePage = () => {
    const [formValues, setFormValues] = useState(null)
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
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} className='w-50'>
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
                                    <label htmlFor="fname" className="form-label" ><span className="text-danger fs-5">*</span> First Name</label>
                                    <Field type="text" className="form-control" aria-describedby="emailHelp" name='firstName' />

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
