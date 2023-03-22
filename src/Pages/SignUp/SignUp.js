import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const SignUp = () => {
    const { createUser } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);
            })
            .then(err => console.log(err));
    }



    return (
        <div className="h-screen font-serif flex justify-center items-center my-[-60px]  w-[96%] mx-auto">
            <div className="w-[385px] h-[580px] shadow-2xl rounded-none p-[29px]">
                <h1 className="text-4xl text-green-600 text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-green-500 rounded-full px-6 py-3 border-none font-bold" type="submit" value="Sign Up" />
                    </div>
                </form>

                <p className='text-center'>Already have an account? <Link className='text-green-600 font-bold' to='/login'>Login</Link></p>


            </div>

        </div>
    )
}



export default SignUp;