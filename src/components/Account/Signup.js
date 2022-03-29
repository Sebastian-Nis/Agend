import { useRef } from "react";
import { signup } from "../../firebase"
import { Outlet, Link } from "react-router-dom";


export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup(){
    
    await signup(emailRef.current.value,passwordRef.current.value);
  }
  return(
    <div className="bg-grey-lighter min-h-fit flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name" />

          <input 
              type="text"
              ref={emailRef}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />

          <input 
              type="password"
              ref={passwordRef}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password" />
          <input 
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password" />

          <button
              type="submit"
              onClick={handleSignup}
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">
            Create Account</button>

          {/* <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the&nbsp; 
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                  Terms of Service
              </a> and&nbsp;
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                  Privacy Policy
              </a>
          </div> */}
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?  
          {/* <a className="no-underline ml-2 border-b border-blue text-blue" href="../login/"> */}
        <Link to="/login" className="no-underline ml-2 border-b border-blue text-blue" href="#">Log In</Link>
                {/* Log in
          </a> */}
        </div>
      </div>
    </div>
  )
};
