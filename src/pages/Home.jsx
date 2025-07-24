import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="lg:col-span-2"><h2 className="text-4xl">News Coming Soon</h2></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;