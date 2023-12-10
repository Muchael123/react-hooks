import React, { useContext } from 'react'
import SignIn from './SignIn';
import { LoginContext } from '../App';

function DisplaySign() {
    const [signedIn, setSignedIn] = useContext(LoginContext);
  return <div className="text-3xl font-bold text-[#07BEB8]">
    {signedIn ? "Signed out" : "signed in"}
  </div>;
} 

export default DisplaySign