import img from '../../../assets/others/authentication2.png'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate()
    const { createUser, updateUserProfile, googleLogIn } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    const handleGoogleSingIn = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
                const userInfo2 = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                console.log(userInfo2)
                axiosSecure.post('/users', userInfo2)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
            })

    }

    return (
        <section className='flex py-24 p-22'>

            <div className='w-[700px]'>
                <form
                    // onSubmit={handleSingUp}
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <h2>Registration Form</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' {...register("name")} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' {...register("email")} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" {...register("password")} className="input input-bordered" required />
                        <label className="label">
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline border-0 border-b-4">Sing Up</button>
                    </div>
                </form>
                <div>
                    <button
                        onClick={handleGoogleSingIn}
                    >
                        Google Sing In
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <img src={img} />
            </div>
        </section>
    );
};

export default Registration;