import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewsCard = ({news}) => {
    const{image_url,title,details,total_view,id}=news
    const{name,published_date,img}=news.author
    return (
       <div className="border-2 rounded-xl p-4 my-6">
        <div className="flex justify-between items-center bg-[#2a292910] p-3 rounded-xl">
            <div className="flex gap-4 items-center">
                <div><img className="w-12 rounded-full" src={img} alt="" /></div>
                <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-lg">{published_date}</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <CiBookmark className="text-2xl font-bold"/>
                < CiShare2 className="text-2xl font-bold" />
            </div>
        </div>
        <div className="flex flex-col gap-3 my-3">
        <h2 className="text-3xl font-bold">{title}</h2>
        <img className="rounded-xl" src={image_url} alt="" />
        <p className="text-lg">
        {
  details.length > 200 ? (
    <>
      {details.slice(0, 200)}...
      <Link className="text-[#FF8C47]" to={`/news/${id}`}>Read more</Link>
    </>
  ) : (
    details
  )
}
        </p>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <FaStar className="text-[#FF8C47]"/>
                <FaStar className="text-[#FF8C47]"/>
                <FaStar className="text-[#FF8C47]"/>
                <FaStar className="text-[#FF8C47]"/>
                <FaStar className="text-[#FF8C47]"/>
                <p>{news.rating.number}</p>
            </div>
            <div className="flex gap-2 items-center">
           <MdOutlineRemoveRedEye className="text-xl"/>
            <p>{total_view}</p>
            </div>
        </div>
       </div>
    );
};

export default NewsCard;