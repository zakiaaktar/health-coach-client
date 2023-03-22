import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user.email);

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);



                // get jwt token
                fetch('https://health-coach-server-blue.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);


                        localStorage.setItem('coach-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(err => console.log(err));

    }




    return (
        <div className="h-screen flex justify-center items-center my-[-60px] w-[96%] mx-auto">


            <div className="w-[385px] h-[580px] shadow-2xl rounded-none p-[29px]">
                <h1 className="text-4xl font-serif text-green-600 text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control w-full max-w-xs">
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
                        <input className="btn bg-green-500 rounded-full px-6 py-3 border-none font-bold" type="submit" value="Login" />
                    </div>
                </form>

                <p className='text-center'><small>New to Health Coach</small> <Link className='text-green-600 font-bold' to='/signup'>Sign Up</Link></p>



                <div className="divider mt-3">OR</div>
                <SocialLogin></SocialLogin>

                {/* <div className='text-center'>
                    <button
                        //   onClick={}
                        className="btn bg-green-500 rounded-full px-10 py-3  border-none font-bold mt-3"
                    >
                        Continue with Google
                    </button>

                </div> */}
            </div>


        </div>
    )
}

export default Login;