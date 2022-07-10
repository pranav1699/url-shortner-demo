import router, { useRouter } from "next/router";
import React, { Component } from "react";
import redirect from 'nextjs-redirect'
 
const Redirect = redirect('https://github.com/pablopunk')

export default redirect("https://www.compresstheimage.com")
// function Search() {
//   const router = useRouter();
//   const { url } = router.query;
//   const test=()=>{
//     console.log("working")
//     window.location.href="https://www.compresstheimage.com"
//   }
//   const Router = useRouter()
//   return {
//     // <div >
      
//     //   <h1 onLoadStart={test} className="cursor-pointer" onClick={test}>{url}😎</h1>
//     // </div>

//     // router.push(
//     // [{source:'/',destination:'https://www.compresstheimage.com',permanent:false}]
//     // )
//     redirect:{destination:"https://www.compresstheimage.com"}
//   }
    
// }

// export default Search;
