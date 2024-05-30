import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query'

const UseMenu = () => {
    const axiosSecure = useAxiosSecure()

    const { data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menus')
            return res.data;
        }
    });
    return [menus, refetch]
};

export default UseMenu;