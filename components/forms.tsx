import router, { Router ,useRouter} from "next/router";
import React, { Component, useState } from "react";

function Forms (){
  

  const [value, setValue] = useState("");
  const handleChange=(event: any)=>{
    // console.log(value)
    setValue(event.target.value);
  }

  const search = () => {
    console.log(value)
    router.push({
      pathname: "/search",
      query: {
        url: value,
      },
    });
  };

    return (
      <div>
        {/* <form onSubmit={search}> */}
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
        {/* </form> */}
      </div>
    );
  }


export default Forms;
