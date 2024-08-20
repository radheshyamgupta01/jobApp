import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../reducers/auth/authSlice';


import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);


  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Login handler triggered");
    dispatch(loginUser({ email, password })).then((result) => {
      console.log("Thunk result:", result);
      if (result.meta.requestStatus === 'fulfilled') {
        const loggedInUser = result.payload.user;
        console.log("Logged in user:", loggedInUser);
  
        if (loggedInUser.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/jobs');
        }
      }
    });
  };
  
  

  

  return (
    <section className="flex flex-col lg:flex-row h-screen bg-slate-100">
      <div className="hidden lg:block lg:w-1/2 h-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-slate-50 px-6 lg:px-16 xl:px-12">
        <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-sans font-bold leading-tight mb-6 text-blue-600 font-serif">
  Welcome To Job App
</h1>


          <form className="space-y-4" onSubmit={loginHandler}>
            <div>
              <label className="block text-gray-700 mb-1 font-serif">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className=" font-serif w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="font-serif block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-serif">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder= "Confirm Password"
                minLength="6"
                className="font-serif last:w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="font-serif w-full block bg-blue-800 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log in
            </button>
          </form>

       

          
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
