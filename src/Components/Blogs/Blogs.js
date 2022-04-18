import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blog'>
                <h5>Difference between authorization and authentication</h5>
                <p>Authentication is generally  used to authenticate someone's identity but  authorization is a way to provide permission to someone to access a particular resource.Authentication is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for and Authorization is the process to check if the user has permission to use a resource or not. In Authentication Login details, usernames, passwords, OTPs required. In Authorization Checks the security level and privilege of the user, thus determining what the user can or cannot have access to the website.In Authentication Data is available via Token IDs but in Authorization Data provided via Access token.
                </p>
            </div>
            <div className='blog'>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase Authentication helps a user to get signed-in without having to much dificulties. sign in or sign up process by using google,github,facbook,tweeter or other media can be easily performed by firebase authentication.In this process the default security rules require users to be authenticated.Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.There are 5 basic Authentication Types are available. They are ,
                    <ol><li>Password-based authentication.</li>
                        <li>Multi-factor authentication. </li>
                        <li>Certificate-based authentication. </li>
                        <li>Biometric authentication.  </li>
                        <li>Token-based authentication.</li>
                    </ol>
                </p>
            </div>
            <div className='blog'>
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>
                    There are many services which Firebase provides other than authentication.User authentication is a method that keeps unauthorized users from accessing sensitive information. Most useful services provide by firebase rather than login are :
                    <ol>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging.</li>
                    </ol>
                </p>
            </div>
        </div>
    );
};

export default Blogs;