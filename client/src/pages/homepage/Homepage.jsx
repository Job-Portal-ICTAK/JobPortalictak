
import "./homepage.css"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
const [post, setPosts ] = useState([]);

useEffect(() =>{
  const fetchPosts = async () => {
    const  res = await axios.get("/posts")
    setPosts(res.data)
  }
  fetchPosts()
},[])

  return (
    
    <>
    <Header />
    <div className="home">
      <Posts posts={post}/>
      <Sidebar />
    </div>
  </>
  )
}
