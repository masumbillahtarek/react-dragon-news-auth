import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import man1 from '../assets/qZone1.png'
import man2 from '../assets/qZone2.png'
import man3 from '../assets/qZone3.png'
import bgImage from '../assets/bg.png'
const RightSideNav = () => {
    return (
        <div>
            <div className=" border-2 border-black rounded-xl p-4 my-6">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full my-4">
  <FaGoogle />
 Login With Google
</button>
        <button className="btn btn-outline w-full">
  <FaGithub />
 Login With Github
</button>
            </div>
            
            <div className=" border-2 border-black rounded-xl p-4">
                <h2 className="text-3xl font-bold">Find Us On</h2>
                <a className="flex gap-3 border-2 border-black rounded-xl px-4 py-2 items-center w-full my-2" href="">
                    <FaFacebook></FaFacebook>
                    FaceBook
                </a>
                 <a className="flex gap-3 border-2 border-black rounded-xl px-4 py-2 items-center w-full my-2" href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                 <a className="flex gap-3 border-2 border-black rounded-xl px-4 py-2 items-center w-full my-2" href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
     
       
            </div>
              <div className=" border-2 border-black rounded-xl p-4 my-6 bg-[#0b0a0a0a]">
                <h2 className="text-3xl font-bold">Q-Zone</h2>
                <div className="flex flex-col gap-2 my-4">
                    <img src={man1} alt="" />
                     <img src={man2} alt="" />
                      <img src={man3} alt="" />
                </div>
  
            </div>
            <div  className="bg-cover bg-center w-full rounded-xl flex flex-col gap-4 p-4 justify-center"
    style={{ backgroundImage: `url(${bgImage})` }}>
 <h3 className="text-3xl font-bold text-white">Create an Amazing Newspaper</h3>
 <p className="text-2xl text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
 <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;