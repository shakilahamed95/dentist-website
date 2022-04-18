
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleFormSubmit = event => {
        event.preventDefault();
        toast("Thank you for confirming we will contract you for further process")
    }
    return (
        <div className='mx-auto container w-50 mt-5 sign-up'>
            <h1 className='text-center text-primary mt-5'>Comfirm Your Appointment </h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Control type="text" name="name" id="" placeholder='Please enter your name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" id="" placeholder='Please enter your email' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="address" id="" placeholder='Please enter your address' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="phonenumber" id="" placeholder='Please enter your phone number' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="service-name" id="" placeholder='Please enter your required service  name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date" name="appoinmentdate" id="" placeholder='Please enter your desired appoinment date' required />
                </Form.Group>
                <Button
                    variant="primary" type="submit">
                    Confirm Appoinment
                </Button>
                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
};

export default Checkout;