import React from 'react'
import Afterinput from "./component/Afterinput"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from './component/Input';
import Payment from './component/Payment';
import New from "./component/New"
const App = () => {
  return (
   <>
 <Router>
  <Routes>
    <Route path="/" element={<Input/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/inputafter" element={<Afterinput/>}/>
    <Route path="/newpage" element={<New/>}/>
  </Routes>
 </Router>

 </>
   
   
  )
}

export default App