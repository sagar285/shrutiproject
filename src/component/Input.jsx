import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo2.jpeg"

const Input = () => {
const [age, setage] = useState()
const [agecheck,setagecheck]=useState();
function ageheck(e){

if(e.target.value>=18 && e.target.value<65)
    setage(true)
}  
  return (
    <>
      <div className="w-[14rem] md:w-[100%] md:h-[100rem] md:fixed" >
        <img src={img} className="   "/>
        <input type="text" placeholder="enter your age"  
         className="bg-black mt-[6rem]  ml-3 text-white md:w-[12rem] md:h-[3rem] md:ml-[11rem]  " onChange={ageheck} />
         
      
      { (age)?  
     <Link to="/inputafter" className=" text-white ml-[3rem]  bg-black"><button className=" mt-[1rem] " >Enter</button></Link>
    :<Link to ="/newpage" className="  bg-black text-white ml-[3rem]   "><button className=" mt-[1rem] w-[4rem] ">Enter</button></Link>}
    </div>
    </>
  );
};

export default Input;
