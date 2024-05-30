import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make it admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Admin role success!",
                                text: "User has been admin now.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <h2>AllUsers</h2>
            <h2>Total Users: {user.length}</h2>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {item.name}
                                </td>
                                <td>{item.email}</td>
                                <th>
                                    {item.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaUserAlt className="text-red-600"></FaUserAlt>
                                    </button>}
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;