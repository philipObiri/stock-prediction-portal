import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a href="" className='navbar-brand text-light'>Stock Prediction Portal</a>
            <div>
                <Button buttonText='Login' buttonStyle='btn-outline-info me-2' />
                <Button buttonText='Register' buttonStyle='btn-info' />
            </div>
        </nav>
    )
}

export default Header