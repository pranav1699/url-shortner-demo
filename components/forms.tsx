import router, { Router, useRouter } from "next/router";
import React, { Component, useState } from "react";

function Forms({ shortUrlOld }) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [shortUrl, setShortUrl] = useState(shortUrlOld);
  const handleChange = (event: any, setstate) => {
    setstate(event.target.value);
  };

  const search = async () => {
    console.log();
    const y = { url: value, name: name, type: type };
    // const postResult: any = await fetch(
    //   "http://localhost:4000/url-generator/generate",
    //   {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(y)
    //   }
    // ).then((res) => res.json());

    console.log(y);
    // await setShortUrl("http://localhost:3000/"+ postResult)
    // localStorage.setItem('x', "http://localhost:3000/"+ postResult)
    console.log(localStorage.getItem("x"));
  };

  return (
    <div className="flex flex-col">
      
        <label className="font-semibold text-gray-700">
          URL
          <input
            className="border-2 rounded-md font-normal m-3 p-2"
            placeholder="Enter the url"
            type="text"
            value={value}
            onChange={(e) => handleChange(e, setValue)}
          />{" "}
        </label>
      
      
        <label className="font-semibold text-gray-700">
          Name
          <input
            className="border-2 rounded-md font-normal m-3 p-2"
            placeholder="Enter the name"
            type="text"
            value={name}
            onChange={(e) => handleChange(e, setName)}
          />{" "}
        </label>
      
        <label className="font-semibold text-gray-700">
          Type
          <input
            className="border-2 rounded-md font-normal m-3 p-2"
            placeholder="Enter the type"
            type="text"
            value={type}
            onChange={(e) => handleChange(e, setType)}
          />{" "}
        </label>
      
      <div>
        <button
          className=" m-2 p-2 bg-red-400 rounded-md text-justify text-zinc-700"
          type="submit"
          value="Submit"
          onClick={search}
        >
          Submit{" "}
        </button>
      </div>
      <a href={shortUrl}>{shortUrl}</a>
    </div>
  );
}

export default Forms;

export async function getServerSideProps(req: any) {
  let x = localStorage.getItem("x");
  console.log(x);
  console.log("old", x);
  if (x == undefined) {
    x = "";
  }
  return {
    props: {
      shortUrl: x,
    },
  };
}
