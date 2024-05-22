import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
    const axiosSecure = useAxiosSecure()

    const { data: carts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    });
    return [carts]
};

export default useCarts;