
import { useContext, useState } from "react";
import { LoginContext } from "../App";

function SignIn() {
    const [signedIn, setSignedIn] = useContext(LoginContext);
    const sign = () => {
        setSignedIn((prevSign) => !prevSign);
        console.log("clicked" , signedIn)
    }
  return (
    <div className="top-0 fixed z-50 w-full justify-between bg-[#12100E] text-[20px] text-[#DFF3E4] w-ful h-fit pt-3 pb-[8px] px-8">
      <div></div>
      <div>
        <button className=" rounded-md p-3 transition-all duration-200 ease-in-out hover:bg-[#398291]" onClick={sign}>
          {signedIn ? "Sign in" : "Sign out"}
        </button>
      </div>
    </div>
  );
}

export default SignIn