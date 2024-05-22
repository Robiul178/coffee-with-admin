import swal from 'sweetalert';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const TabPannel = ({ i }) => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const { _id, name, recipe, image, price } = i;

    const handleAddToCart = (food) => {

        if (user && user.email) {

            const foodInfo = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }

            axiosSecure.post('/carts', foodInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        swal({
                            title: "Good job!",
                            text: "Food added successfully",
                            icon: "success",
                            button: "Aww yiss!",
                        });
                    }
                })

        } else {
            swal({
                title: " Unauthorized Access!",
                text: "You Are Not Logged!",
                icon: "Warning",
            });
        }



    }

    return (
        <div className="card  shadow-xl">
            <figure >
                <img src={image} className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={() => handleAddToCart(i)}
                        className="btn btn-outline border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TabPannel;