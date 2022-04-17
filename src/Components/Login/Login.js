
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

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



        // setEmail(e.target.value);
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

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className='mx-auto container w-50 mt-5'>
            <h1 className='text-center text-primary mt-5'>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailClick} type="email" placeholder="Enter email" required />
                </Form.Group>
                {errors?.email && <p>{errors.email}</p>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordClick} type="password" placeholder="Password" required />
                </Form.Group>
                <p> {errors?.password}</p>
                <p>{hookError?.message}</p>
                <Button variant="primary w-50 d-block mx-auto mb-4" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to My site? <span style={{ cursor: "pointer" }} onClick={nevigateRegister} className='text-primary'>Please Sign Up</span></p>
            <p>Forget password? <span style={{ cursor: "pointer" }} className='text-primary' >Reset Your password</span></p>
        </div>
    );
};
export default Login;