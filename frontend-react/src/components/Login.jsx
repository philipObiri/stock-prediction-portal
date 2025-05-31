import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center ">
            <div className="col-md-6 bg-light-dark p-5">
                <h3 className="text-light text-center mb-3 lead">Welcome | Login to your Account</h3>
                <form className='form'>
                    <input type="text" name="username" id="username" className='form-control mb-3' placeholder='Enter your username' />
                    <input type="password" name="password" id="password" className='form-control mb-5' placeholder='Enter your password' />
                    <button type="submit" className='btn btn-info d-block mx-auto'>Login</button>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default Login