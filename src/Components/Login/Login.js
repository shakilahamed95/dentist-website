import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nevigate = useNavigate()
    const nevigateRegister = event => {
        nevigate('/signup')
    }

    return (
        <div className='mx-auto container w-50 mt-5'>
            <h1 className='text-center text-primary mt-5'>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
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