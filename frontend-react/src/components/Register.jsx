import React, { useState } from 'react'
import axios from 'axios'
import Alert from './Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const userData = {
            username,
            email,
            password
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData);
            console.log('Response Data :', response.data);
            console.log('Response Successful !');
            setErrors({});
            setSuccess(true);
        }
        catch (error) {
            setErrors(error.response.data);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-6 bg-light-dark p-5">
                        <h3 className="text-light text-center lead mb-2">Create An Account</h3>

                        <form className='form' onSubmit={handleRegistration}>
                            <div className='mb-3'>
                                <input type="text" name="username" id="username" className='form-control' placeholder='Enter Username' value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                                <small className='text-danger mt-2'>{errors.username && <p>{errors.username}</p>}</small>
                            </div>

                            <div className='mb-3'>
                                <input type="email" name="email" id="email" className='form-control' placeholder='Enter Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                <small className='text-danger mt-2'>{errors.email && <p>{errors.email}</p>}</small>
                            </div>

                            <div className='mb-5'>
                                <input type="password" name="password" id="password" className='form-control' placeholder='Create A New Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                <small className='text-danger mt-2'>{errors.password && <p>{errors.password}</p>}</small>
                            </div>

                            {
                                success &&
                                <Alert message="Account Created successfully!" status='success' />
                            }

                            {isLoading ? (<button type="submit" className='btn btn-info d-block mx-auto' disabled>
                                <FontAwesomeIcon icon={faSpinner} /> Please wait......
                            </button>) :
                                (<button type="submit" className='btn btn-info d-block mx-auto'>Register</button>)}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register