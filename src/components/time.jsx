import { useEffect, useState } from "react";
let Time=()=>{

const [Time,updateTime]=useState(new Date());


useEffect(()=>{
 const Intervald= setInterval(()=>{

    updateTime(new Date())
  },1000);


 return ()=>{
console.log("clear it")
 clearInterval(Intervald)
 } 
},[])
  return <h3  class='text-primary'>Time is : {Time.toLocaleTimeString()}</h3>
}
export default Time; 