import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

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


const onSubmit = (values,) => {
    console.log('Form data', values)


}

export const UpdateProfilePage = () => {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className=' w-50 bg-light m-auto mt-5 p-5'>
                <Heading> Profile Page</Heading>
            <Form className='  text-start  '>
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
                    <p className='text-danger'><ErrorMessage name='phoneNumber'></ErrorMessage></p>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
            </div>
        </Formik>

    )
}
