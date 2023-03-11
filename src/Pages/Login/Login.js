import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;




        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // setAuthToken(user);
        })
        .then(err => console.log(err));

    }




    return (
        <div className="hero my-8">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col items-center justify-center lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="py-20 card w-full flex-shrink-0  max-w-sm shadow-2xl bg-base-100 rounded-none">
                    <h1 className="text-3xl text-blue-900 text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" alt="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none" type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='text-center'><small>New to Showpiece Zone</small> <Link className='text-blue-900 font-bold' to='/signup'>Sign Up</Link></p>

                    {/* <SocialLogin></SocialLogin> */}



                </div>
            </div>
        </div>
    )
}

export default Login;