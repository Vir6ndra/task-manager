import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SigninForm({register,setRegister,setUser}) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [secondPassword,setSecondPassword] = useState("");
  


  const ReEnterPassword = () => {
    return(
      <div>
      <p className='w-full h-5 font-normal text-base leading-5 mt-4 '>Re-enter Password</p>
              <input type="password"
               className="bg-gray-100 border
                 rounded-lg w-full h-10 px-2 mt-2 outline-none" 
                placeholder="Enter your password" onChange={(e) =>setSecondPassword(e.target.value)}/>    
      </div>
    )
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(register){
      if(password !== secondPassword) return toast("password don't match")
      createUserWithEmailAndPassword(auth,email,password)
      .then((data) =>{
        toast('Sign-up successful!');
        setRegister(false)
      }).catch((error)=>{
        toast.success(error?.code);
      })
      
    }
    else {
      
      signInWithEmailAndPassword(auth, email,password).then((data) => {
        toast("Sign-in successful!")
        localStorage.setItem("email", data.user.email);
        console.log("form loc" , localStorage.getItem('email'));
        setUser(data.user.email);
      })
      .catch((error) => {
        toast.success(error?.code);
      })
    }
  
  }

  
  return (

    <div className=' w-full h-fit bg-white mt-6 flex flex-col items-center
     justify-center rounded-2xl py-8 signin-margin'>
      <ToastContainer 
      autoClose={2000}
      hideProgressBar={true}
      className = "ToastContainer"
      />
        <div className='bg-grey w-10/12'> 
            <p className='w-full h-5 font-normal sm:text-midium text-base leading-5'>Email address</p>
            <input type="email"     
             className="bg-gray-100 border 
               rounded-lg w-full h-10 px-2 mt-2 outline-none" 
              placeholder="Enter your email address" onChange={(e) =>setEmail(e.target.value)}/>
            <p className='w-full h-5 font-normal text-base leading-5 mt-4 '>Password</p>
            <input type="password"
             className="bg-gray-100 border
               rounded-lg w-full h-10 px-2 mt-2 outline-none" 
              placeholder="Enter your password" onChange={(e) =>setPassword(e.target.value)}/>
            {register && ReEnterPassword()}
             
             <div className="bg-black border
               rounded-lg w-full h-10 px-2 mt-6 text-white justify-center 
               items-center text-center cursor-pointer pt-2 font-medium" 
               onClick={handleSubmit} >{register ? 'Sign up' : 'Sign in'}</div>
        </div>
    </div>
  )
}

export default SigninForm;