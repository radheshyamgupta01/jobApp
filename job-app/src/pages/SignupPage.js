import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../reducers/auth/authSlice';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error ,success} = useSelector((state) => state.auth);
  console.log(success,"this is success")


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register({ email, password }))
        
    } else {
      alert('Passwords do not match');
    }
  };
  React.useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);


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
          <h1 className="text-xl md:text-2xl font-bold leading-tight mb-6 text-blue-700 font-serif">Create your account</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 font-serif">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
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
                className="font-serif w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                minLength="6"
                className="font-serif w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="font-serif w-full block bg-indigo-700 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Sign Up
            </button>
          </form>

          <hr className="my-6 border-blue-900" />

          <p className="text-center mt-8 font-serif">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Log in</a></p>
        </div>
      </div>
    </section>

  );
};

export default SignupPage;
