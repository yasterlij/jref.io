import { ne } from "drizzle-orm";

async function getData() {
    // 1 endpoint -API?
    // const endpoint = "http://localhost:3000/api/posts";
    // const res = await fetch(endpoint);//HTTP GET method

    // if (!res.ok) {
    //     throw new Error("Fialed to fetch data!");
    // }
    // return res.json();
    return {items:[]}
}



export default async function BlogPage() {
    const data = await getData();
    const items = data && data.items ? [...data.items]: []
    return <main>
        <h1> Hello World from Blog page</h1>
        <p>post</p>
        {items && items.map((item, idx)=>{
             return <li key={'post-${id}'}>{ item.title}</li>
        })}
       
    </main>
    
}