
import axios from "axios";
import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async () => {
      const  res = await axios.get("/categories");
      setCats(res.data)
    }
    getCats();
  },[])
  

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ICT Academy of kerala</span>
        <img
          src="https://imgs.search.brave.com/bxdrksaSbnyDHUNMN5sSqD45Sw628quzDkTbcST82y4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaWN0a2Vy/YWxhLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMS9j/cm9wcGVkLWljdC1p/Y28ucG5nP2ZpdD01/MTIlMkM1MTImc3Ns/PTE"
          alt=""
        />
        <p>
        ICT Academy of Kerala has influenced thousands of students and teachers
         in the state and made them realize the significance of employability.
         ICTAK has made the member colleges proud of and help them to showcase their achievements.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
