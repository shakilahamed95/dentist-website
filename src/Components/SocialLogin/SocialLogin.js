import React from 'react';
import google from '../../images/media/google.png'
import github from '../../images/media/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleuser, googleloading, googlerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);
    let errorelement;
    if (googleuser || githubuser) {
        navigate('/')
    }
    if (googlerror || githuberror) {
        errorelement = <p className='text-danger'>{googlerror?.message}{githuberror?.message}</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorelement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-3'>
                <img style={{ width: "30px" }} className='mx-3' src={google} alt="" />
                Google Login</button>
            <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-3'>
                <img style={{ width: "30px" }} className='mx-3' src={github} alt="" />
                Github Login</button>
        </div>
    );
};

export default SocialLogin;