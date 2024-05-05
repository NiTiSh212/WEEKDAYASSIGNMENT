import React, { useEffect, useState } from "react";
import Displaycard from "./Displaycard/Displaycard.tsx";
import './card.css'
const Card=()=>{
    const[data,setData]=useState('')
     useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const body = JSON.stringify({
         "limit": 10,
         "offset": 0
        });
        
        const requestOptions = {
         method: "POST",
         headers: myHeaders,
         body
        };
        
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
         .then((response) => response.json())
         .then((result) => setData(result))
         .catch((error) => console.error(error));
     },[])

     
    //  console.log(data.jdList)
    return(
        <>
        <div className="Main-card-conatiner">
        {data.jdList && data.jdList.map((ele)=>{
             return(
             <Displaycard key={ele.id} value={ele}/>
             )
         })}
        </div>
       

        </>
    )
}
export default Card;