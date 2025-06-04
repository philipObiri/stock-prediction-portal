import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": 'application/json',
    }
})


// Request Interceptor:
axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            config.headers['Authorization'] = `Bearer  ${accessToken}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)




// Response Interceptor:
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    // handle failed responses:
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const response = await axiosInstance.post('/token-refresh/', { refresh: refreshToken });
                const newAccessToken = response.data.access; // get and set the refresh token as the new access token
                localStorage.setItem('accessToken', newAccessToken); // save the new access token and use it in the headers to prevent the authenticated user from being logged in and out due to session expiry
                originalRequest.headers['Authorization'] = `Bearer  ${newAccessToken}`;
                return axiosInstance(originalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken')
                // window.location.href = '/login'
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;