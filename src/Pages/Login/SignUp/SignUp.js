import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.value;
    }
    return (
        <div className='signup-container'>
            <h2> Sign Up Here</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Sign Up" />
            </form>

            <p>Have Already An Account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login Now</Link></p>
        </div>
    );
};

export default SignUp;