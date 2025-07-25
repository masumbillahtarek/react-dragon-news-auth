import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";


const Login = () => {
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        console.log(form.get('email'))
        console.log(form.get('password'))
    }
    return (
<div>
<div className="my-12">
    <Navbar></Navbar>
</div>
           <div className="hero bg-base-200 min-h-screen">
       
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-black mt-4">Login Your Account</h2>
      <form onSubmit={handleOnSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 mx-auto">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2 className="text-center mb-6 text-xl">Do not have an account? Please <Link className="text-blue-500"  to="/register">Register</Link></h2>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;