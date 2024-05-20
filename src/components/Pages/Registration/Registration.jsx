import img from '../../../assets/others/authentication2.png'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { createUser } = useContext(AuthContext)

    const onSubmit = data => {
        // const name = data.name;
        const email = data.email;
        const password = data.password;

        console.log(email, password)

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                if (user) {
                    alert.success('user Create Successfully')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // const handleSingUp = (e) => {
    //     e.preventDefault()

    //     const form = new FormData(e.target)
    //     const name = form.get('name')
    //     const email = form.get('email')
    //     const password = form.get('password')

    //     console.log(name, email, password)
    // }

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
            </div>
            <div className='w-full'>
                <img src={img} />
            </div>
        </section>
    );
};

export default Registration;