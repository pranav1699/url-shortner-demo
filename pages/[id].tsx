import { useEffect } from "react";

function Search({ searchResults }) {
  let x: string = removeHttp(searchResults.clientUrl);
  console.log(x);
  x = `http://` + x;
  return useEffect(() => {
    window.location.href = x;
  });
}

export default Search;

export function removeHttp(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export async function getServerSideProps(req: any) {
  console.log(req.query.id);
  const searchResults: any = await fetch(
    "http://localhost:4000/url-generator/url/" + req.query.id
  ).then((res) => res.json());
  return {
    props: {
      searchResults,
    },
  };
}
