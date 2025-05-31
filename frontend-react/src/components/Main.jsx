import Button from './Button'

const Main = () => {
    return (
        <>
            <div className='container'>
                
                <div className="p-5 text-center text-white bg-light-dark rounded mt-3">
                    <h1>Stock Prediction Portal</h1>
                    <p className="text-light lead">
                        This stock prediction web app utilizes mahine learning techniques,specifically employing Keras and LSTM model , integrated within the Django web framework.
                        It forcasts future stock prices by analyzing 100-day and 200-day moving averages , essential indicators widely used by stock analysts to inform trading and investment decisions.
                    </p>
                    <Button buttonText='Login' buttonStyle='btn-info' buttonLink='/login' />
                </div>
            </div>
        </>
    )
}

export default Main