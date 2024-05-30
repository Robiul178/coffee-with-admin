import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use((config) => {
        console.log('req stopped by interseceptor', localStorage.getItem('access-token'))


        config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
        return config
    }, (err) => {
        return Promise.reject(err)
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log(error)
        //log out user and send login page by error status
        if (status === 401 || status === 403) {
            await logOutUser()
            navigate('/login')
        }
        return Promise.reject(status);
    });

    return axiosSecure
};

export default useAxiosSecure;