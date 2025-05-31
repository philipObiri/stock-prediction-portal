import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link to='/' className='navbar-brand text-light'>Stock Prediction Portal</Link>
            <div>
                <Button buttonText='Login' buttonStyle='btn-outline-info me-2' buttonLink='/login' />
                <Button buttonText='Register' buttonStyle='btn-info' buttonLink='/register' />
            </div>
        </nav>
    )
}

export default Header