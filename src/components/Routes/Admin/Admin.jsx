import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from "../../Hooks/useAdmin";
// useNavigation


const Admin = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <process className='progress w-56'></process>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/' state={{ from: location }}></Navigate>
};

export default Admin;