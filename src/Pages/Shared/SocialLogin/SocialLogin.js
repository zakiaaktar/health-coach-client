import React, { useContext } from 'react';
//import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);


                const currentUser = {
                    email: user.email
                }

                // setAuthToken(user);

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

                    });
            })
            .catch(err => console.error(err));
    }




    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn bg-green-500 rounded-full px-10 py-3  border-none font-bold mt-3 ">Continue With GOOGLE</button>
            </p>
        </div>
    );
};

export default SocialLogin;