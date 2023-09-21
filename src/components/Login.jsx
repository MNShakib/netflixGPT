import React,{useState, useRef} from 'react';
import Header from './Header';
import { validateForm } from '../utils/Validate';

const Login = () => {
  const[isSignIn,setIsSignIn] = useState(true)

  const email = useRef(null);
  const password = useRef(null);

  const signClickHandler = () => {
    setIsSignIn(!isSignIn);
  }

  const formSubmit = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(validateForm(email.current.value, password.current.value))
  }

  return (
    <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
      <Header/>
      <form onSubmit={(e)=>e.preventDefault()} className='w-1/3 py-10 px-16 flex flex-col bg-black bg-opacity-70 mx-auto'>
        <div className='mt-10 text-[38px] text-white font-bold'>Sign {isSignIn ?"Up":"In"}</div>
        {isSignIn && <input className='p-4 my-4 bg-gray-700 rounded-md' type='text' placeholder='Full Name' />}
        <input ref={email} className='p-4 my-4 bg-gray-700 rounded-md' type='text' placeholder='email or phone number' />
        <input ref={password} className='p-4 my-4 bg-gray-700' text='password' placeholder='Password' />
        <button className='p-4 my-4 font-bold text-white rounded-md bg-red-600' onClick={formSubmit}>
          Sign Up
        </button>
        <p className='mt-4 mb-10 font-bold text-white tex-lg cursor-pointer' onClick={signClickHandler  }>
          {isSignIn?"Already a User? Sign In":"New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
