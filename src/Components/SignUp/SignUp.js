import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const nevigate = useNavigate()
    const nevigateLogin = event => {
        nevigate('/login')
    }
    return (
        <div className='mx-auto container w-50 mt-5'>
            <h1 className='text-center text-primary mt-5'>Please Sign Up </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Control type="text" name="name" id="" placeholder='Please enter your name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" id="" placeholder='Please enter your email' required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' id='' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='confirm-password' id='' placeholder=" Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} name='terms' label="Accept terms and Condition" />
                </Form.Group>
                <Button disabled={!agree}
                    variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already Have An Account? <span style={{ cursor: "pointer" }} className='text-primary' onClick={nevigateLogin}>Please Login</span></p>

        </div>
    );
};

export default SignUp;