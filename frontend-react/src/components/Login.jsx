import { useContext, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const userData = { username, password };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData);
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
        catch (error) {
            setErrMessage('Invalid Credentials');
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-6 bg-light-dark p-5">
                        <h3 className="text-light text-center lead mb-2">Create An Account</h3>
                        <form onSubmit={handleLogin}>
                            <div className='mb-3'>
                                <input type="text" name="username" id="username" className='form-control' placeholder='Enter Username' value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                            </div>
                            <div className='mb-5'>
                                <input type="password" name="password" id="password" className='form-control' placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            {errMessage &&
                                <p className='text-danger' role="alert">
                                    {errMessage}
                                </p>
                            }
                            {isLoading ? (
                                <button type="submit" className='btn btn-info d-block mx-auto' disabled>
                                    <FontAwesomeIcon icon={faSpinner} /> Loggin In......
                                </button>
                            ) :
                                (
                                    <button type="submit" className='btn btn-info d-block mx-auto'>Login</button>
                                )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;