
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
//import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {createUser}=useContext(AuthContext)
       const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photoURL')
        const email=form.get('email')
        const password=form.get('password')
        console.log(name,photo,email,password)
        createUser(email,password)
        .then((result) => {
    const user = result.user;
   console.log(user)
 return updateProfile(user, {
  displayName: name, photoURL: photo,
}).then(() => {
  console.log('Profile Updated')
}).catch((error) => {
console.error(error)
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,' | ',errorMessage)
  });
    }
    return (
       <div>
<div className="my-12">
    <Navbar></Navbar>
</div>
           <div className="hero bg-base-200 min-h-screen">
       
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-black mt-4">Register Your Account</h2>
      <form onSubmit={handleOnSubmit} className="card-body">
         <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <h2 className="text-center mb-6 text-xl">Already have an account? Please <Link className="text-blue-500"  to="/login">Login</Link></h2>
    </div>
  </div>
</div>
</div>
    );
};

export default Register;