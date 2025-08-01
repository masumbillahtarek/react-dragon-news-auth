import { Link, NavLink } from "react-router-dom";
import man from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user)
  const handleOnClick=()=>{
    logOut()
    .then(() => {
  console.log('SuccessFully Logged Out')
}).catch((error) => {
  console.log(error)
});
  }
    const navLink=<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/about">About</NavLink></li>
     <li><NavLink to="/career">Career</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
       <li><NavLink to="/register">Register</NavLink></li>

    </>
    return (
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
   {navLink}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="w-10 rounded-full mr-6">
      {
        user? <img className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />: <img className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={man} />
      }
         
        </div>
        {
          user?<>
          <p>{user.email}</p>
          <button onClick={handleOnClick} className="btn btn-secondary">Log Out</button> 
          </>:<Link to="/login"><button className="btn">Login</button></Link>
        }

  </div>
</div>
    );
};

export default Navbar;