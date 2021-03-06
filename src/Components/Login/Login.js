
import { sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const nevigate = useNavigate()
    const nevigateRegister = event => {
        nevigate('/signup')
    }
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

    const handleEmailClick = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }
    const handlePasswordClick = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmail(userInfo.email, userInfo.password);

    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
                toast('An mail is sent to your email for reset password request ')
            })
    }

    return (
        <div className='mx-auto container w-50 mt-5 log-in'>
            <h1 className='text-center text-primary mt-5'>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailClick} type="email" placeholder="Enter email" required />
                </Form.Group>
                {errors?.email && <p className='text-danger'>{errors.email}</p>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordClick} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'> {errors?.password}</p>
                <p className='text-danger'>{hookError?.message}</p>
                <Button variant="primary w-50 d-block mx-auto mb-4" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to My site? <span style={{ cursor: "pointer" }} onClick={nevigateRegister} className='text-primary'>Please Sign Up</span></p>
            <p>Forget password? <span onClick={handleResetPassword} style={{ cursor: "pointer" }} className='text-primary' >Reset Your password</span></p>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default Login;