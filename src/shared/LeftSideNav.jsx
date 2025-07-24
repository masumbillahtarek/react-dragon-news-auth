import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const[category,setCategory]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className="text-black">
            <h1 className="text-4xl ">AllCategory</h1>
           <div className="flex flex-col gap-4 my-6 justify-start ">
             {
                category.map(perCategory=><Category key={perCategory.id} perCategory={perCategory}></Category>)
            }
           </div>
        </div>
    );
};
const Category=({perCategory})=>{
    const{name,id}=perCategory
    return(
     <Link className="text-2xl font-bold ml-12" to={`category/${id}`}>{name}</Link>
    )
}

export default LeftSideNav;