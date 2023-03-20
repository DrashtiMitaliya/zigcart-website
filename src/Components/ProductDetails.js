import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {GrLinkPrevious} from 'react-icons/gr'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { RotatingLines } from 'react-loader-spinner';
import { Card, CardBody, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter } from '@chakra-ui/react';


export const ProductDetails = () => {
    const { productId } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then((response) => setData(response.data))
    }, [])

    return (

        <div>
            {data.images ?
                <div className='container '>
                    <div >
                        <Link to='/home'><Button variant='bold' colorScheme='light' >
                           <GrLinkPrevious/>
                        </Button></Link>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 m-auto">
                            <Carousel>
                                {data.images.map(id => {
                                    return <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={id}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                })
                                }

                            </Carousel>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12   ">
                            <Card maxW='sm' padding={15} className='m-auto'>
                                <CardBody>
                                    <Stack className='m-auto' >
                                        <Heading size='md' color='blue.700'>{data.title}</Heading>
                                        <Text >
                                            {data.description}
                                        </Text>

                                    </Stack>
                                </CardBody>

                                <CardBody className='bg-light text-dark'>
                                    <Stack className='text-start' fontSize={15} fontFamily="Arial" >

                                        <Text fontSize={15}>
                                            Stock : {data.stock}
                                            <Divider className='m-2' />
                                            Discount : {data.discountPercentage} %
                                            <Divider className='m-2' />
                                            Rating :{data.rating}
                                            <Divider className='m-2' />
                                            Brand : {data.brand}
                                            <Divider className='m-2' />
                                            Category : {data.category}
                                            <Divider className='m-2' />


                                        </Text>
                                    </Stack>
                                </CardBody>


                                <CardFooter className='m-auto'>

                                    <ButtonGroup spacing='5'>
                                        <Text color='blue.500' fontSize='2xl'>
                                            {data.price}$
                                        </Text>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy now
                                        </Button>

                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                </div>
                :

                <div className=' d-flex justify-content-center'><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}

                /> </div>
            }



        </div>



    )
}







