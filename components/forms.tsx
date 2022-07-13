import router, { Router ,useRouter} from "next/router";
import React, { Component, useState } from "react";

function Forms ({shortUrlOld}){
  

  const [value, setValue] = useState("");
  const [shortUrl, setShortUrl]= useState(shortUrlOld);
  const handleChange=(event: any)=>{
    setValue(event.target.value);
  }

  const search = async() => {
    console.log()
    const y ={url: value}
    const postResult: any = await fetch(
      "http://localhost:4000/url-generator/generate",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(y)
      }
    ).then((res) => res.json());
    
    console.log(postResult);
    await setShortUrl("http://localhost:3000/"+ postResult)
    localStorage.setItem('x', "http://localhost:3000/"+ postResult)
    console.log(localStorage.getItem('x'))
  };

    return (
      <div>
          <label>
            URL:
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(e)}
            />{" "}
          </label>
          <div className="m-3 bg-red-400 w-20 h-10 rounded-md">
            <button className ="ml-4" type="submit" value="Submit" onClick={search} >Submit </button>
          </div>
          <a href={shortUrl}>{shortUrl}</a>
      </div>
    );
  }


export default Forms;

export async function getServerSideProps(req: any) {
 
  let x = localStorage.getItem("x");
  console.log(x)
console.log('old', x);
if(x == undefined){
  x=''
}
  return{
    props:{
      shortUrl: x
    }
  }
}