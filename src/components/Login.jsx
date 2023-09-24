import React, { useState, useRef } from 'react';
import Header from './Header';
import { validateForm } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
const Login = () => {
  const [loginToggleForm, setLoginToggleForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [toggleEnable,setToggleEnable]=useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const signClickHandler = () => {
    setLoginToggleForm(!loginToggleForm);
  };

  const formSubmit = () => {
    setToggleEnable(!toggleEnable);
    const msg = validateForm(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg == 'Email is not valid') email.current.focus();
    else if (msg == 'Password is not valid') password.current.focus();
    else {
      if (!loginToggleForm) {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("SignIn Success")
            // ...
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log('SignUp Success \n', user);
          })
          .catch((error) => {
            setErrorMsg(error.message);
            // ..
          });
      }
    }
    setToggleEnable((prev)=>!prev)
  };

  return (
    <div className="min-w-full min-h-[100vh] bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-1/3 px-14 flex flex-col bg-black bg-opacity-70 mx-auto'
      >
        <div className='mt-5 text-[36px] text-white font-bold'>
          Sign {loginToggleForm ? 'Up' : 'In'}
        </div>
        {loginToggleForm && (
          <input
            className='p-4 my-4 text-white bg-gray-700 rounded-md'
            type='text'
            placeholder='Full Name'
          />
        )}
        <input
          ref={email}
          className='p-4 my-4 text-white bg-gray-700 rounded-md'
          type='text'
          placeholder='email'
        />
        <input
          ref={password}
          className='p-4 my-4 text-white bg-gray-700'
          type='password'
          placeholder='Password'
        />
        {errorMsg != null ? (
          <p className='text-red-600 font-bold text-base'>{errorMsg}</p>
        ) : null}
        <button
          className='p-4 my-4 font-bold text-white rounded-md bg-red-600'
          onClick={formSubmit}
          disabled={toggleEnable}
        >
          Sign {loginToggleForm ? 'Up' : 'In'}
        </button>
        <p
          className='mt-4 mb-10 font-bold text-white tex-lg cursor-pointer'
          onClick={signClickHandler}
        >
          {loginToggleForm ? 'Already a User? Sign In' : 'New to Netflix? Sign Up Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
