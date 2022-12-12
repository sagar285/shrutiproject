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
     <div className="w-[100rem] h-[100rem] bg-black fixed">
           <form className="w-[20rem] h-[25rem] rounded-[3rem]  -z-50 mt-[5rem] ml-[28rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">

            <img src={paymentimg} className=" h-[20rem] mb-6"/>
            <a href="https://buy.stripe.com/test_fZe4j07UucVccQ83cc" className="  p-1 tracking-[0.2rem] ml-[7rem] rounded-[1rem] bg-black text-white w-[12rem]  font-semibold" >Payment</a>
  

</form>

</div>
  );
};

export default Payment;
