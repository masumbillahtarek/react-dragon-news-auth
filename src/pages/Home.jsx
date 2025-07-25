import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const allNews=useLoaderData()
    console.log(allNews)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="lg:col-span-2">
                   {
                    allNews.map(news=><NewsCard news={news}></NewsCard>)
                   }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;