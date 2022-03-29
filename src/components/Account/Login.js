import { Outlet, Link } from "react-router-dom";

export function Login() {
    return(
      <div className="bg-green-500er min-h-fit flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
          
            <input 
              type="text"
              className="block border border-slate-300 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />
    
            <input 
              type="password"
              className="block border border-slate-300 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password" />
          
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >Submit</button>
    
            <div className="text-center text-sm text-grey-dark mt-4">
              Forgot your password? Click&nbsp; 
              <a className="no-underline border-b border-grey-dark text-indigo-600 font-medium" href="#">
                  Here
              </a>                        
            </div>
          </div>
    
          <div className="text-grey-dark mt-6">
            Don't have an account?&nbsp; 
            <Link to="/signup" className="no-underline border-b border-blue text-blue" href="../login/">
                Sign up
            </Link>
          </div>
        </div>
      </div>
    )
};
