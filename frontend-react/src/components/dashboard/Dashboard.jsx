import { useEffect } from "react";
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
    useEffect(
        () => {
            const fetchProtectedData = async () => {
                try {
                    const response = await axiosInstance.get('/protected-view/');
                    console.log('Response Data :', response.data);

                } catch (error) {
                    console.error(error)
                }
            }
            fetchProtectedData();
        }, []
    )
    return (
        <div className='text-light'>
            <h1 className='text-center'>Dashboard</h1>
            <hr />
        </div>
    )
}
export default Dashboard;