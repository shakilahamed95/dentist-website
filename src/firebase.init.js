import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBF4RCITVbB8aSaajAJCVCWotqXZbbTWQo",
    authDomain: "dentist-website-aabe2.firebaseapp.com",
    projectId: "dentist-website-aabe2",
    storageBucket: "dentist-website-aabe2.appspot.com",
    messagingSenderId: "66757909785",
    appId: "1:66757909785:web:a9bd1b53072fc6fe0df988"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;