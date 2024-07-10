import { useState } from "react";
import React from 'react'; 

function Home() {
    const [first, usefirst]= useState(0);
    const [second, usesecond]= useState(0);
    let [result, setres]= useState(0);
    const handleAdd = () =>{
        result=first+second;
        setres(result);
        console.log(result);
    }
    const handlesub = () =>{
        result=first-second;
        setres(result);
        console.log(result);
    }
    const handlemul = () =>{
        result=first*second;
        setres(result);
        console.log(result);
    }
    const handlediv = () =>{
      result=first/second;
      setres(result);
      console.log(result);
  }
  return (
    <div className="cal">
      <center><h1>Calculator</h1></center>
      <center><div className="input">
      <input type="text" className="inputtag" onChange={(e) => usefirst(parseInt(e.target.value))}/> <br/>
      <input type="text" className="inputtag"   onChange={(e) => usesecond(parseInt(e.target.value))}/> <br/>
      </div></center>
      <div>
      <button className="button1" onClick={handleAdd}>Add</button>
      <button className="button" onClick={handlesub}>sub</button>
      <button className="button" onClick={handlemul}>mul</button>
      <button className="button" onClick={handlediv}>div</button>
      </div>

    </div>
  )
}

export default Home
