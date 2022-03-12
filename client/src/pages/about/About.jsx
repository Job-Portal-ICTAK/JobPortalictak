import "./about.css";
 import { Link } from "react-router-dom"
import React from "react";

export default function About() {
  return (
    <div className="section">
        <div className="container">
            <div className="title">
               <h1>ICT Academy of Kerala</h1>
            </div>
            <div className="content">
                <div className="article">
                
                 <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership 
                     model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is 
                     supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
                     <button className="button">
                     <Link className="link" to="/register">
                     Read More
                     </Link>
                    </button>
               </div>
            </div>
             <div className="points">
              <h2>Our Key Focus Areas</h2>
               <ul>
              <li>Industry focused enablement programmes for Faculty members</li>
              <li>Industry focused ICT Skills development programmes for Students</li>
              <li>Project assignments related to capability building for Institutions and Corporate.</li>
             <li>Creating Intellectual Property on niche skill areas and emerging technologies.</li>
            </ul>
           </div>      
        </div>
     </div>
   
  

  )
}
