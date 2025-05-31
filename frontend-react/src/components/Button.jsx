import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({buttonText, buttonStyle, buttonLink}) => {
  return (
    <>
     <Link to={`${buttonLink}`} className={`btn ${buttonStyle}`}> {buttonText}</Link>
    </>
  )
}

export default Button