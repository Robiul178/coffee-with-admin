import { useContext } from 'react';
import img from '../../../assets/others/authentication1.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useForm, SubmitHandler } from "react-hook-form"

const LogIn = () => {

    const { singInUser } = useContext(AuthContext)

    const handleSingUp = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

        singInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    alert.success('user Log in Successfully')
                }
            })
            .catch((e) => {
                console.log(e)
            });

    }

    return (
        <section className='flex py-24 p-22 '>

            <div className='w-[700px]'>
                <form
                    onSubmit={handleSingUp}
                    className="card-body">
                    <h2>Log In Form</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline border-0 border-b-4">Sing In</button>
                    </div>
                </form>
            </div>
            <div className='w-full'>
                <img src={img} />
            </div>
        </section>
    );
};

export default LogIn;