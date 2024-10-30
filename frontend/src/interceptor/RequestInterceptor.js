import axios from 'axios';




const Api = axios.create({
    baseURL: 'http://localhost:3000/', // Replace with your API base URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

Api.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        // Retrieve auth token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default Api ;