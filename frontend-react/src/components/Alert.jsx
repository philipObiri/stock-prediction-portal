const Alert = ({ status, message }) => {
    // The alert componanet takes two props : the status which could be 'info, success, warning or danger' 
    // and the message which could be a simple text/string
    return (
        <>
            <div className={`alert alert-${status} alert-dismissible fade show`} role="alert">
                {message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Alert;