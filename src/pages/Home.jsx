import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    const allNews=useLoaderData()
    console.log(allNews)
    const[news,setNews]=useState(false)
    const[displayNews,setDisplayNews]=useState(allNews)
    
      const handleFilter=(filter)=>{
        if(filter==='all'){
            setDisplayNews(allNews)
        }else if(filter===2){
            const one=allNews.filter(news1=>parseInt(news1.category_id)===2)
            setDisplayNews(one)
        }else if(filter===3){
            const two=allNews.filter(news1=>parseInt(news1.category_id)===3)
            setDisplayNews(two)
        }
        else if(filter===4){
            const three=allNews.filter(news1=>parseInt(news1.category_id)===4)
            setDisplayNews(three)
        }else if(filter===5){
            const four=allNews.filter(news1=>parseInt(news1.category_id)===5)
            setDisplayNews(four)
        }else if(filter===6){
            const five=allNews.filter(news1=>parseInt(news1.category_id)===6)
            setDisplayNews(five)
        }else if(filter===7){
            const six=allNews.filter(news1=>parseInt(news1.category_id)===7)
            setDisplayNews(six)
        }else if(filter===8){
            const seven=allNews.filter(news1=>parseInt(news1.category_id)===8)
            setDisplayNews(seven)
        }
    }
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="lg:col-span-2">
   <div className="flex justify-between items-center">
    <h3 className="text-2xl font-bold">Read all news category-wise</h3>
<FaLongArrowAltRight className="text-4xl text-purple-500" />
     <details className="dropdown ">
  <summary onClick={()=>setNews(!news)} className="btn m-1">{news?'Close':'Open'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleFilter('all')}><a>All</a></li>
    <li onClick={()=>handleFilter(2)}><a>Two</a></li>
    <li onClick={()=>handleFilter(3)}><a>Three</a></li>
    <li onClick={()=>handleFilter(4)}><a>Four</a></li>
    <li onClick={()=>handleFilter(5)}><a>Five</a></li>
    <li onClick={()=>handleFilter(6)}><a>Six</a></li>
    <li onClick={()=>handleFilter(7)}><a>Seven</a></li>
    <li onClick={()=>handleFilter(8)}><a>Eight</a></li>
  </ul>
</details>
   </div>
                   {
                    displayNews.map(news=><NewsCard news={news}></NewsCard>)
                   }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;