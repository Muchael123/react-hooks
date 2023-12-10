import React, { useContext } from 'react'
import { LoginContext } from '../App';

function Login() {
    const [signedIn, setSignedIn] = useContext(LoginContext);
    const LoginN = () => {
        setSignedIn((prevSign) => !setSignedIn)
    }
  return (
    <div className=" w-full h-full">
      <button onClick={LoginN} className="rounded-3xl hover:bg-black hover:text-white transition-all duration-200 border p-3 border-gray-800 m-8" >
        Login now
      </button>
    </div>
  );
}

export default Login