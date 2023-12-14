import React from "react";
import Signin from "./Signin";
import "./SigninPage.css"
function SigninPage() {
  return (
  <div className="flex h-screen SigninPage">
      <div className="w-1/3 h-screen 
     bg-black text-white flex items-center justify-center
      text-6xl font-bold board-logo">
      Board.
    </div>
    <div className="w-2/3 h-screen flex items-center justify-center bg-gray-100 SigninForm signinPage-rm-align">
   <Signin />
    </div>
  </div>
  )
}

export default SigninPage;
