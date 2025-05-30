import React from 'react'

const Button = ({buttonText, buttonStyle}) => {
  return (
    <>
     <a href="" className={`btn ${buttonStyle}`}> {buttonText}</a>
    </>
  )
}

export default Button