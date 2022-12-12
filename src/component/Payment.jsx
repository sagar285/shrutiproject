import { React, useState } from "react";
import paymentimg from "../assets/paymentcopy.png"

const Payment = () => {
 

 
  //   const body = {
  //     token,
  //     product,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   return fetch(`https://shrutibackend.onrender.com/payment`, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => {
  //       console.log("response", response);
  //       const { status } = response;
  //       console.log("STATUS", status);
  //       if (status === 200) {
  //         history("/newpage");
  //       } else {
  //         alert(" Enter right detail or check internet conectivity ");
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
     <div className="w-[14rem] h-[100vw] sm:bg-slate-400 sm:w-[80rem] sm:h-[32.625rem] md:w-w-[80rem] md:h-[64rem]   ">
           <form className="w-[20rem] h-[28rem] rounded-[3rem]    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:ml-32 sm:mt-[6rem] md:ml-[14rem] md:mt-[14rem] lg:ml-[21rem] lg:mt-[12rem] xl:ml-[27rem] xl:mt-[14rem]  ">

            <img src={paymentimg} className=" h-[24rem] mb-5"/>
            <a href="https://buy.stripe.com/test_fZe4j07UucVccQ83cc" className="  p-1 tracking-[0.2rem] ml-[7rem] rounded-[1rem] bg-black text-white w-[12rem]  font-semibold" >Payment</a>
  

</form>

</div>
  );
};

export default Payment;
