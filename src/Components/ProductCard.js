import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/productSlice'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStock } from 'react-icons/ai';
import { MdDiscount } from 'react-icons/md';
import { RotatingLines } from 'react-loader-spinner';
import { PageNav } from './PageNav';


export const ProductCard = () => {
    
    const productsData = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (

        <div className='container-fluid'>
            <div className="row  ">
                {
                    productsData.products ? productsData.products.map((data,index) => {
                        if (data === undefined) {
                            return (
                                <div className=' d-flex justify-content-center'><RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
    
                            /> </div>
                            )
                        }
                        return (
                            <Col sm={12} md={6} lg={4} xl={3} className='p-2 ' >
                                <Card style={{ height: '640px' }} className='my-3  bg-light '  >
                                    <Card.Header  className='p-0'>
                                        <img src={data.thumbnail} style={{ height: '250px', margin: 'auto' }} alt="" />
                                        

                                    </Card.Header>
                                    <Card.Header  >
                                    <div className='d-flex justify-content-between align-items-center mt-3 '>
                                            <Card.Title >{data.title}</Card.Title>
                                            <Button variant="light" className='ms-3  '>{data.price} $  </Button>
                                        </div>
                                        </Card.Header>
                                    <Card.Body>
                                        <Card.Title>{data.brand}</Card.Title>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                        <div className='d-flex justify-content-center my-3'>
                                            <Button variant="secondary" className='ms-3 d-flex align-items-center  '>{data.stock} <AiOutlineStock />  </Button>
                                            <Button variant="warning" className='ms-3 d-flex align-items-center  '>{data.rating} <AiFillStar />  </Button>
                                        </div>
                                        <Card.Text className='d-flex justify-content-between w-50 m-auto' >
                                            <div> {data.category}</div>
                                            <div className='d-flex align-items-center '>
                                                <div>  {data.discountPercentage}</div>
                                                <div><MdDiscount /></div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted text-center"><Link to={`/products/${data.id}`}> <Button variant="secondary"  >  Show More  </Button></Link></Card.Footer>
                                </Card>
                            </Col>

                        )
                    }) :
                        <div className=' d-flex justify-content-center'><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div>
                }

            </div>
            <PageNav />

        </div>



    )
}
