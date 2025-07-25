import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../shared/RightSideNav";
import Navbar from "../shared/Navbar";
import Header from "../shared/Header";


const NewsDetails = () => {
    const allNews=useLoaderData()
    const{id}=useParams()
    //const makeInt=parseInt(idx)
   // const news=allNews.find(item=>item.id===id)
    const news = allNews.find(item => item.id.includes(id));
    console.log(news)
    const{image_url,title,details}=news
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3 flex flex-col gap-4 my-6">
                <img className="rounded-xl" src={image_url} alt="" />
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-lg">{details}</p>
            </div>
            <div><RightSideNav></RightSideNav></div>
           </div>
        </div>
    );
};

export default NewsDetails;