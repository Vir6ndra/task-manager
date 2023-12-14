import React, { useEffect, useMemo, useState } from "react";
import { auth, Googleprovider,facebookprovider } from "../firebase";
import {  signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import SigninForm from "./SigninForm";
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [user, setUser] = useState("");
  const [register,setRegister] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    {user !== null? navigate('/') : navigate('/signin')}
  }, [user,navigate]);

  useMemo(() => setUser(localStorage.getItem("email"))
  , [])  
  const handleGoogleClick =  () => {
    signInWithPopup(auth, Googleprovider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
 
  const handleFacebookClick =  () => {
    signInWithPopup(auth, facebookprovider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email", data.user.email);
    }).catch((error) => {
      console.log('facebook lognin eror' , error);
    })
  };
  const handleResister = (e) =>{
    setRegister(true);
  }
  return (
    <div className="max-w-500 signin-margin ">
      <h3 className="font-bold text-4xl leading-11 tracking-wide">{register ? 'Sign up' : 'Sign in'}</h3>
      <p className="font-normal text-base leading-5 mt-1">{register ? 'Sign up ' : 'Sign in '}to your account</p>
      <div className="flex justify-between mt-6 flex-remover loginoptions-container">
        <div className="rounded-xl h-8 w-48 bg-white shadow-sm
          mr-3 flex items-center justify-center cursor-pointer loginpotions"
          onClick={handleGoogleClick}
        >
          <FcGoogle className="text-xl"/>
          <p
            className="bg-white text-gray-400
           hover:text-gray-600 ml-3
         font-normal text-sm"
          >
            Sign in with Google
          </p>
        </div>
        <div
          className="rounded-xl h-8 w-48 bg-white shadow-sm ml-3 flex items-center justify-center cursor-pointer loginpotions"
          onClick={handleFacebookClick}
        >
          <GrFacebook className="text-lg text-gray-400"/>
          <p className="bg-white text-gray-400
           hover:text-gray-600 ml-3
         font-normal text-sm">Sign in with Facebook</p>
        </div>
      </div>
        <SigninForm register = {register} setRegister = {setRegister} setUser = {setUser}/>
        <div className='flex mt-6 item-center justify-center' > 
          <p className="font-small text-base leading-5 font-light text-gray-600" >Don't have an account?</p>
          <p className="font-small text-base leading-5 font-light text-blue-600 ml-1 cursor-pointer" onClick={handleResister}>Register here</p>
        </div>
    </div>
    
  );
}

export default Signin;
