import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const nevigate = useNavigate()
    const nevigateLogin = event => {
        nevigate('/login')
    }
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
        setUserInfo('')
        setErrors('')
    }


    return (
        <div className='mx-auto container w-50 mt-5 sign-up'>
            <h1 className='text-center text-primary mt-5'>Please Sign Up </h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Control type="text" name="name" id="" placeholder='Please enter your name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" name="email" id="" placeholder='Please enter your email' required />
                    <p>  {errors?.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordChange} type="password" name='password' id='' placeholder="Password" required />
                    <p> {errors?.password}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handleConfirmPasswordChange} type="password" name='confirm-password' id='' placeholder=" Confirm Password" required />
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